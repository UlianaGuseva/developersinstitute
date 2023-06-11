let inputsLog = document.querySelectorAll(".logininput");

let btnlogin = document.getElementById('btnlogin')

let formLogin = document.getElementById('loginform')




function successLogin(e) {
    if(e.target.value ==="" || inputsLog[0].value==="" || inputsLog[1].value==="" ) { 
        btnlogin.disabled = true; 
       } else { 
        btnlogin.disabled = false;
       }
   }


for(let i of inputsLog){
    i.addEventListener('keyup', successLogin)
}


formLogin.addEventListener('submit', loginFunc)

function loginFunc(e){
    e.preventDefault()  
  let user = {username: inputsLog[0],
    password: inputsLog[1]
  }
  let str = JSON.stringify(user)
}




async function loginFunc(e){
  e.preventDefault()  
  console.log("test in func");
  let user = {
    username: inputsLog[0].value,
    password: inputsLog[1].value
  }
  console.log("user", user);
  const res = await fetch('http://127.0.0.1:3000/login',
  {
    method : 'POST',
    body : JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
