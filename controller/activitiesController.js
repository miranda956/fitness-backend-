const express=require("express");



const db=require("../models");
function router(app){
app.post("/api/create/activity",(req,res,next)=>{
    db.Activities.create({
        name:req.body.name,
        description:req.body.description
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err);
    })
});
app.get('/api/get/activity/:id',(req,res,next)=>{
    db.Activities.findAll({
        
        where:{
            id:req.param.id
        }
    }).then((info)=>{
        res.status(201).json(info);
    }).catch((err)=>{
        next(err);
    })
});
// client & leased items 
app.get("/api/activities",(req,res,next)=>{
    db.Activities.findAll({
        
    }).then((info)=>{
        res.status(201).json(info);
    }).catch((err)=>{
        next(err)
    })
})

// todo
// todo book feature  $ payments 

    




app.patch('/api/activities/:id',(req,res,next)=>{
    db.Activities.update({
        name:req.body.name,
        description:req.body.description
    },{
        where:{
            id:req.param.id
        }
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err);
    })

});

 
}
module.exports=router;