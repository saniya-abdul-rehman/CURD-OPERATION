const express = require('express');
const router = express.Router();
const conn = require('../Config/Database');

//Get all heroes
router.get('/heroes',(req,res)=>{
    conn.query("SELECT * FROM heroes",(err,result)=>
    {
        if(err) throw err;
        res.json(result)
        console.log(result);
    });
})


//Get all heroes by id
router.get('/heroes/:id',(req,res)=>{
  const id = req.params.id
  conn.query(`SELECT * FROM heroes where id= '${id}'`,(err,result)=>
  {
      if(err) throw err;
      res.json(result[0])
      console.log(result[0]);
  });
})
//POST 

router.post('/heroes',(req,res)=>{
    //const name =req.body.name;
    const {name}=req.body
    conn.query(`Insert into heroes(name) Values('${name}')`,(err,result)=>
    {
        if(err) throw err;
        res.json(result)
        console.log(result);
    });
})

//Hero delete

router.delete('/heroes/:id', (req, res) => {
    let id = req.params.id
    conn.query(`DELETE FROM heroes Where id=${id}`, function (err, hero, fields) {
      if (err)
        res.json({ msg: err.message });;
      res.json(hero)
  
    });
  })

//Hero update

router.put('/heroes/:id', (req, res) => {
    let id = req.params.id
    const name =req.body.name;
    conn.query(`UPDATE heroes SET name = '${name}' WHERE id = '${id}'`, function (err, hero) {
      if (err)
        res.json({ msg: err.message });;
      res.json(hero)
  
    });
  })

module.exports=router;

//Get all powers
router.get('/powers',(req,res)=>{
  conn.query("SELECT * FROM powers",(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})

//Get all powers by id
router.get('/powers/:sp_id',(req,res)=>{
  const sp_id = req.params.sp_id
  conn.query(`SELECT * FROM powers where sp_id= '${sp_id}'`,(err,result)=>
  {
      if(err) throw err;
      res.json(result[0])
      console.log(result[0]);
  });
})
//POST 

router.post('/powers',(req,res)=>{
    //const name =req.body.name;
    const {sp_name}=req.body
    conn.query(`Insert into powers(sp_name) Values('${sp_name}')`,(err,result)=>
    {
        if(err) throw err;
        res.json(result)
        console.log(result);
    });
})

//Hero delete

router.delete('/powers/:sp_id', (req, res) => {
    let sp_id = req.params.sp_id
    conn.query(`DELETE FROM powers Where sp_id=${sp_id}`, function (err, power, fields) {
      if (err)
        res.json({ msg: err.message });;
      res.json(power)
  
    });
  })

//Hero update

router.put('/powers/:sp_id', (req, res) => {
    let sp_id = req.params.sp_id
    const sp_name =req.body.sp_name;
    conn.query(`UPDATE powers SET sp_name = '${sp_name}' WHERE sp_id = '${sp_id}'`, function (err, power) {
      if (err)
        res.json({ msg: err.message });;
      res.json(power)
  
    });
  })
