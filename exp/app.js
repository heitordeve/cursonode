const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

app.use(express.json())

app.get('/',(req, res)=>{
    
    res.send('Hello World')
})

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)


app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`)
})