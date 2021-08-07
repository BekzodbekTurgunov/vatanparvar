const express = require('express')
const app = express()
const userRouter = require('./routes/usersRouter')
const appRouter = require('./routes/applicationRouter')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use('/users',userRouter)
app.use('/application',appRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("Server is starting...")
})