let service=require("../services/lmService");
let adminModel=require("../models/lmModel.js");
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

exports.addReg=(req,res)=>{
        res.render("addstud.ejs",{msg:""});
}
// 
exports.stdAdd = (req, res) => {
    let { name, email, password, role } = req.body;

    adminModel.addStd(name, email, password, role)
        .then((result) => {
            if (result) {
                res.render("addstud.ejs", { msg: "Success" });
            } else {
                res.render("addstud.ejs", { msg: "Fail" });
            }
        })
        .catch((err) => {
            console.error("Error:", err);
            res.render("addstud.ejs", { msg: "Error occurred" });
        });
};
exports.stdUpdate=(req,res)=>{
res.render("stdupdate.ejs");
}

exports.viewStudent=(req,res)=>{
        let result=adminModel.viewStudent();
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("view.ejs",{data:r});
                }
                 else{
                          res.render("view.ejs",{data:[]});
                 }
        }).catch((err)=>{
                res.render("err.ejs"); 
        });
    
}
exports.deleteUser=(req,res)=>{
       let id=parseInt(req.query.id.trim());
        console.log(id);
        let result=adminModel.deleteUser(id);
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("view.ejs",{data:r});
                }
                 else{
                          res.render("view.ejs",{data:[]});     
                 }
        }).catch((err)=>{
                res.render("err.ejs"); 
        });
}