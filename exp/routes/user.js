const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    
    res.send('Listando usuários')
})

router.get('/:id',(req, res)=>{
    
    res.send('Lista o usuário: '+req.params.id)
})



module.exports = router