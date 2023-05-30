var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var urlencoded = bodyParser.urlencoded({extended:false});

// serve your css as static
app.use(express.static('public'));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/views/index.html");
} );
app.get("/process", function (req, res) {
    data = {
        name:req.query.name,
        age:req.query.age,
        semester:req.query.sem
    };
    console.log(data)
    res.send(JSON.stringify(data));
})
app.listen(3000)
console.log("service started")