let routers=require("express");
let controller=require("../controllers/lmController.js");
let router=routers.Router();

router.get("/",controller.homepage);
router.get("/login",controller.adminLogin);
router.post("/adminLog",controller.admindash);
router.get("/addReg",controller.addReg);
router.get("/about",controller.about);
router.post("/stduser",controller.stdAdd);
router.get("/update",controller.stdUpdate);
router.post("/updatecategory",controller.newUpdatedUser);
router.get("/view",controller.viewStudent);
router.get("/deleteUser",controller.deleteUser);
router.get("/addcategory",controller.addcategory);
router.get("/viewcategory",controller.viewcategory);
router.post("/catdataAdd",controller.catdataAdd)
router.get("/deletecategory",controller.deletecategory);
// router.get("/updatecategory",controller.updatecategory);
module.exports=router;  
