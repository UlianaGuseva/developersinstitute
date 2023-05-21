console.log(document.querySelector('h1'))
let article = document.querySelector('article')
let lastpar = article.lastElementChild
article.removeChild(lastpar)

let h2 = document.querySelector('h2')
h2.addEventListener('click', changecolor)

function changecolor(e){
    e.target.style.background = 'red'
}

let h3 = document.querySelector('h3')
h3.addEventListener('click', hide)

function hide(e){
    e.target.style.display = 'none'
}

let btn = document.querySelector('button')
btn.addEventListener('click', getbold)

function getbold(e){
    article.style.fontWeight = 'bold'
}

let h1 = document.querySelector('h1')
h1.addEventListener('mouseover', changesize)

function changesize(e){
    let num = Math.floor(Math.random() * 101)
    console.log(num)
    e.target.style.fontSize = num+"px"
}


