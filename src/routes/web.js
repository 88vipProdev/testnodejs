const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('hello world ! ')


})

router.get('/abc',(req,res)=>{
    res.send('hello world ! abc ')


})

router.get('/88vipPro',(req,res)=>{
   res.render('sample.ejs')


})

module.exports = router