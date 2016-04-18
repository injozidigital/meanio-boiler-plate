var IndexController = require('../controllers/IndexController');


module.exports = function(app){
    app.get("/",IndexController.index);
    app.get("/send",IndexController.sender);
    app.get("/receive",IndexController.receiver);
}