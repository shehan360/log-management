const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var admin = require("firebase-admin");
var schedule = require('node-schedule');
const jwt = require('jsonwebtoken');

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: 'myfirstapp-3c0ec',
        clientEmail: 'firebase-adminsdk-thmst@myfirstapp-3c0ec.iam.gserviceaccount.com',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/DhrXkS9wh50+\njORXwDa69/nBXyI2tAUzMTVy4WhZe51FRXuTYutZaEcsI01BkeUWJLe5GNPsRHTm\n9Zmq/XRCHN76M11CmYGV1N9jf2ufpB4n7aYk1wCq+FpvyDWXdMCqOo/HCFoaiN3I\ngnOxrwWy2ltdFZ7YszEUVA53fpSup03QejjQdS7e8dRUypXPNy30VS65REfvLxoP\nhIutMtkr9D+cyVLeYA3zRafsyIjDsYgoCDndQiw7V1CSzYAPEfCNdKLCebVDTAAi\n4nXYRpA7JSeboQ7BFENpZOvEhtINW9IWh3CAdCBxNX36gqX1uQKXmxeUPuG1zpuD\nPNdiTj/vAgMBAAECggEANHWgAy7XUtO55nHzRPD/Vik+x8zibRjTELJjVa704xUh\nIuMoQlj3/G24lTMARI/V0lW0qLtbfVVyr/QiBKRhZsHcq+Csq9vQjB6OVBipqYT7\nzsTfSOBMS6Wz11um83ZYbKV10xXE/+Iy25qOP+yp6OkyCwYjvqa9RDKsYj08gBPw\nob7+j/i1K4cgtSn0bN7EcUuXkU+fBFCgrMZ3c6hkSVteAyvweMwrLwQOGABLBktw\npSZSEB70wc/rnGmUIR2Hehg8esKhY4cSJEMmLNBl8FDGfj18r3eYxFUplaVTWzEm\nydflKEx4luMJQ+xEDAQ2Md/e2einPS5yjXit9fObMQKBgQDnsCc3kG4cfg4RrB5d\nqt3NZow9PNrdyRLPJzY8oZOnBEjRBqOgDFE4XN7fY4CdJnXPJ17QjUzoBqY6hLi0\ngIy3Qu49iqiIKgsEbt59B5M/xM51X1JhdzagsjEP0527rhJMfRqp9WEQnIk3/PT2\nt7xKyKrL0GRrLVWSkjI1iI/tmQKBgQDTGmz6PLHiKaGIwRNO2XW2FKmtFoHLLBrT\n1CGUFU/mZ3b5jek2wgBwDXxDaCvPIAIFrFuiRIUb6AgPF/reCna0ZUKSL+CYYEAI\n5nxgRLw1jOfKrQkrO8cgYF30oE5n+vxGJpE5FvOUtly/NlY3lO8SdNCeQGV3AUHp\ni6mag92+xwKBgC3H+xfZrEhpCDKpxh5QIx/xQYjgO4dTsinI38i/TMPV7uWO4EpB\n5NK0Vz3hFYr4DJNwfiXLpgS7O6GYlD7mn+eejCERAxhU5nRry/78vjX9l6ZNvaOQ\nwPSkAVnVQPfS/76pgdlPqWx04hB0JZuS1twYJte7R/x9qskZpl45q+cRAoGBAK79\nutR8N6CYjfTEx/KWxMLYwgZfH9yBhQOPVv5f5EnD/pXDk0z26FH6e8WMtrQNfl+h\njpwmXIjTgMqyQByLY/cJ8XMpCO6G6s318agDklh5ozMY2P7joJ8wAvJjaFs9bJ3i\nHoPKiMP/n0ZKDpIofT05ZC2qh/FsM20bfs48/TXFAoGBAN9Dtmk3SQTJuEZUbR7S\nCZA7QfSsVYeDCR7FSC6y/djFr4g3kceDIyoNsXc5elZUrLuhd5DzwB78khwfDRTB\nNiBW3Xuft3F3w5fLW/rRczF3WHKnW/FGhys9sYAIXhkZIn3wGh5G7RfaFdRq1Rdt\n6s/oyxiQVga0C0ZKUDSGdNnr\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://myfirstapp-3c0ec.firebaseio.com'
});

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error' + err);
});


const app = express();
const users = require('./routes/users');
const logdata = require('./routes/logdata');
const notifications = require('./routes/notifications');


const port = process.env.PORT || 8080; //deploy heroku settings
//const port = 3000;


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/logdata', logdata);
app.use('/notifications', notifications);
app.use(express.static(__dirname + '/public'));//deploy heroku settings
//deploy heroku settings
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

/** 
app.get('/', (req, res) => {
    res.send('!');
});
*/
var j,hour,min;
app.post('/notificationsettings/setnotificationtime',passport.authenticate('jwt', { session: false }), function (req, res, next){
    hour=req.body.hour;
    min=req.body.min;
    var time=min+" "+hour+" * * *";
    console.log(time);
    if(j)
        j.cancel();
    j = schedule.scheduleJob(time, function () {
        const Log = require('./models/log');
        var moment = require('moment');
        //var d=moment().format('YYYY-MM-DD');
        var d="2017-01-01"
        Log.getLogNamesByUploadDate(d,(err,log)=>{
            if (err) throw err;
            else{
                var body="Log files uploaded today: "+log.length;
                sendNotfication(body,"Log files scessfully uploaded");
            }
        });
        
        Log.getDownLogNames(d,(err,log)=>{
            if (err) throw err;
            else{
                var body="Log files needing attention: "+log.length;
                sendNotfication(body,"Attention!");
            }
        });
    });
    
    if(j)
        res.json({sucess:true,msg:"Time set"});
    else
        res.json({sucess:false,msg:"Time not set"});
});

app.post('/notificationsettings/getnotificationtime',passport.authenticate('jwt', { session: false }),function(req,res,next){
    if(hour&&min){
        res.json({hour:hour,min:min});
    }
    else{
        res.json({hour:"-1",min:"-1"});
    }
});


app.listen(port, function () {
    console.log('Server started!' + port);
});

sendNotfication=function(body,title){
   
    const Notification = require('./models/notification');
    var date = Date.now();

    let newNotification = new Notification({
        title: title,
        body: body,
        date: date,
    });
    var payload = {
        data: {
            body: body,
            title: title
        }
    };


 
    var topic = "deepl";
    // Send a message to devices subscribed to the provided topic.
    admin.messaging().sendToTopic(topic, payload)
        .then(function (response) {
            // See the MessagingTopicResponse reference documentation for the
            // contents of response.
            console.log("Successfully sent message:", response);
            Notification.saveNotification(newNotification, (err, success) => {
                if (success) {
                    console.log("Sent Notification!")
                }
                else {
                    console.log("Notification not saved!")
                }
            });
            
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
        });
}