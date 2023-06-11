const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname+'/public'))

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/public/login.html');

  })
app.get('/register', (req, res) => {
    res.sendFile(__dirname+'/public/register.html');
  })
   
app.post('/register', (req, res) => {
      let user = req.body;
      console.log('user to post:', user);
      fs.readFile('register.json',  (err, data) => {
        var json = JSON.parse(data);
        json.push(user);    
        fs.writeFile("register.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
    })
    //   res.fs.appendFile('register.json', JSON.parse(data), 'utf-8', (err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    // });
  })



  app.listen(3000, ()=> {
    console.log('run');
})