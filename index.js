//import sqlite3

const sqlite3 = require("sqlite3").verbose();


//create database

const db = new sqlite3.Database("./movies.db", sqlite3.OPEN_READWRITE , (err) => {
  if (err) return console.error(err.message); 

  console.log("connection successful");
}); 

//insert table values from sqldump file

//db.run(
//`CREATE TABLE users (id, first_name, last_name, favourite_movies)`
//);

//insert variables into table 

//const sql = `INSERT INTO users (id, first_name, last_name, favourite_movies)
        //    VALUES(?,?,?,?)`;

//pass in array to contain values

//db.run(sql,[5,'Bernardita','Bishop','tt0389860'], (err) => {
 //if (err) return console.error(err.message); 

 // console.log ("A new row has been created");
//});

//confirm database is correct with query 

const sql = `SELECT * FROM users;`

db.all (sql, [], (err,rows) => {
 if (err) return console.error(err.message); 

//iterate through rows to determine status 
  
 rows.forEach((row) => {
 console.log(row);
 });
});

db.close((err) => {
  if (err) return console.error(err.message);
}); 

