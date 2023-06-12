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
    let user = {
      firstname: inputsReg[0].value, 
      lastname: inputsReg[1].value, 
      email: inputsReg[2].value, 
      username: inputsReg[3].value,
      password: inputsReg[4].value
    }
    try {
      console.log("user", user);
      const res = await fetch('http://127.0.0.1:3030/register',
      {
        method : 'POST',
        body : JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await res.json()
      div.innerText=`OK. Hello ${result[0].firstname} ${result[0].lastname} with id = ${result[0].id}.`
    } catch (e) {
      console.log("in the catch try");
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
  
  try {
    console.log("user", user);
    const res = await fetch('http://127.0.0.1:3030/login',
  {
    method : 'POST',
    body : JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const result = await res.json()
  console.log(result);
  div.innerText=`Hello ${result[0].firstname} ${result[0].lastname}`
  } catch (e) {
    div.innerText=`wrong password`
  }
  
}
