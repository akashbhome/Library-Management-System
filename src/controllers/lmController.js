let service=require("../services/lmService");      //import the servises folder
let adminModel=require("../models/lmModel.js");         //import the  model folder

exports.homepage=(req,res)=>{                           //call the home page at the server will start
        res.render("home.ejs");
}


exports.adminLogin=(req,res)=>{                                //call login page
        res.render("loginpage.ejs",{msg:""});
}
exports.logout=(req,res)=>{
        req.session.destroy(()=>{
                 res.redirect('/login');
        });
}

exports.admin=(req,res)=>{
        res.render("Admindashboard.ejs");
}

exports.admindash=(req,res)=>{                                  //after login login successfullt then go to admindaesh board
        let {username,password}=req.body;

        if(username==="admin@123" &&password==="admin")
        {
                res.render("Admindashboard.ejs");
        }
        else{
                let result=adminModel.userlogin(username,password);
                result.then((r)=>{
                        if(r.length>0){
                                req.session.userid=r[0].id;
                                res.render("userdashboard.ejs",{user:r[0]});
                        }
                })
                
        }
}


exports.about=(req,res)=>{
        res.render("about.ejs");
}



exports.addReg=(req,res)=>{                                                     //member or user regitsrtion page calling
        res.render("addstud.ejs",{msg:""});
}

//user or member add section

exports.stdAdd = (req, res) => {
        let { name, email, password, role,phone } = req.body;

        adminModel.addStd(name, email, password, role, phone)
        .then((result) => {
                if (result) {
                        res.render("addstud.ejs", { msg: "Success" });
                } else {
                res.render("addstud.ejs", { msg: "Failed" });
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    });
}

// View Book Session
exports.viewbook=(req,res)=> {
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
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    });
}

