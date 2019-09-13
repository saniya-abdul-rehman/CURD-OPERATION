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


module.exports=router;

