
module.exports=(sequelize,DataTypes)=>{
    const RoutineActivities = sequelize.define("RoutineActivities",{
     
        duration:{
            type:DataTypes.INTEGER,
            required:true
        },
        
        count:{
            type:DataTypes.INTEGER,
            required:true
        },
      
       
       

    },{
        freezeTableName:true,
        timestamps:false
    })
  
    return RoutineActivities;
}