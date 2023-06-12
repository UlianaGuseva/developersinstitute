
let inputsReg = document.querySelectorAll(".reginput");

let btnregister = document.getElementById('btnregister')

let formRegister = document.getElementById('registerform')

let div = document.getElementById('message')


   function successReg(e) {
    if(e.target.value ==="" || inputsReg[0].value==="" || inputsReg[1].value==="" || inputsReg[2].value==="" || inputsReg[3].value==="" || inputsReg[4].value==="" ) { 
        console.log('true');
        btnregister.disabled = true; 
       } else { 
        console.log('false');
        btnregister.disabled = false;
       }
   }

for(let i of inputsReg){
    i.addEventListener('keyup', successReg)
}

formRegister.addEventListener('submit', registerFunc)


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
      const res = await fetch('http://127.0.0.1:3000/register',
      {
        method : 'POST',
        body : JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await res.json()
      div.innerText=`${result.message}`
    } catch (e) {
      console.log(e);
     
    }
    
}



