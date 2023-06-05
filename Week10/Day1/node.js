let http = require('http')
const server = http.createServer( () => {
    console.log('I am listening....');
 });
 server.listen(3000);
 