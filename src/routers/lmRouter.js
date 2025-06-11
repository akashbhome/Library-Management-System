let routers=require("express");
let controller=require("../controllers/lmController.js");
let router=routers.Router();

router.get("/",controller.homepage);
router.get("/login",controller.adminLogin);
router.post("/adminLog",controller.admindash);
<<<<<<< HEAD
module.exports=router;
=======
router.get("/about",controller.about);
module.exports=router;  
>>>>>>> 878b701f910d1a8ca11cc12ea1b26c557323fe79
