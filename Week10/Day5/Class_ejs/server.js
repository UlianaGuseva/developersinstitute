const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.listen(process.env.PORT||3030)

// app.get('/', (req, res) => {
//     res.render('index', {
//         'firstName': 'John',
//         'lastName': 'Doe'
//     })
        
// })

app.get('/', (req, res) => {
    let login = false
    let user = {
        'firstName': 'John',
        'lastName': 'Doe'
    }
    let students ={
        stu1: 'mary',
        stu2: 'kely',
        stu3: 'bob',
    }
    res.render('index', {
        login,
        user,
        students
        
    })
        
})

