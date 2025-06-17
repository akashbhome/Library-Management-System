let service=require("../services/lmService");      //import the servises folder
let adminModel=require("../models/lmModel.js");         //import the  model folder

exports.homepage=(req,res)=>{                           //call the home page at the server will start
        res.render("home.ejs");
}


exports.adminLogin=(req,res)=>{                                //call login page
        res.render("loginpage.ejs",{msg:""});
}

exports.admindash=(req,res)=>{                                  //after login login successfullt then go to admindaesh board
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



exports.addReg=(req,res)=>{                                      //member or user regitsrtion page calling
        res.render("addstud.ejs",{msg:""});
}

//user or member add section

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
                res.render("addstud.ejs", { msg: "Error occurred" });
        });
};

// update user or memeber section

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

exports.newUpdatedUser=(req,res)=>{

        let id = parseInt(req.query.id.trim());
        let {name,email,password,role}=req.body;
        
        let result=adminModel.newUpdatedUser(name,email,password,role,id);
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

// member and user view section

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

//member delete section

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

//add category section

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
}

// view category section

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

// delete category section

exports.deletecategory=(req,res)=>{
        let id=parseInt(req.query.id.trim());
        let result=adminModel.deletecat(id);
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("viewcategory.ejs",{cat:r});
                }
                else{
                        res.render("viewcategory.ejs",{cat:[]});
                }
        }).catch((err)=>{
                res.render("err.ejs");
        });
}

// Update Category section

exports.updatecategory=(req, res) => {
        let id=parseInt(req.query.id.trim());
        let result=adminModel.updatecat(id);
        result.then((r) => {
                if(r.length>0)
                {
                        res.render("catupdate.ejs",{data:r[0]});
                }
                else{
                        res.render("catupdate.ejs",{data:[]});
                }
        }).catch((err) => {
                res.render("err.ejs");
        });

}

exports.newUpdatedcat=(req,res)=>{
        let id = parseInt(req.query.id.trim());
        let {name}=req.body;
        
        let result=adminModel.newUpdatedcat(name,id);
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("viewcategory.ejs",{cat:r});
                }
                else{
                        res.render("viewcategory.ejs",{cat:[]});
                }
        }).catch((err)=>{
                res.render("err.ejs");

        });
}


exports.addBookPage=(req,res)=>{
        let categories=adminModel.viewcategory();
        categories.then((r)=>{
                if(r.length>0){
                        res.render("addBooks.ejs",{cat:r,msg:""});
                }
                else{
                        res.render("addBooks.ejs",{cat:[],msg:""});
                }
        })
}
exports.addBook=(req,res)=>{
        let {title,author,publisher,isbn,category,total_copies,available_copies,status}=req.body;
        const image= '/uploads/' + req.file.filename;

        let result=adminModel.addBook(title,author,publisher,isbn,category,total_copies,available_copies,status,image);
        result.then((r)=>{
                res.render("addBooks.ejs",{cat:r,msg:"Book Added SuccessFully"});
        }).catch((err)=>{
                res.render("err.ejs");
        });

}

// View Book Session
exports.viewbook=(req,res)=> {
        console.log("hello");
        let result=adminModel.viewbook();
        result.then((r) => {
        if(r.length>0){
                res.render("viewbook.ejs",{data:r});
        }
        else{
                res.render("viewbook.ejs",{data:[]});
        }
});
}

/// add student search operation

// exports.searchStud = async (req, res) => {
//     try {
//         const searchValue = req.query.sd;
//         console.log("Received search value:", searchValue); // ADD THIS

//         const stud = await adminModel.searchAllStudent();
//         console.log("Search result:", stud); //  ADD THIS

//         res.json(stud);  // Send JSON for AJAX, don't render EJS here
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };