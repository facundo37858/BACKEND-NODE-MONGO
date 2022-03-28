require('dotenv').config()

const express=require('express')

const cors=require('cors')

const dbConnect=require('./config/mongo')

const app= express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

app.use('/api',require('./routes'))

const port= process.env.PORT || 3001

app.listen(port,()=>console.log(`htpp://localhost:${port}`))
dbConnect()