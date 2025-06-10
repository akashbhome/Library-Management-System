let express=require("express");
let bodyparser=require("body-parser");
let routers=require("../src/routers/lmRouter.js");
let app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/",routers);
app.set('view engine','ejs');
app.use(express.static("public"));

module.exports=app;