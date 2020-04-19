const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user_hcode:Hcs@83451836*@cluster0-cbtqe.mongodb.net/subscribers?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('err', (err)=> console.log('err'))
db.once('open', ()=> console.log('Mongo = OK'))

app.listen(3000, ()=>{
    console.log("Servidor http = OK")
})