let express = require('express')
let app = express()

app.get('/aboutMe/:hobby', (req, res) => {
    let hobby = req.params.hobby
    if(isNaN(hobby)){
         res.status(200).send('This is my hobby: '+ hobby)
    }
    else {
        res.status(404).send('error')
    }
})
console.log(__dirname);
app.use( express.static(__dirname + '/public'))
// let img = {src: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg'}
app.get('/pic/', (req, res) => {
    // res.send(img)
    res.sendFile(__dirname+'/public/myimg.html')
})



// if method post:
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())

app.get('/form/', (req, res)=>{
    res.sendFile(__dirname + '/public/form.html')
    // res.send(req.params.email + ' sent you a message ' + req.params.message )
})
app.get('/formData', (req, res) =>{
    res.send(`${req.query.email} sent you a message ${req.query.message} `)
    // if method="post":
    // res.send(`${req.body.email} sent you a message from post ${req.body.message} `)
})

app.listen(3000)