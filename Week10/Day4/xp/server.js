const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const my_router = require('./routes/loginregister.js')

const {db} = require('./config/db.js')

const app = express()
dotenv.config()

app.listen(process.env.PORT||3000, ()=>{
    console.log('run');
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', express.static(__dirname +'/public'))
app.use('/', my_router.router)