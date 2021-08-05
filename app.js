const express = require('express')
const app = express()
const userRouter = require('./routes/usersRouter')


app.use('/users',userRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("Server is starting...")
})