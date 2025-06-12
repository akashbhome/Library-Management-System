let service=require("../services/lmService");

exports.homepage=(req,res)=>{
        res.render("home.ejs");
}
exports.adminLogin=(req,res)=>{
        res.render("loginpage.ejs",{msg:""});
}
exports.admindash=(req,res)=>{
        let {username,password}=req.body;

        if(username==="admin@123" &&password==="admin")
        {
                res.render("Admindashboard.ejs");
        }
        else{
                res.render("loginpage.ejs",{msg:"Invalid username and Password"});
        }
}
exports.about=(req,res)=>{
        res.render("about.ejs");
}

exports.addstud=(req,res)=>{
         res.render("addstud.ejs");
}
// exports.viewstud=(req,res)=>{
//         res.render("viewstud.ejs");
// }

exports.viewstud=async (req,res)=>{
   
    let result=
    catch(err){
        console.log(err);
        res.render("error");
    }
}