var express = require('express');
var router = express.Router();
var mysql     =require('mysql');
var connection = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"220118",
  database:"item"
})
/* GET users listing. */
router.post('/count',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  connection.query(`SELECT * FROM jgr WHERE title LIKE '%${req.body.id}%' OR time LIKE '%${req.body.id}%'`,function(err,rows){
    res.send(rows)
})
  })
module.exports = router;
