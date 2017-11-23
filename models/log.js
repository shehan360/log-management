const mongoose = require('mongoose');
const config = require('../config/database');

const LogSchema = mongoose.Schema({
    logName: {
        type: String
    }
});


const Log = module.exports = mongoose.model('Log',LogSchema);

module.exports.getLogNames = function(callback){
    Log.find({},{'_id':0,'logName':1},callback);
}

module.exports.getLocations = function(callback){
  Log.find({},{'_id':0,'location':1},callback);
}


module.exports.getLogNamesByLocation = function(location,callback){
    var query=  [{
      $match: {
               "location":location
              }
      },
      {
          $project:{
              "_id":0,
              "logName":1
          }
      }];
    Log.aggregate(query,callback);
}

module.exports.getLogNamesByDate = function(date,callback){
  var qdate=new Date(date+"T00:00:00+05:30");
  var query=  [
    {
      $project:{
          "upB":{$add:[qdate,86400000]},
          "timeValidFrom":1,
          "logName":1
      }
  },
  {
  $match: {
           "timeValidFrom":{ $gte : qdate },
          }
  },
  {
      $project:{
          "_id":0,
          "logName":1,
          "test":{$lt:["$timeValidFrom","$upB"]}
      }
  },
  {
  $match: {
           "test":true
          }
  },
  {
      $project:{
          "logName":1
      }
  }
  ];
  Log.aggregate(query,callback);
}

module.exports.getLogNamesByLocationDate = function(date,location,callback){
  var qdate=new Date(date+"T00:00:00+05:30");
  var query=  [
    {
      $project:{
          "upB":{$add:[qdate,86400000]},
          "timeValidFrom":1,
          "logName":1,
          "location":1
      }
  },
  {
  $match: {
           "timeValidFrom":{ $gte : qdate },
           "location":location
          }
  },
  {
      $project:{
          "_id":0,
          "logName":1,
          "test":{$lt:["$timeValidFrom","$upB"]}
      }
  },
  {
  $match: {
           "test":true
          }
  },
  {
      $project:{
          "logName":1
      }
  }
  ];
  Log.aggregate(query,callback);
}

module.exports.getNoSuccessTransactions = function(logname,callback){
    var query=  [
        {$unwind:"$transactions"},
        {
          $match: {
              "transactions.status":"success",
              "logName":logname
            }
        },
        {
          $group: {
            "_id": "$logName",
            "count":{"$sum":1},
            "amount":{"$sum":"$transactions.amount"}
          }
        }
      ];
    Log.aggregate(query,callback);
}

module.exports.getTransactionSummary = function(logname,callback){
    var pipeline = [
      {$unwind:"$transactions"},
      {
        $match: {
          "transactions.status":"success",
          "logName":logname
          }
      },
      {
        $group: {
      "_id": {
                "_id": "$logName",
                "key": "$transactions.type"
           },
          "count":{"$sum":1},
          "amount":{"$sum":"$transactions.amount"}
        }
      },
      {
          $project:{
              "_id":0,
              "type":"$_id.key",
              "count":1,
              "amount":1
          }
      }
    ];
    Log.aggregate(pipeline,callback);
}

module.exports.getTransactionTimesGrpah = function(logname,callback){
    var pipeline = [
        {$unwind:"$transactions"},
        {
          $match: {
              "transactions.status":"success",
              "logName":logname
            }
        },
        {
          $group: {
              "_id": {
              "key": {$hour:{$add:["$transactions.time",19800000]}}
         },
        "y":{"$sum":1}
          }
        },
        {
        $project:{
            "_id":0,
            "x":"$_id.key",
            "y":1
        }},
        { $sort : { x : 1 } }
      ];
      Log.aggregate(pipeline,callback);
}

module.exports.getNoTechnicalErrors = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {"transactions.error.errorType":"technical","logName":logname }
    },
    {$project: { logName:1,transactions:1,amt: { $size:"$errors" }}},
    {
      $group: {
        "_id": {
              "_id": "$logName",
              "key": "$amt"
         },
        "count":{"$sum":1}
      }
    },
    {$project: { _id:0,count:{ $add: [ "$count", "$_id.key" ] }}}
  ];
  Log.aggregate(pipeline,callback);
}

