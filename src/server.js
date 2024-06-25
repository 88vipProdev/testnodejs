const express = require('express');
const path = require('path');
const app = express()
const port = 8081

// config template engine
app.set('views',path.join(__dirname,'views')) ;
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.send('hello world ! ')


})

app.get('/abc',(req,res)=>{
    res.send('hello world ! abc ')


})

app.get('/88vipPro',(req,res)=>{
   res.render('sample.ejs')


})
app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})