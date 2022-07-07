
module.exports=(sequelize,DataTypes)=>{
    const Activities = sequelize.define("Activities",{
     
        name:{
            type:DataTypes.STRING,
            required:true
        },
        
        description:{
            type:DataTypes.TEXT,
            required:true
        },
      
       
       

    },
    {
        freezeTableName:true,
        timestamps:false
    })
    Activities.associate=(models)=>{
        Activities.belongsToMany(models.Routines,{
            through:"RoutineActivities"

        })
    }
    return Activities;  
}