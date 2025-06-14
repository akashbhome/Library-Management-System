let express=require("express");
let bodyparser=require("body-parser");
let router=require("../src/routers/lmRouter.js");
let conn=require("../db.js");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",router);
app.set('view engine','ejs');
app.use(express.static("public"));

module.exports=app;