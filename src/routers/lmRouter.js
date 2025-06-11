let routers=require("express");
let controller=require("../controllers/lmController.js");
let router=routers.Router();

router.get("/",controller.homepage);
router.get("/login",controller.adminLogin);
router.post("/adminLog",controller.admindash);
router.get("/about",controller.about);
module.exports=router;  





