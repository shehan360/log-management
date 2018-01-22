const mongoose = require('mongoose');
const config = require('../config/database');


const NotificationSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date
    }
});

const Notification = module.exports = mongoose.model('Notification',NotificationSchema);

module.exports.saveNotification = function(newNotification,callback){
    newNotification.save(callback);
}

module.exports.getNotifications = function(callback){
    Notification.find({},{'_id':0,'title':1,'body':1,'date':1}).sort({'date':-1}).exec(callback);
}