const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    usertype:{
        type: String,
        required: true
    },
    requestusertype:{
        type: String,
        required: true
    },
    approved:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function (id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUsername = function (username,callback){
    const query = {username:username}
    User.findOne(query,callback);
}

module.exports.approveUser = function (username,usertype,callback){
    const query = {"username":username};
    User.update(query,{"approved":"1","usertype":usertype},callback);
}

module.exports.resetPassword = function (username,password,callback){
    const query = {"username":username};

    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password,salt,(err,hash)=>{
            if(err) throw err;
            User.update(query,{"password":hash},callback);
        });
    });
    
}

module.exports.removeUser = function (username,callback){
    const query = {"username":username};
    User.findOne(query).remove(callback);
}

module.exports.getUnApprovedUsers = function (callback){
    var query=  [{
        $match: {
                 "approved":"0"
                }
        },{
            $project:{
                "_id":0,
                "name":1,
                "email":1,
                "username":1,
                "usertype":1,
                "requestusertype":1
            }
        }];
      User.aggregate(query,callback);
}

module.exports.getApprovedUsers = function (callback){
    var query=  [{
        $match: {
                 "approved":"1",
                 "usertype":"user"
                }
        },{
            $project:{
                "_id":0,
                "name":1,
                "email":1,
                "username":1,
                "usertype":1,
                "requestusertype":1
            }
        }];
      User.aggregate(query,callback);
}


module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword= function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err, isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}