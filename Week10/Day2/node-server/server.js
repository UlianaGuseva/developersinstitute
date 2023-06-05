let http = require('http')
let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    
    res.write(JSON.stringify(user))
    res.end()
})

server.listen(8080)