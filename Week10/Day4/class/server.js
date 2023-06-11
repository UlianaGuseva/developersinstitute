const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const products_router = require('./routes/products.js')
const app = express()
const {db} = require('./config/db.js')
app.set('view engine', 'ejs')


dotenv.config()

app.listen(process.env.PORT||3000, ()=>{
    console.log('run');
})
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', products_router.router)
app.use('/', express.static(__dirname +'/public'))

app.get('/shop', (req, res)=> {
res.render('shop')
})

// db('products')
// .select('*')
// .then(data=>{
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// })

//  /class/search - get -name=ip search the db by name of products