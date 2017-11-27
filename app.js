const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require ('mongoose');
const config=require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log('Connected to database'+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('Database error'+err);
});


const app = express();
const users=require('./routes/users');
const logdata=require('./routes/logdata')

//const port = process.env.PORT || 8080;
const port=3000;


app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/logdata',logdata);

app.get('/',(req,res)=>{
    res.send('!');
});

app.listen(port, function(){
    console.log('Server started!'+port);
});