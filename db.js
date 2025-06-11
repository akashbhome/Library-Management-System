let mysql=require("mysql2");

<<<<<<< HEAD
=======
let conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"lms"
});
conn.connect((err)=>{
    if(err)
    {
        console.log("database not connected");
    }
    else{
        console.log("Database Connected");
    }
});
module.exports=conn;
>>>>>>> 7d92cc7e1cb7d2b895f727a58f1d355bdae5cfaa
