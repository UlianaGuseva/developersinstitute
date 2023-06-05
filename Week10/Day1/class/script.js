function welcomeUser() {
    console.log("Hi new student, you are starting to learn Node.js")
}

welcomeUser()

const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
    res.end('Hello World');
});

server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')