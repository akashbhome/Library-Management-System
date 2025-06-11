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
<<<<<<< HEAD

=======
>>>>>>> 878b701f910d1a8ca11cc12ea1b26c557323fe79
