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

