let express = require('express')
let app = express()

app.use(express.static('public'))
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
app.get('/api/', (req, res) => {
    // res.send(JSON.stringify(user))
    res.json(user)
    console.log(user);
})



app.get('/person/:id', (req, res) => {
    
    console.log(req.params);
    res.send(req.params)
})

app.listen(3000, () => console.log('Server running on port 3000'))