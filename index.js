const express =require('express');
const methodoverride =require('method-override');
const cors =require('cors');
const bodyparser=require("body-parser");
const logger = require("morgan");
const passport = require('passport');
const db=require('./models');

const strategy = require("./config/jwtoptions");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.text());
app.use(bodyparser.json());
app.use(cors());
app.use(logger());
passport.use("strategy" , strategy);
app.use(methodoverride("_method"));


require('./controller/RoutinesController')(app);
require('./controller/activitiesController')(app);
require('./controller/routineActivitiesController')(app);
require('./controller/userController')(app);
db.sequelize.sync({force:true}).then(()=>{
   const port = process.env.PORT || 5000 ;
   app.listen(port,()=> 
    console.log(`Server running on port ${port} 🔥`)); 
}).catch((err)=>{
    console.log(err)
});