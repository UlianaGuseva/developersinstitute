const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs').promises
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname+'/public'))

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/public/login.html');

  })
app.get('/register', (req, res) => {
    res.sendFile(__dirname+'/public/register.html');
  })
   
app.post('/register', async (req, res) => {
      let user = req.body;
      console.log('user to post:', user);
      let data = await fs.readFile('register.json','utf-8');      
        let json = JSON.parse(data);
        let alreadyExist = json.some( (el)=> { 
          return el.username.toLowerCase()==user.username.toLowerCase()
        })
        if(alreadyExist==true){
          return res.status(400).json({message : `${user.username} already exist`})
        }
        json.push(user);   
        console.log("json", json);
        let str = JSON.stringify(json)
        console.log("str", str);
      await fs.writeFile("register.json", str)
      //   if (err) throw err;
      //   console.log('The "data to append" was appended to file!');
      // });
      return res.status(200).json({message : `${user.username} succesfuly created`})
      
  })
      
    
  app.post('/login', async (req, res) => {
    let user = req.body;
    console.log('user to post:', user);
    let data = await fs.readFile('register.json','utf-8');      
      let json = JSON.parse(data);
      let alreadyExist = json.some( (el)=> { 
        return el.username.toLowerCase()==user.username.toLowerCase()
      })
      if(alreadyExist==true){
        let ourUser
        for(let i of json){
          if(user.username==i.username){
            ourUser=i
          }
        }
        if(user.password==ourUser.password){
          return res.status(200).json({message : `Hello ${user.username}`})
        }
        else {
          return res.status(200).json({message : `Wrong password`})
        } 
      }
      return res.status(400).json({message : `${user.username} does not exist`})
    
})




  app.listen(3000, ()=> {
    console.log('run');
})