let mysql=require("mysql2");

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

