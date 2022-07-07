
module.exports=(sequelize,DataTypes)=>{
    const Routines = sequelize.define("Routines",{
     
      isPublic:{
        type:DataTypes.BOOLEAN,
        required:true
      },
      name:{
        type:DataTypes.STRING,
        required:true
      },
      goal:{
        type:DataTypes.TEXT,
        required:true
      }
      
    },
    {
        freezeTableName:true,
        timestamps:false
    })
    Routines.associate=(models)=>{
        Routines.belongsTo(models.User,{
            as: 'Creator',
            foreignKey:{
               
                allowNull:false
            }
        }),
        Routines.belongsToMany(models.Activities,{
            through:"RoutineActivities"

        })

    }
  
    return Routines;
}