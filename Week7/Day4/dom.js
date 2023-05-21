let div = document.getElementById('outerdiv');
// console.log(div.getAttribute('class'));

let div2 = document.getElementsByTagName('div');

console.log(div2);
let div3 = document.getElementsByClassName('a');

console.log(div3);

let div4 = document.querySelector('#outerdiv');
let div5 = document.querySelector('.a');
let div6 = document.querySelectorAll('.a');
let div7 = document.querySelectorAll('#outerdiv.a');
console.log(div7)

console.log(div.children[0])
console.log(div.firstElementChild)
console.log(div.lastElementChild)
console.log(div.parentNode)

let divs = document.getElementsByClassName('a')
let h1 = divs[1]
h1.innerText = 'Learning DOM'
h1.textContent = 'DOM Manipulation'
h1.innerHTML = "<span style='color:red'> I am red </span>"
console.log(divs[1])

let root = document.getElementById('root')
let img = document.createElement('img');
img.setAttribute('src', 'https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg');
root.appendChild(img)