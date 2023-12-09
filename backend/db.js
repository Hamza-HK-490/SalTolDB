var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'saltoldb'
});

const signup = (data,callbackFuction)=>{
    const {username,email,password}= data;
    const sql = `INSERT INTO signup (username,email,password) VALUES (?,?,?)`;
connection.query(sql,[username,email,password],(err,result)=>{
    if(err) throw err;
    
  callbackFuction(null,result);
})
}

const login =((email,callbackFuction)=>{
    const sql = `SELECT * FROM signup WHERE email = ?`;
    connection.query(sql,[email],(err,result)=>{
        if(err) throw err;
        callbackFuction(null,result);
    })
})

const getemails=  (email,callbackFuction)=>{
    const sql = "SELECT email From signup WHERE email = ?";
    connection.query(sql,[email],  (err,result)=>{
       if(err) throw err;
        callbackFuction(null,result);
    })
    }

    const getdata=(callbackFuction)=>{
        const sql ="SELECT * FROM data";
        connection.query(sql,(err,result)=>{
            if(err) throw err;
            callbackFuction(null,result);

        })
    }

    const tabledata=(callbackFuction)=>{
        const sql ="SELECT * FROM papers";
        connection.query(sql,(err,result)=>{
            if(err) throw err;
            callbackFuction(null,result);

        })
    }


    const editdata=(id,callbackFuction)=>{
        const sql ="SELECT * FROM data WHERE id =?";
        connection.query(sql,[id],(err,result)=>{
            if(err) throw err;
            callbackFuction(null,result);

        })
    }


    const insertdata = ((data,callbackFuction)=>{
      
        const sql = `INSERT INTO data SET ?`; 
        connection.query(sql,data,(err,result)=>{
            if(err) throw err;
            callbackFuction(null,result);
        })
    
    })

    const updatedata = ((data,id, callbackFunction) => {
        const sql = 'UPDATE data SET ? WHERE id = ?';
        connection.query(sql, [data, id], (err, result) => {
          if (err) {
            console.error(err);
            callbackFunction(err);
          } else {
            callbackFunction(null, result);
          }
        });
      });

    const deleteEntery = ((id,callbackFuction)=>{
        const sql ="DELETE FROM data WHERE id=?";
        connection.query(sql,[id],(err,result)=>{
            if(err) throw err;
            callbackFuction(null,result);
            })
    })

    module.exports = {
        signup,
        getemails,
        login,
        getdata,
        insertdata,
        deleteEntery,
        editdata,
        updatedata,
        tabledata
       
      };