module.exports.getNoUserErrors = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {"transactions.error.errorType":"user","logName":logname }
    },
    {
      $group: {
        "_id": "$logName",
        "count":{"$sum":1}
      }
    }
  ];
  Log.aggregate(pipeline,callback);
}

module.exports.getUpDown = function(logname,callback){
  var pipeline=[
    {$unwind:"$events"},
    {
      $match: {"logName":logname }
    },
    {
      $project: {
        "_id": 0,
        "event":"$events.event",
        "at":"$events.time"
      }
    }
  ];
  Log.aggregate(pipeline,callback);
}


module.exports.getLogInfo = function(logname,callback){
  var pipeline=[
    {
      $match: {"logName":logname }
    },
    {
        $project:{
            "_id":0,
            "timeValidFrom": 1,
            "timeValidTo": 1,
            "dateUploaded": 1,
            "atmId":1,
            "location":1,
            "deviceType":1
        }
    }
  ];
  Log.aggregate(pipeline,callback);
}

module.exports.getTransactionTypeGraph = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {
          "transactions.status":"success",
          "logName":logname
        }
    },
    {
      $group: {
          "_id": {
          "key": {$hour:{$add:["$transactions.time",19800000]}},
          "type":"$transactions.type"
     },
    "y":{"$sum":1}
      }
    },
    {
    $project:{
        "_id":0,
        "type":"$_id.type",
        "x":"$_id.key",
        "y":1
    }},
    { $sort : { x : 1 } }
  ];

  Log.aggregate(pipeline,callback);
}


module.exports.getUserErrorPoints = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {"transactions.error.errorType":"user","logName":logname }
    },
    {
      $group: {
        "_id": "$transactions.error.desc",
        "count":{"$sum":1}
      }
    },
    {
        $project:{
            "_id":0,
            "x":"$_id",
            "y":"$count"
        }
    }
  ];

  Log.aggregate(pipeline,callback);
}


module.exports.getNoTechnicalTransactionErrors = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {"transactions.error.errorType":"technical","logName":logname }
    },
    {
      $group: {
        "_id": "$logName",
        "count":{"$sum":1}
      }
    }
  ];

  Log.aggregate(pipeline,callback);
}

module.exports.getTechnicalTransactionErrors = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {"transactions.error.errorType":"technical","logName":logname}
    },
    {
        $project:{
            "_id":0,
            "transactions.transactionId":1,
            "transactions.time":1,
            "transactions.type":1,
            "transactions.error":1
        }
    }
  ];

  Log.aggregate(pipeline,callback);
}

module.exports.getOtherTechnicalErrors = function(logname,callback){
  var pipeline=[
    {$unwind:"$errors"},
    {
      $match: {"errors.errorType":"technical","logName":logname }
    },
    {
        $project:{
            "_id":0,
            "logName":0,
            "timeValidFrom": 0,
            "timeValidTo": 0,
            "dateUploaded": 0,
            "atmId":0,
            "location":0,
            "deviceType":0,
            "transactions":0,
            "events":0
        }
    }
  ];

  Log.aggregate(pipeline,callback);
}

module.exports.getTransactionAmountsByTime = function(logname,callback){
  var pipeline=[
    {$unwind:"$transactions"},
    {
      $match: {
          "transactions.status":"success",
          "logName":logname
        }
    },
    {
      $group: {
          "_id": {
          "key": {$hour:{$add:["$transactions.time",19800000]}},
          "type":"$transactions.type"
     },
    "total":{"$sum":"$transactions.amount"}
      }
    },
    {
    $project:{
        "_id":0,
        "type":"$_id.type",
        "hour":"$_id.key",
        "total":1,
        "comparisonResult": { $strcasecmp: [ "$_id.type", "Query" ] }
      }
  },
   {
    $match: {
        $or: [ {"comparisonResult":-1}, {"comparisonResult":1}] 
      }
  },
    { $sort : { type : -1,hour:1 } }
  ];

  Log.aggregate(pipeline,callback);
}


module.exports.getNoFailedTransactions = function(logname,callback){
  var query=  [
      {$unwind:"$transactions"},
      {
        $match: {
            "transactions.status":"fail",
            "logName":logname
          }
      },
      {
        $group: {
          "_id": "$logName",
          "count":{"$sum":1}
        }
      }
    ];
  Log.aggregate(query,callback);
}







