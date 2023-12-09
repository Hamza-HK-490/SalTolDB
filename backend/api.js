const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

const db = require("./db");
const port = 4000;
app.use(cors({origin: 'http://localhost:5173'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


  app.post("/SignUpForm", (req, res) => {
    
    var email = req.body.email;
    var password = req.body.password;
    var username = req.body.fullname;
    
  
    db.getemails(email, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            if (data.length > 0) {
                res.status(400).json({ error: "Email Already Exists" });
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                const userdata = { username: username, email: email, password: hash };
                db.signup(userdata, (err, data) => {
                    if (err) {
                        res.status(500).json({ error: "user not signup" });
                        return;
                    } else {
                        res.status(200).json({ success: "user signup" });
                        
                    }
                });
            }
        }
    });
  });

  app.post("/login", (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    
    db.login(email, (err, data) => {
        if (err) res.status(500).json({ error: "user not login" });
        else {
            // res.status(200).json({ success: data[0].password});
            if (data && data.length > 0) {
              if (bcrypt.compareSync(password, data[0].password)) {
                res.send(data);
            } else {
                res.status(401).json({ error: "email or password  incorrect" });
            }
             
            }
            else{
              res.status(401).json({ error: "account not exit" });
              
            }
        }
    });
});


app.get("/getdata",(req,res)=>{
  db.getdata((err,data)=>{
    if(err){
      console.log("error in getdata");
    }
    else{
      res.send(data);
    }
  })
})

app.get("/tabledata",(req,res)=>{
  db.tabledata((err,data)=>{
    if(err){
      console.log("error in getdata");
    }
    else{
      res.send(data);
    }
  })
})

app.post("/editdata/:id",(req,res)=>{
  const id = req.params.id;
  console.log(id);
  db.editdata(id,(err,data)=>{
    if(err){
      console.log("error in getdata");
    }
    else{
      res.send(data);
    }
  })
})

app.post("/getemail", (req, res) => {
    
    var email = req.body.email;
   
    
  
    db.getemails(email, (err, data) => {
      if (err) {
          res.send(err);
      }
      else {
        res.send(data);
         
          }
      }
  );
  });

  

  app.post("/insertdata", (req, res) => {

    var data = req.body;
   

db.insertdata(data,(err,org)=>{
    if(err) res.status(500).json({error:"sno insert"});
    else{
        res.status(200).json({success:"sucessfully insert"});
        }
        });
        
});


app.post("/updatedata/:id", (req, res) => {

  var data = req.body;
  const id = req.params.id;

db.updatedata(data,id,(err,org)=>{
  if(err) res.status(500).json({error:"sno insert"});
  else{
      res.status(200).json({success:"sucessfully insert"});
      }
      });
      
});
    
app.delete('/deletepost/:id', (req, res) => {
  const id = req.params.id;
db.deleteEntery(id,(err,resdata)=>{
  if(err)
  res.status(500).json({error:"post not deleted"});
  else{
      res.status(200).json({ message: 'Post deleted successfully' });
  }
})
  
  
});

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });