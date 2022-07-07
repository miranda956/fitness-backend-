const express=require("express");



const db=require("../models");
function router(app){
app.post("/api/create/RoutineController",(req,res,next)=>{
    db.RoutineActivities.create({
       duration:req.body.duration,
       count:req.body.count
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err);
    })
});

// client & leased items 
app.get("/api/Routineactivities",(req,res,next)=>{
    db.RoutineActivities.findAll({
        
    }).then((info)=>{
        res.status(201).json(info);
    }).catch((err)=>{
        next(err)
    })
})

// todo
// todo book feature  $ payments 

    




app.patch('/api/Routineactivities/:id',(req,res,next)=>{
    db.RoutineActivities.update({
      duration:req.body.duration,
      count:req.body.count
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
app.delete('/api/routineactivity/:id',(req,res,next)=>{
  // passed tests 
  db.RoutineActivities.destroy({
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