exports.index = function(req,res){
    var data = {title:"test"};
    res.render('pages/index',{data:data});
}

exports.sender = function(req,res){
    var data = {title:"test"};
    res.render('pages/SendDataPage',{data:data});
}

exports.receiver = function(req,res){
    var data = {title:"test"};
    res.render('pages/ReceiveDataPage',{data:data});
}
