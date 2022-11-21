const express= require('express');
const app =express();
const mysql =require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Data1",
    database: "librarySystem",
});

app.post('/createBook', (req, res) => {
    const userID = req.body.userID;
    const name = req.body.name;
    const author = req.body.author;
    const ISBN = req.body.ISBN;

    db.query(
        "INSERT INTO books (userID, name, author, ISBN) VALUES(?,?,?,?)",
        [userID, name, author, ISBN], 
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );
});

app.post('/createUser', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (password, email) VALUES(?,?)",
        [password, email], 
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send("User created");
            }
        }
    
    );
});

app.get('/findUser', (req, res) => {
    const email = req.query.email;
    db.query("SELECT * FROM users WHERE email = ?", email,(err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/getBooks', (req, res) => {
    const userID = req.query.userID;
    db.query("SELECT * FROM books WHERE userID = ?", userID,(err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/getBooksTitle', (req, res) => {
    const userID = req.query.userID;
    const title= req.query.title;
    db.query("SELECT * FROM books WHERE userID = ? AND name=?", [userID, title],(err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/getBooksAuthor', (req, res) => {
    const userID = req.query.userID;
    const author = req.query.author;
    db.query("SELECT * FROM books WHERE userID = ? AND author=?", [userID, author],(err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:bookNo',(req,res)=>{
    const bookID = req.params.bookNo;
    db.query("DELETE FROM books WHERE bookNo=?", bookID, (err,result)=>{
    if(err) {
        console.log(err);
        }
    else{
        res.send(result);
        } 
    }) 
});

app.listen(3001, ()=>{
    console.log("your server is functioning");
});