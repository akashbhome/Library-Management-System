const conn = require("../../db.js");

// exports.addStd = (name, email, password, role) => {
//     return promise=new Promise((resolve,reject)=>{
//         console.log(name);
//         console.log(email);
//         console.log(password);
//         console.log(role);
//     conn.query(
//     "INSERT INTO users VALUES (?, ?, ?, ?,?,?)",
//     ['0',name, email, password, role,'0'],
//     (err, result) => {
//       if (err) {
//             reject(err);
//       } else {
//         resolve(true);
//         //console.log(result);
//       }
//     });
//     });
  
// };
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

