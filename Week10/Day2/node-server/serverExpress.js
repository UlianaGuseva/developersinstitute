let express = require('express')
let app = express()

app.get('/', (req,res) => {
    res.send('<h1>This is an HTML tag</h1>')
    res.end()
})

app.listen(3000)