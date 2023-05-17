// let array = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
// let section = document.querySelector('section')
// for(let i=0; i < array.length; i++){
//     let div = document.createElement('div')
//     div.setAttribute('class', 'planet')
//     let colors = ['#a9a9a9', '#daa520', '#00bfff', '#dc143c', '#cd853f', '#ffdead', '#e0ffff', '#add8e6']
//     div.style.backgroundColor = colors[i]
//     section.appendChild(div)
// }

let mercury = {name: 'Mercury', number_moons: 0}
let venus = {name: 'Venus', number_moons: 0}
let earth = {name: 'Earth', number_moons: 1}
let mars = {name: 'Mars', number_moons: 2}
let jupiter = {name: 'Jupiter', number_moons: 80}
let saturn = {name: 'Saturn', number_moons: 63}
let uranus = {name: 'Uranus', number_moons: 5}
let neptune = {name: 'Neptune', number_moons: 14}

let array = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
let section = document.querySelector('section')
for(let i=0; i < array.length; i++){
    let div = document.createElement('div')
    div.setAttribute('class', 'planet')
    div.textContent = array[i]['name']
    let colors = ['#a9a9a9', '#daa520', '#00bfff', '#dc143c', '#cd853f', '#ffdead', '#e0ffff', '#add8e6']
    div.style.backgroundColor = colors[i]
    section.appendChild(div)
    let moon = document.createElement('div')
    moon.setAttribute('class', 'moon')
    moon.textContent = array[i]['number_moons']
    div.appendChild(moon)
}

