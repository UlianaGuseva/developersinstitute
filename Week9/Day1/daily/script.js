let form = document.querySelector('form')

form.addEventListener('submit', createDom)

function createDom(e){
  e.preventDefault()  
  let fName = form.elements.fname.value
  let lName = form.elements.lname.value
  let user = {name: fName,
    lastname: lName
  }
  let str = JSON.stringify(user)

  document.querySelector('div').innerText = str
 
}