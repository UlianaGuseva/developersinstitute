// let form = document.querySelector('form')

// form.addEventListener('submit', createDom)

// function createDom(e){
//   e.preventDefault()  
//   let fName = form.elements.fname.value
//   let lName = form.elements.lname.value
//   let user = {name: fName,
//     lastname: lName
//   }
//   let str = JSON.stringify(user)

//   document.querySelector('div').innerText = str
 
// }

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const firstName = urlParams.get('fname')
const lastName = urlParams.get('lname')

console.log(firstName,lastName)

    document.querySelector('div').innerText = firstName + ' ' + lastName
   

