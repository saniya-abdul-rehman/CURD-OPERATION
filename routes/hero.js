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
router.post('/heropowers/:id/:sp_id',(req,res)=>{
  const id =req.params.id;
  const sp_id =req.params.sp_id;
  
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


                              /*COSTUMES*/

//Get all costumes
router.get('/costumes',(req,res)=>{
  conn.query("SELECT * FROM costumes",(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})


//Get all costumes by id
router.get('/costumes/:cs_id',(req,res)=>{
const cs_id = req.params.cs_id
conn.query(`SELECT * FROM costumes where cs_id= '${cs_id}'`,(err,result)=>
{
    if(err) throw err;
    res.json(result[0])
    console.log(result[0]);
});
})
//POST-Insert a costume

router.post('/costumes',(req,res)=>{
  //const name =req.body.name;
  const {cs_name}=req.body
  conn.query(`Insert into costumes(cs_name) Values('${cs_name}')`,(err,result)=>
  {
      if(err) throw err;
      res.json(result)
      console.log(result);
  });
})

//delete a costume

router.delete('/costumes/:cs_id', (req, res) => {
  let cs_id = req.params.cs_id
  conn.query(`DELETE FROM costumes Where cs_id=${cs_id}`, function (err, costume, fields) {
    if (err)
      res.json({ msg: err.message });;
    res.json(costume)

  });
})

//update a Hero 

router.put('/costumes/:cs_id', (req, res) => {
  let cs_id = req.params.cs_id
  const cs_name =req.body.cs_name;
  conn.query(`UPDATE costumes SET cs_name = '${cs_name}' WHERE cs_id = '${cs_id}'`, function (err, costume) {
    if (err)
      res.json({ msg: err.message });;
    res.json(costume)

  });
})

       //HERO_COSTUMES

      //get hero-costume by id
      router.get("/herocostume/:id", function(req,res){
      var id = req.params.id;
      conn.query(`SELECT heroes.cs_id , costumes.cs_name  FROM costumes , heroes 
      WHERE heroes.cs_id = costumes.cs_id AND heroes.id = '${id}'`, function(err, result){
        
          if(err) throw err;
          res.json(result)
          console.log(result);
      });  
    });
    
    
    //Delete COSTUME FROM HERO
    
    //we are using PUT as HTTP VERB because we want to edit/update only ONE SINGLE column, NOT the whole row.
  router.put('/herocostume/:id' , function(req,res){
        let hero_id = req.params.id
       
        conn.query(`UPDATE heroes SET cs_id = NULL WHERE id = '${hero_id}'` , function(err , result ) {
            if(err) throw err;
            return res.send(result);
        });
    });
    
    // adding new costume to hero
    router.put("/herocostume/:id/:cs_id", function (req, res) {
        let id = req.params.id;
        let cs_id = req.params.cs_id;
        conn.query(`UPDATE heroes SET cs_id = '${cs_id}' WHERE id = '${id}'` , function (err, result) {
            if (err) throw err;
        return res.send(result);
    });
    });
     
