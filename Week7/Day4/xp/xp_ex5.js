let div = document.querySelector('div')
console.log(div)

let list1 = div.nextElementSibling
let pete = list1.lastElementChild
pete.innerText = 'Richard'

let list2 = list1.nextElementSibling
let sarah = list2.children[1]
sarah.remove()

let uls = document.querySelectorAll('ul')

for(let x of uls){
    x.firstElementChild.innerText = 'Uliana'
}


for(let x of uls){
    x.classList.add('student_list')
}


list1.classList.add('university', 'attendance')

div.style.background = 'lightblue'
div.style.padding = '10px'
let john = list1.firstElementChild
john.style.display = 'none'
pete.style.border = '1px solid black'

let body = document.querySelector('body')

body.style.fontSize = '30px'