function hello(){
    alert('Hello World')
}

setTimeout(hello, 2000)

function add_paragraph(){
    let new_par = document.createElement('p')
    new_par.append('Hello World')
    let div = document.getElementById('container')
    div.appendChild(new_par)
}

setTimeout(add_paragraph, 2000)

let i = 0
let timer = setInterval(add_few_paragraphs, 2000)
function add_few_paragraphs(){
    console.log('ok')
    let new_par = document.createElement('p')
    new_par.append('Hello World')
    let div = document.getElementById('container')
    div.appendChild(new_par)
    if (++i === 5) {
        window.clearInterval(timer)
    }
}

let button_stop = document.querySelector('button')
button_stop.addEventListener('click', myStopFunction)
function myStopFunction() {
    clearInterval(timer);
  }
