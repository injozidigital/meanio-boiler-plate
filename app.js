/**
 * Created by Steinburch on 4/18/16.
 */
var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
app.set('port', process.env.PORT || 3000);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));

app.use(cors());

require('./middleware/Router')(app);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('dataSend', function(msg){
        io.emit('dataSend', msg);
    });
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo db connected');
});