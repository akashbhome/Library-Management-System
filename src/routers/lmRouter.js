let routers=require("express");
let controller=require("../controllers/lmController.js");
let router=routers.Router();

router.get("/",controller.homepage);

module.exports=router;