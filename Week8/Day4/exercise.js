let div = document.getElementById('content')
console.log(div.firstElementChild)
console.log(div.lastElementChild)

let div1 = document.getElementById('header')
console.log(div1.nextElementSibling)
console.log(div.previousElementSibling)
console.log(div.parentNode)
console.log(div.childNodes)

let div2 = document.querySelector('#content h2')
console.log(div2.innerText)

div2.innerText = 'Learning DOM'
div2.textContent = 'DOM Manipulation'
div2.innerHTML = "<span style='color:red'> I am red </span>"


let id = div.getAttribute('id')
console.log(id)