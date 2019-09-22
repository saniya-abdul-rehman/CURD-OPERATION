const express = require('express');
const router = express.Router();
const conn = require('../Config/Database');

                               /*HEROES*/

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
//POST-Insert a hero

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

//delete a hero

router.delete('/heroes/:id', (req, res) => {
    let id = req.params.id
    conn.query(`DELETE FROM heroes Where id=${id}`, function (err, hero, fields) {
      if (err)
        res.json({ msg: err.message });;
      res.json(hero)
  
    });
  })

//update a Hero 

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

                                  /*POWERS*/
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

//POST -Insert a power

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

//delete a power 

router.delete('/powers/:sp_id', (req, res) => {
    let sp_id = req.params.sp_id
    conn.query(`DELETE FROM powers Where sp_id=${sp_id}`, function (err, power, fields) {
      if (err)
        res.json({ msg: err.message });;
      res.json(power)
  
    });
  })

//update a power 

router.put('/powers/:sp_id', (req, res) => {
    let sp_id = req.params.sp_id
    const sp_name =req.body.sp_name;
    conn.query(`UPDATE powers SET sp_name = '${sp_name}' WHERE sp_id = '${sp_id}'`, function (err, power) {
      if (err)
        res.json({ msg: err.message });;
      res.json(power)
  
    });
  })


                                           /*HERO-POWERS*/

//Get all heropowers
router.get('/heropowers',(req,res)=>{
  conn.query("SELECT * FROM heropowers",(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})


//insert  power id and hero id
router.post('/heropowers',(req,res)=>{
  const id =req.body.id;
  const sp_id =req.body.sp_id;
  
  conn.query(`Insert into heropowers(id,sp_id) Values('${id}','${sp_id}')`,(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})


//update heroes and powers ids
router.put('/heropowers/:hsp_id', (req, res) => {
  let hsp_id = req.params.hsp_id
  const id =req.body.id;
  const sp_id =req.body.sp_id;
  conn.query(`UPDATE heropowers SET  id = '${id}' , sp_id = '${sp_id}' WHERE hsp_id = '${hsp_id}'`, function (err, result) {
    if (err)
      res.json({ msg: err.message });;
    res.json(result)

  });
})

//delete heropowers

router.delete('/heropowers/:hsp_id', (req, res) => {
  let hsp_id = req.params.hsp_id
  conn.query(`DELETE FROM heropowers Where hsp_id=${hsp_id}`, function (err, result, fields) {
    if (err)
      res.json({ msg: err.message });;
    res.json(result)

  });
})





//Get all heropowers by id
router.get('/heropowers/:id',(req,res)=>{
  const id = req.params.id
  conn.query(`SELECT * from heroes LEFT JOIN heropowers ON heroes.id=heropowers.id LEFT JOIN powers ON powers.sp_id = heropowers.sp_id WHERE heroes.id ='${id}' `,(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})


