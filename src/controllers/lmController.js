let service=require("../services/lmService");
exports.homepage=(req,res)=>{
        res.render("home.ejs");
}
exports.adminLogin=(req,res)=>{
        res.render("loginpage.ejs",{msg:""});
}
exports.admindash=(req,res)=>{
        let {email,password}=req.body;
        if(email==="admin@gmail.com" &&password==="admin")
        {
                res.render("Admindashboard.ejs");
        }
        else{
                res.render("loginpage.ejs",{msg:"Invalid username and Password"});
        }
}