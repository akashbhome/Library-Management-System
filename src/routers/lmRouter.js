let routers=require("express");
let controller=require("../controllers/lmController.js");
let upload=require("../middleware/upload.js");
let router=routers.Router();

// admin pannel
router.get("/",controller.homepage);
router.get("/login",controller.adminLogin);
router.post("/adminLog",controller.admindash);
router.get("/admin",controller.admin);

router.get("/logout",controller.logout);

// User Pannel
router.get("/addReg",controller.addReg);
router.get("/about",controller.about);
router.post("/stduser",controller.stdAdd);
router.get("/update",controller.stdUpdate);
router.post("/updateUser",controller.newUpdatedUser);
router.get("/view",controller.viewStudent);
router.get("/deleteUser",controller.deleteUser);
//router.get("/searchStudent",controller.searchStud);


// Category
router.get("/addcategory",controller.addcategory);
router.get("/viewcategory",controller.viewcategory);
router.post("/catdataAdd",controller.catdataAdd)
router.get("/deletecategory",controller.deletecategory);
router.get("/updatecategory",controller.updatecategory);
router.post("/updatecat",controller.newUpdatedcat);

// View Book
router.get("/viewbook",controller.viewbook);
router.get("/addBookPage",controller.addBookPage);
router.post("/addBook",upload.single('image'),controller.addBook);
router.get("/deleteBook",controller.deleteBook);
router.get("/updateBookpage",controller.updateBookpage);
router.post("/updateBook",upload.single('image'),controller.updateBook);

router.get("/IssueBookPage",controller.IssueBookPage);
router.get("/admin/api/users/search",controller.searchName);
router.get("/admin/api/category/search",controller.searchbook);
router.post("/issueBook",controller.issueBook);
router.get("/ReturnBookPage",controller.ReturnBookPage);
router.get("/returnBook",controller.returnBook);
router.get("/AllHistory",controller.AllHistory);


//user section
router.get("/userdash",controller.userdash);
router.get("/userProfile",controller.userProfile);
router.get("/userViewBook",controller.userViewBook);
router.get("/userIssueBookPage",controller.userIssueBookPage);
router.get("/userHistory",controller.userHistory);
module.exports=router;
