let routers=require("express");
let controller=require("../controllers/lmController.js");
let upload=require("../middleware/upload.js");
let router=routers.Router();

// admin pannel
router.get("/",controller.homepage);
router.get("/login",controller.adminLogin);
router.post("/adminLog",controller.admindash);

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
module.exports=router;
