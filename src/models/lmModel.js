const conn = require("../../db.js");        //connected database

//add user on database

exports.addStd = (name, email, password, role,phone) => {
    return new Promise((resolve, reject) => {
        conn.query("INSERT INTO users (name, email, password, role,contact) VALUES (?, ?, ?, ?,?)",
            [name, email, password, role,phone], (err, result) => {
                if (err) {
                    console.error("DB Error:", err);
                    return reject(err);
                }
                resolve(true);
            });
    });
};

 //view user or member

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

// delete user and member in databese

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

//update user and member in database

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

//view category

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

// add on database

exports.addcategory=(catname)=>{
    conn.query("insert into categories values (?,?)",['0',catname],(err,result)=>{
        if(err)
        {
            return err;
        }
        else{
            return 0;
        }
    });
}
        

   // Delete Category on database

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

// Update Category on  database

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

// view book model

exports.viewbook=() =>{
    return new Promise((resolve,reject) => {
        conn.query("Select * from books",(err,result) =>{
            if(err) {
                return reject(err);
            }
            else{
                resolve (result);
            }
        });

    });
}

// Delete Books
exports.deleteBook=(id) => {
    return new Promise((resolve,reject) => {
        conn.query("delete from books where id=?",[id],(err,result) => {
            conn.query("select * from books ",(err1,result1)=>{
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
exports.updateBookpage=(id)=>{
     return new Promise((resolve,reject) => {
            conn.query("select * from books where id=? ",[id],(err,result)=>{
                if (err) {
                    return reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    
}
exports.updateBook=(title,author,publisher,isbn,category,total_copies,available_copies,status,id)=>{
    return new Promise((resolve, reject) => {
        conn.query("UPDATE books SET title = ?,author=?,publisher=?,isbn=?,category=?,total_copies=?,available_copies=?,status=? WHERE id = ?",[title,author,publisher,isbn,category,total_copies,available_copies,status,id],(err, result) => {
                conn.query("select * from books",(err1, result1) => {
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
exports.searchName = (name) => {
  return new Promise((resolve, reject) => {
    const searchPattern = `%${name}%`;
    conn.query("SELECT * FROM users WHERE name LIKE ?", [searchPattern], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.searchbook = (category) => {
  return new Promise((resolve, reject) => {
    const searchPattern = `${category}%`;
    conn.query("SELECT * FROM books WHERE category LIKE ?", [searchPattern], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.issueBook=(user_id,book_id,issue_date,return_date,status)=>{
    return new Promise((resolve, reject) => {
          
             conn.query("insert into issue_details values ('0',?,?,?,?,?)",[book_id,user_id,issue_date,return_date,status],(err,result)=>{  
                if (err) {
                return reject(err);
                }
                else{
                    resolve(result);
                }
            });
   
    })
}

    
exports.ReturnBookPage=()=>{
    return new Promise((resolve, reject) => {

            conn.query("SELECT issue_details.id,users.name as name,users.email as email,books.title AS title,issue_details.issue_date,issue_details.return_date,issue_details.status FROM issue_details JOIN users ON issue_details.issued_by = users.id JOIN books ON issue_details.book_id = books.id where issue_details.status='issued'",
                (err,result)=>{  
                if (err) {
                return reject(err);
                }
                else{
                    resolve(result);
                }
            });
    })

}
exports.returnBook=(id)=>{
    return new Promise((resolve, reject) => {
        conn.query("update issue_details set status='returned' where id=?",[id],(err,result)=>{
            conn.query("SELECT issue_details.id,users.name as name, users.email as email,books.title AS title,issue_details.issue_date,issue_details.return_date,issue_details.status FROM issue_details JOIN users ON issue_details.issued_by = users.id JOIN books ON issue_details.book_id = books.id where issue_details.status='issued'",
                (err1,result1)=>{  
                if (err) {
                return reject(err1);
                }
                else{
                    resolve(result1);
                }
            });
        });
            
    })
}


exports.AllHistory=()=>{
    return new Promise((resolve, reject) => {
            conn.query("SELECT issue_details.id,users.name as name,users.email as email,books.title AS title,issue_details.issue_date,issue_details.return_date,issue_details.status FROM issue_details JOIN users ON issue_details.issued_by = users.id JOIN books ON issue_details.book_id = books.id",
                (err,result)=>{  
                if (err) {
                return reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
}

// add student search

// exports.searchAllStudent = (searchValue) => {
//     return new Promise((res, rej) => {
//         let value = '%' + searchValue + '%';
//        conn.query("SELECT * FROM users WHERE name LIKE ? OR email LIKE ?", [value, value], (err, result) => {
//                 if (err) {
//                     rej(err);
//                 } else {
//                     res(result);
//                 }
//        });
//    });
// };


//-------------------------User Login ------------------------------------------------------------
exports.userlogin = (username, password) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          reject(err);
        }
        else {
        resolve(result);
        }
      });
  });
};

exports.userProfile = (id) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT * FROM users WHERE id=?",[id],
      (err, result) => {
        if (err) {
          reject(err);
        }
         else {
            console.log(result);
          resolve(result);
        }
      });
  });
};


exports.userViewBook = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM books",
      (err, result) => {
        if (err) {
          reject(err);
        }
         else {
          resolve(result);
        }
      });
  });
};

exports.userIssueBookPage=(id) =>{
    return new Promise((resolve,reject) => {
        conn.query("SELECT b.title,i.issue_date,i.return_date,i.status FROM issue_details i JOIN books b ON i.book_id = b.id WHERE i.issued_by = ? and i.status='issued'; ",[id],(err,result) =>{
            if(err) {
                return reject(err);
            }
            else{
                resolve (result);
            }
        });

    });
}

exports.userHistory=(id) =>{
    return new Promise((resolve,reject) => {
        conn.query("SELECT b.title,i.issue_date,i.return_date,i.status FROM issue_details i JOIN books b ON i.book_id = b.id WHERE i.issued_by = ?; ",[id],(err,result) =>{
            if(err) {
                return reject(err);
            }
            else{
                resolve (result);
            }
        });

    });
}