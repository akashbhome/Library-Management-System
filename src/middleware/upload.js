let multer=require("multer");
let path=require("path");

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
let upload=multer({storage:storage});

module.exports=upload;