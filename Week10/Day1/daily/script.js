let getnumber = require('./main.js')
console.log(getnumber.numberlarge);

const b = 5
console.log(getnumber.numberlarge+b);

let http = require('http')

// let server = http.createServer((req, res) => {
//     console.log("I'm listening -- in the create server");
//     res.setHeader('Content-Type', 'text/html')
//     res.write(`<p>My Module is ${getnumber.numberlarge+b}</p>`)
//     res.end(`<h1>Hi there at the frontend</h1>`)
// })

// server.listen(3000)

let server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>The date and time are currently: ${getnumber.currentDate()}</h1>`)
})

server.listen(3000)