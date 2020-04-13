const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    
    res.send('Acessando Administração')
})

router.get('/:id',(req, res)=>{
    
    res.send('Acessando administração com o id: '+req.params.id)
})

router.post('/',(req, res)=>{
    const corpo = `\nLogin: ${req.body.login}\nSenha: ${req.body.senha}`
    res.send('Acessando administração via POST: '+corpo)
})

router.patch('/:id',(req, res)=>{
    res.send('Acessando administração via PATCH')
})

router.put('/:id',(req, res)=>{
    res.send('Acessando administração via PUT')
})

router.delete('/:id',(req, res)=>{
    res.send('Acessando administração via DELETE')
})

module.exports = router