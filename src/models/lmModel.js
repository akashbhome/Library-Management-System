const conn = require("../../db.js");

exports.addStd = (name, email, password, role) => {
    return new Promise((resolve, reject) => {
    const today = new Date().toISOString().split('T')[0];
        conn.query("INSERT INTO users (name, email, password, role,created_at) VALUES (?, ?, ?, ?,?)",
            [name, email, password, role, today], (err, result) => {
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
exports.newUpdatedUser=(name,email,password,role,id)=>{
    return new Promise((resolve, reject) => {
        
        conn.query("UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?",[name,email,password,role,id],(err, result) => {
                conn.query("select * from users",(err1, result1) => {
                if (err) {
                return reject(err1);
                }
                resolve(result1);
            });
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
        

   // Delete Category

exports.deletecat=(id) => {
    return new Promise((resolve,reject) => {
        conn.query("delete from categories where id=?",[id],(err,result) => {
            conn.query("select * from categories ",(err1,result1)=>{
                if (err) {
                    return reject(err1);
                }
                else{
                    resolve(result1);
                }
            });
        });
    });
}

// Update Category

exports.updatecat= (id) =>{
    return new Promise((resolve, reject) => {
        conn.query("select * from categories where id=?",[id],(err,result) => {
            if (err)
            {
                return reject(err);
            }
            else{
                resolve(result);
            }
        });
    });

}

exports.newUpdatedcat=(name,id)=>{
    return new Promise((resolve, reject) => {
        conn.query("UPDATE categories SET name = ? WHERE id = ?",[name,id],(err, result) => {
                conn.query("select * from categories",(err1, result1) => {
                if (err) {
                return reject(err1);
                }
                else{
                    resolve(result1);
                }
            });
            });
    });
}

//  Add book on Database

exports.addBook=(title,author,publisher,isbn,category,total_copies,available_copies,status,image)=>{

 return new Promise((resolve, reject) => {
    const today = new Date().toISOString().split('T')[0];
    console.log(title);
        console.log(author);

        console.log(publisher);
            console.log(isbn);
                console.log(category);
                    console.log(total_copies);
                    console.log(available_copies);
                        console.log(status);
                            console.log(image); 
        conn.query("INSERT INTO books(title,author,publisher,isbn,category,total_copies,available_copies,status,image,created_at) VALUES (?, ?, ?, ?,?,?,?,?,?,?)",
                                     [title,author,publisher,isbn,category,total_copies,available_copies,status,image,today], (err, result) => {
        conn.query("select * from categories",(err1, result1) => {
                if (err) {
                return reject(err);
                }
                else{
                    resolve(result1);
                }
            });
    });

});
}