const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        usertype: "non-user",
        approved: "0",
        requestusertype: req.body.requestusertype,
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ sucess: false, msg: 'Failed to register user' });
        }
        else {
            res.json({ sucess: true, msg: 'User registered' });
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Called!")
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                if (user.approved == "1") {
                    const token = jwt.sign(user, config.secret, {
                        expiresIn: 604800 //week
                    });

                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            usertype:user.usertype
                        }
                    });
                }
                else{
                    return res.json({ success: false, msg: 'User not approved!' });
                }
            } else {
                return res.json({ success: false, msg: 'Wrong Password!' });
            }
        })
    });
});

router.post('/finduser', (req, res, next) => {
    const username = req.body.username;

    User.getUserByUsername(username, (err, user) => {
        if (user) {
            return res.json({ success: true, msg: 'User already exists!' });
        }
        else {
            return res.json({ success: false, msg: 'Doesnt exist!' });
        }
    });
});


router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

router.get('/unapprovedusers', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getUnApprovedUsers((err,users)=>{
    
            return res.json(users);
       
    });
    
});

router.get('/approvedusers', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getApprovedUsers((err,users)=>{
        return res.json(users);
    });
    
});

router.post('/deleteuser', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const username = req.body.username;
    User.removeUser(username,(err,user)=>{
        if (user.result.n==1) {
            
            return res.json({ success: true, msg: 'Deleted!' });
        }
        else {
            return res.json({ success: false, msg: 'Error in deleting' });
        }
    })
    
});

router.post('/approveuser',passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const username = req.body.username;
    const usertype = req.body.usertype;

    User.approveUser(username,usertype, (err, user) => {
        if (user) {
            
            return res.json({ success: true, msg: 'Approved!' });
        }
        else {
            return res.json({ success: false, msg: 'Error in approving' });
        }
    });
});

router.post('/resetpassword',passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.resetPassword(username,password, (err, user) => {
        if (user) {
            
            return res.json({ success: true, msg: 'Password Resetted!' });
        }
        else {
            return res.json({ success: false, msg: 'Error in resetting' });
        }
    });
});

module.exports = router;