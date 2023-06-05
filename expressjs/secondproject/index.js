var express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=> {
    res.render('login');
})

app.get('/success', (req, res)=>{
    username= req.query.username;
    pwd= req.query.pwd;
    res.send("Username = "+username+" \nPassword = "+pwd);
})

app.post('/success', (req, res)=>{
    data = {
    username: req.body.username,
    pwd: req.body.pwd
    }
    res.send(JSON.stringify(data));

})

app.listen(3000, ()=>{
    console.log('serving at 3000 port')
})