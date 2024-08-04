require('dotenv').config()

const express = require('express')
// import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send("@debug.rohit")
})

app.get('/login',(req,res) =>{
    res.send("<h1>Login Page</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})