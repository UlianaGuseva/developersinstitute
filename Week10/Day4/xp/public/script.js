let inputsLog = document.querySelectorAll(".logininput");
let inputsReg = document.querySelectorAll(".reginput");
let btnlogin = document.getElementById('btnlogin')
let btnregister = document.getElementById('btnregister')
let formLogin = document.getElementById('loginform')
let formRegister = document.getElementById('registerform')
let div = document.getElementById('message')
console.log(formRegister);

function successLogin(e) {
    if(e.target.value ==="" || inputsLog[0].value==="" || inputsLog[1].value==="" ) { 
        btnlogin.disabled = true; 
       } else { 
        btnlogin.disabled = false;
       }
   }

   function successReg(e) {
    if(e.target.value ==="" || inputsReg[0].value==="" || inputsReg[1].value==="" || inputsReg[2].value==="" || inputsReg[3].value==="" || inputsReg[4].value==="" ) { 
        console.log('true');
        btnregister.disabled = true; 
       } else { 
        console.log('false');
        btnregister.disabled = false;
       }
   }

for(let i of inputsLog){
    i.addEventListener('keyup', successLogin)
}
for(let i of inputsReg){
    i.addEventListener('keyup', successReg)
}

formLogin.addEventListener('submit', loginFunc)
formRegister.addEventListener('submit', registerFunc)

function loginFunc(e){
    e.preventDefault()  
  let user = {username: inputsLog[0],
    password: inputsLog[1]
  }
  let str = JSON.stringify(user)
}

async function registerFunc(e){
    e.preventDefault()  
    console.log("test in func");
    try {
      let user = {
      firstname: inputsReg[0].value, 
      lastname: inputsReg[1].value, 
      email: inputsReg[2].value, 
      username: inputsReg[3].value,
      password: inputsReg[4].value
    }
    console.log("user", user);
    const res = await fetch('http://127.0.0.1:3030/register',
    {
      method : 'POST',
      body : JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    div.innerText=`OK. Hello ${user.firstname} ${user.lastname}.`
    }
    catch (e) {
      console.log(e);
      div.innerText=` ${user.username} already exist.`
    }
    
}



async function loginFunc(e){
  e.preventDefault()  
  console.log("test in func");
  let user = {
    username: inputsLog[0].value,
    password: inputsLog[1].value
  }
  console.log("user", user);
  const res = await fetch('http://127.0.0.1:3030/login',
  {
    method : 'POST',
    body : JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
