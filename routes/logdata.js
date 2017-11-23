var express = require('express');
var router = express.Router();
const Log = require('../models/log');

router.get('/lognames', function (req, res) {
    Log.getLogNames((err, log) => {
        if (err) throw err;
        else
            res.json({ log });
    });
});


router.post('/lognamesbylocation', function (req, res) {
    Log.getLogNamesByLocation(req.body.location,(err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.post('/lognamesbydate', function (req, res) {
    Log.getLogNamesByDate(req.body.date,(err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.post('/lognamesbylocationdate', function (req, res) {
    Log.getLogNamesByLocationDate(req.body.date,req.body.location,(err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.get('/locations', function (req, res) {
    Log.getLocations((err, log) => {
        if (err) throw err;
        else
            res.json({ log });
    });
});

router.post('/nosucesstransactions', function (req, res) {
    Log.getNoSuccessTransactions(req.body.logName, (err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.post('/transactionsummary', function (req, res) {
    Log.getTransactionSummary(req.body.logName, (err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.post('/transactiontimesgraph', function (req, res) {
    Log.getTransactionTimesGrpah(req.body.logName, (err, log) => {
        if (err) throw err;
        else
            res.json(log);
    });
});

router.post('/notechnicalerrors',function(req,res){
    Log.getNoTechnicalErrors(req.body.logName,(err,log)=>{
        if (err) throw err;
        else
            res.json(log);
    })
});

router.post('/nousererrors',function(req,res){
    Log.getNoUserErrors(req.body.logName,(err,log)=>{
        if (err) throw err;
        else
            res.json(log);
    })
});

router.post('/updown',function(req,res){
    Log.getUpDown(req.body.logName,(err,log)=>{
        if (err) throw err;
        else  
                        
            res.json(log);
    })
});

router.post('/loginfo',function(req,res){
    Log.getLogInfo(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/transactiontypegraph',function(req,res){
    Log.getTransactionTypeGraph(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/usererrorpoints',function(req,res){
    Log.getUserErrorPoints(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/notechnicaltransactionerrors',function(req,res){
    Log.getNoTechnicalTransactionErrors(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/technicaltransactionerrors',function(req,res){
    Log.getTechnicalTransactionErrors(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/othertechnicalerrors',function(req,res){
    Log.getOtherTechnicalErrors(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/transactionamountsbytime',function(req,res){
    Log.getTransactionAmountsByTime(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});

router.post('/nofailedtransactions',function(req,res){
    Log.getNoFailedTransactions(req.body.logName,(err,log)=>{
        if (err) throw err;
        else              
            res.json(log);
    })
});



module.exports = router;
