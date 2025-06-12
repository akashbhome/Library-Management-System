const conn = require("../../db.js");

exports.viewstuds=(name,email,password,role,created_at)=>{
    let promise= new Promise((resolve,reject)=>{

        conn.query("select * from users",(err,result)=>{
            if(err)
        {
            reject(err);
        }
        else{
            resolve(result);
        }
        });
        
    });
}

