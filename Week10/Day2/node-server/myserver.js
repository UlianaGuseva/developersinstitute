let http = require('http')

let server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>hello</p>')
    res.write('<p>here</p>')
    res.write('<p>I am</p>')
    res.end()
})

server.listen(3000)