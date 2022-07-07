var bcrypt = require("bcrypt");
module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
     
        username:{
            type:DataTypes.STRING,
            required:true
        },
        
        password:{
            type:DataTypes.STRING,
            required:true
        }

    },
    {
        freezeTableName:true,
        timestamps:false
    },
    {
        
        instanceMethods: {
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.pwd);
            }
        },
        hooks: {
            beforeCreate: function(Owner, options, ) {
                Owner.password = bcrypt.hashSync(
                    Owner.password,
                    bcrypt.genSaltSync(10),
                    // @ts-ignore
                    null
                );
            }
        }
    })
  
    return User;
}