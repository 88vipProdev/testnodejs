const express = require('express')
const app = express()
const port = 8081

app.get('/',(req,res)=>{
    res.send('hello world ! ')


})

app.get('/abc',(req,res)=>{
    res.send('hello world ! abc ')


})

app.get('/88vipPro',(req,res)=>{
    res.send('<h1>lap trinh voi 88vippro</h1> ')


})
app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})