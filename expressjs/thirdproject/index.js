var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const app = express();

// app.set('view engine', 'ejs');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}))

// mongoose.connect('mongod://127.0.0.1:27017/thirdproject');
// const db = mongoose.connection;
// db.on('error', (err)=>{console.log(err)});
// db.once("once", ()=>{console.log('connected to database')})

//middleware
app.get('/', (req, res,next)=>{
    console.log('welcome');
    res.render('home');
});

// app.use('/success', (req,res)=>{
//     username= req.query.username;
//     pwd= req.query.pwd ;
//     console.log('success page');
//     res.send("Username = "+username+" \nPassword = "+pwd); 
// });

app.use('/success', (req,res)=>{
    username= req.body.username;
    pwd= req.body.pwd ;
    console.log('success page');
    res.send("Username = "+username+" \nPassword = "+pwd); 
});

app.listen(4000, ()=>{
    console.log("serving at port 4000");
})