exports.deleteBook=(req,res)=>{
       let id=parseInt(req.query.id.trim());
        let result=adminModel.deleteBook(id);
        result.then((r)=>{
                if(r.length>0)
                {
                        res.render("viewbook.ejs",{data:r});
                }
                else{
                        res.render("viewbook.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    });
}

exports.updateBookpage=(req,res)=>{
        let id=parseInt(req.query.id.trim());
         let result=adminModel.updateBookpage(id);
        result.then((r)=>{
                if(r.length>0)
                {

                        res.render("updateBook.ejs",{data:r[0]});
                }
                else{
                        res.render("updateBook.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    });
       
}
exports.updateBook=(req,res)=>{
        let id=parseInt(req.query.id.trim());
        let {title,author,publisher,isbn,category,total_copies,available_copies,status}=req.body;
        let result=adminModel.updateBook(title,author,publisher,isbn,category,total_copies,available_copies,status,id);      
        result.then((r)=>{
                if(r.length>0)
                {
                       res.render("viewbook.ejs",{data:r});
                }
                else{
                        res.render("viewbook.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    });

}
exports.IssueBookPage=(req,res)=>{
        res.render("IssueBookPage.ejs");

}
exports.searchName = async (req, res) => {
  try {
    const { q } = req.query; // Use 'q' because your front-end is sending 'q' not 'name'
    const result = await adminModel.searchName(q);
    res.json(result);
  }
  catch(err){
      console.error("Error adding student:", err);
      res.status(500).send("Error adding student");
    };
}

exports.searchbook = async (req, res) => {
  try {
    const { q } = req.query; // Use 'q' because your front-end is sending 'q' not 'name'
    const result = await adminModel.searchbook(q);
    res.json(result);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.issueBook=(req,res)=>{
        let{user_id,book_id,issue_date,return_date,status}=req.body;
        console.log("User ID:", user_id);
console.log("Book ID:", book_id);
console.log("Issue Date:", issue_date);
console.log("Return Date:", return_date);
console.log("Status:", status);
        let result=adminModel.issueBook(user_id,book_id,issue_date,return_date,status);      
        result.then((r)=>{
                if(r.length>0)
                {
                      console.log(r);
                       res.render("IssueBookPage.ejs",{msg:"Issue Book Successfully"});
                }
                else{
                        res.render("IssueBookPage.ejs",{msg:""});
                }
        }) 
       .catch(err => {
      console.error("Error adding student:", err);
      res.status(400).send("Error issue book");
    });
}




exports.ReturnBookPage=(req,res)=>{
        let result=adminModel.ReturnBookPage();      
        result.then((r)=>{
                if(r.length>0)
                {
                      console.log(r);
                       res.render("returnbook.ejs",{data:r});
                }
                else{
                        res.render("returnbook.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(400).send("Error issue book");
    });
}

exports.returnBook=(req,res)=>{
        let id=parseInt(req.query.id.trim());
        let result=adminModel.returnBook(id);      
        result.then((r)=>{
                if(r.length>0)
                {
                      console.log(r);
                       res.render("returnbook.ejs",{data:r});
                }
                else{
                        res.render("returnbook.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(400).send("Error issue book");
    });
}

//All history

exports.AllHistory=(req,res)=>{
        let result=adminModel.AllHistory();      
        result.then((r)=>{
                if(r.length>0)
                {
                       res.render("History.ejs",{data:r});
                }
                else{
                        res.render("History.ejs",{data:[]});
                }
        }).catch(err => {
      console.error("Error adding student:", err);
      res.status(400).send("Error issue book");
    });
}

//------------------------------------- user Section--------------------------------------------------------------------------------------------------------
exports.userdash=(req,res)=>{
        let id=req.query.id;
        let result=adminModel.userProfile(id);      
        result.then((r)=>{
                if(r.length>0)
                {
                     res.render("userdashboard.ejs",{user:r[0]});
                }
                else{
                     res.render("userdashboard.ejs",{user:[]});
                }
        }) 
       .catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error User not Found");
    });
}


//profile
exports.userProfile=(req,res)=>{
        let id=req.query.id;
        console.log(id);
        let result=adminModel.userProfile(id);      
        result.then((r)=>{
                if(r.length>0)
                {
                     res.render("UserProfile.ejs",{user:r[0]});
                }
                else{
                     res.render("UserProfile.ejs",{user:[]});
                }
        }) 
       .catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error User not Found");
    });
}

//view books
exports.userViewBook=(req,res)=>{
          let id=req.query.id;
        let result=adminModel.userViewBook();  
        result.then((book)=>{
                if(book.length>0)
                {
                         let users=adminModel.userProfile(id);
                users.then((r)=>{

                         res.render("userViewBook.ejs",{book:book,user:r[0]});
                })
                
                }
                else{
                     res.render("userViewBook.ejs",{book:[],user:[]});
                }
        }) 
       .catch(err => {
      console.error("Error adding student:", err);
      res.status(500).send("Error books not in lab");
    });

}

//user issue book

exports.userIssueBookPage=(req,res) =>{
        // let id=parseInt(req.query.id.trim());
        let id=req.query.id;
        let result=adminModel.userIssueBookPage(id);
        result.then((iss) => {
        if(iss.length>0){
                let users=adminModel.userProfile(id);
                users.then((r)=>{

                         res.render("userIssueBook.ejs",{issue:iss,user:r[0]});
                })
               
        }
        else{
                    let users=adminModel.userProfile(id);
                 users.then((r)=>{
                         res.render("userIssueBook.ejs",{issue:[],user:r[0]});
                })
               
        }
});
} 

exports.userHistory=(req,res) =>{
        // let id=parseInt(req.query.id.trim());
        let id=req.query.id;
        let result=adminModel.userHistory(id);
        result.then((iss) => {
        if(iss.length>0){
                let users=adminModel.userProfile(id);
                users.then((r)=>{

                         res.render("userHistory.ejs",{issue:iss,user:r[0]});
                })
               
        }
        else{
                    let users=adminModel.userProfile(id);
                 users.then((r)=>{
                       res.render("userHistory.ejs",{issue:[],user:r[0]});
                })
               
                
        }
});
}
