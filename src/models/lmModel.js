const conn = require("../../db.js");

exports.addStd = (name, email, password, role) => {
    return new Promise((resolve, reject) => {
        conn.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
            [name, email, password, role], (err, result) => {
                if (err) {
                    console.error("DB Error:", err);
                    return reject(err);
                }
                resolve(true);
            });
    });
};
exports.viewStudent = () => {
    return new Promise((resolve, reject) => {
        conn.query("select * from users",(err, result) => {
                if (err) {     
                return reject(err);
                }
                resolve(result);
            });
    });
};
 
exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("delete from users where id=?",[id],(err, result) => {
                conn.query("select * from users",(err1, result1) => {
                if (err) {     
                return reject(err1);
                }
                resolve(result1);
            });
            });
    });
};

exports.updateUser = (id) => {
    return new Promise((resolve, reject) => {
                conn.query("select * from users where id=?",[id],(err, result) => {
                if (err) {     
                return reject(err);
                }
                resolve(result);
            });
            });
}
exports.viewcategory=()=>{
     return new Promise((resolve, reject) => {
                conn.query("select * from categories",(err, result) => {
                if (err) {     
                return reject(err);
                }
                resolve(result);
            });
            });
}
exports.addcategory=(catname)=>{
    conn.query("insert into categories values (?,?)",['0',catname],(err,result)=>{
        if(err)
        {
            return 1;
        }
        else{
            return 0;
        }
    });
}
