let express=require("express");
let bodyparser=require("body-parser");
let router=require("../src/routers/lmRouter.js");
let session=require("express-session");
let conn=require("../db.js");
const multer = require("multer");
let path=require("path");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret:"11111111f",
    resave:true,
    saveUninitialized:false
}));

app.use("/",router);
app.set('view engine','ejs');
app.use(express.static("public"));

module.exports=app;