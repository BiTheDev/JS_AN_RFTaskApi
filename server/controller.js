module.exports = {
    home:home,
    getTask:getTask,
    createTask:createTask,
    updateTask:updateTask,
    removeTask:removeTask
}

const {Tasks} = require("./model.js");


function home(req,res){
    console.log("root route");

    Tasks.find({}, function(err,data){
        if(err){
            console.log("Route data error", err);
            res.json({message: "Route data Error", err})
        }
        else{
            res.json({message:"Route data success", data:data})
        }
             
    })
}

function getTask(req,res){
    console.log("get task route");

    Tasks.find({_id : req.params.id}, function(err,data){
        if(err){
            console.log("Get data error", err);
            res.json({message: "Get data Error", err})
        }
        else{
            res.json({message:"Get data success", data:data})
        }
             
    })
}

function createTask(req,res){
    console.log("create task route");
     
    Tasks.create(req.body,function(err,data){
        if(err){
            console.log("Create data error", err);
            res.json({message: "Create data Error", err})
        }
        else{
            res.json({message:"Create data success", data:data})
        }
             
    })
}

function updateTask(req,res){
    console.log("update taskroute");

    Tasks.update({_id : req.params.id}, {$set : req.body}, function(err,data){
        if(err){
            console.log("update data error", err);
            res.json({message: "update data Error", err})
        }
        else{
            res.json({message:"update data success", data:data})
        }
             
    })
}

function removeTask(req,res){
    console.log("remove task route");

    Tasks.remove({_id : req.params.id}, function(err,data){
        if(err){
            console.log("remove data error", err);
            res.json({message: "remove data Error", err})
        }
        else{
            res.json({message:"remove data success", data:data})
        }
             
    })
}

