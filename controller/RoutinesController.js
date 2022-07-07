const express=require("express");



const db=require("../models");
function router(app){

app.patch('/api/activities/:id',(req,res,next)=>{
    db.Routine.update({
        isPublic:req.body.isPublic,
        name:req.body.name,
        name:req.body.name,
        goal:req.body.goal
       
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

app.delete('/api/routine/:id',(req,res,next)=>{
    // passed tests 
    db.Routines.destroy({
        where:{
            id:req.param.id
        }
    }).then((result)=>{
        res.json(result)
        next(err);
    }).catch((err)=>{
        console.log(err.message);
        res.send(err)
    })
})
 
}
module.exports=router;