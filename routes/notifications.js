var express = require('express');
var router = express.Router();
const Notification = require('../models/notification');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var admin = require("firebase-admin");

router.post('/sendnotifications',passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var body = req.body.body;
    var title = req.body.title;
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
                    res.json({sucess:true,msg:"Notification sent"}) 
                }
                else {
                    res.json({sucess:false,msg:"Failed to save Notification!"});
                }
            });
            
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
            res.json({sucess:false,msg:"Failed to Send Notification!"}) 
        });


    


});

router.get('/getnotifications',passport.authenticate('jwt', { session: false }), function (req, res) {
    Notification.getNotifications((err, notf) => {
        if (err) throw err;
        else
            res.json( {notf} );
    });
});

module.exports = router;

