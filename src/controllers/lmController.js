let service=require("../services/lmService");
let adminModel=require("../models/lmModel.js");
const { name } = require("ejs");
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
                res.render("addstud.ejs", { msg: "Failed" });
            }
        })
        .catch((err) => {
            console.error("Error:", err);
            res.render("addstud.ejs", { msg: "Error occurred" });
        });
};
exports.stdUpdate = (req, res) => {
    let id = parseInt(req.query.id.trim());
    let result = adminModel.updateUser(id);
    
    result.then((r) => {
        if (r.length > 0) {
            res.render("stdupdate.ejs", { std: r[0] });
        } else {
            res.render("stdupdate.ejs", { std:[] });
        }
    }).catch((err) => {
        res.render("err.ejs");
    });
};

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
exports.viewcategory=(req,res)=>{
        let result=adminModel.viewcategory();
        result.then((r)=>{
                if(r.length>0){
                        res.render("viewcategory.ejs",{cat:r});
                }
                else{
                        res.render("viewcategory.ejs",{cat:[]});
                }
        })
}

//add category

exports.addcategory=(req,res)=>{
         res.render("addcategory.ejs",{msg:""});
}
exports.catdataAdd=(req,res)=>{

        let {catname}=req.body;
        let result=adminModel.addcategory(catname);
        if(result){
                 res.render("addcategory.ejs",{msg:"failed"});
        }
        else{
                 res.render("addcategory.ejs",{msg:"catregory added Successfully"});
        }
       
       
        res.render("addcategory.ejs");
}

// delete category

exports.deletecategory=(req,res)=>{
        let id=parseInt(req.query.id.trim());
        let result=adminModel.deletecat(id);
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("viewcategory.ejs",{data:r});
                }
                else{
                        res.render("viewcategory.ejs",{data:[]});
                }
        }).catch((err)=>{
                res.render("err.ejs");
        });
}

// Update Category

exports.updatecategory=(req, res) => {
        let id=parseInt(req.query.id.trim());
        let result=adminModel.updatecat(id);
        result.then((r) => {
                if(r.length>0)
                {
                        res.render("viewcategory.ejs");
                }
                else{
                        res.render("viewcategory.ejs");
                }
        }).catch((err) => {
                res.render("err.ejs");
        });

}