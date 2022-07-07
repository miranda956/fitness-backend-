
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {jwtOptions} = require('../config/jwtOptions');
const Routine = require("../models/routines");

//function to add a user
const createUser = async ({ username , password }) => {
    return await User.create({ username ,  password });
};

// find user
const getUser = async obj => {
    return await User.findOne({
        where: obj,
    });
};

function router(app){
    app.post('/login', async function(req, res, next) {
    
        const { username, password } = req.body;
        
        if (username && password) {
            let user = await getUser({ username: username });
            if (!user) {
              return  res.status(401).json({ message: 'No such user found' });
            }
    
            bcrypt.compare( password , user.password, (err, result) =>{
                if(err){
                     res.status(403).json({message :'incorrect password'});
                }
                if(result){
                    let payload = { user   };
                    console.log(jwtOptions.secretOrKey);
                    let token = jwt.sign(payload, jwtOptions.secretOrKey);
                   return res.status(200).json({ message: 'ok', token });
                }
                else{
                  return  res.status(403).json({message :'incorrect password'});
                }
    
            })
    
        }
    });
    
    //register a new user
    app.post('/register', async  function(req, res, next) {
    
        const user = await getUser({username : req.body.username});
    
        if(user)
        return   res.status(409).json({message : 'username already exists'});
    
        bcrypt.hash(req.body.password , null , null, (err, hash) => {
    
       
            createUser({
                username: req.body.username, 
                password : hash ,
            }).then(user =>
                res.status(200).json({ user, msg: 'account created successfully' }) );
        })
    
    });
    
    
    app.get('/me/:id',async  function(req,res){
        const user = await getUser({
            id:req.params.id
        }).then((data)=>{
            res.json(data)
        })
    })
    
    app.get('/routines/me', async function(req,res){
        const myRoutines = await Routine.findAll({
            include:[{
                model:User
            },
        {
            where:{
                id:req.params.id
            }
        }]
        })
    })
}
// login

module.exports = router;