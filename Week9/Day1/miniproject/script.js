const quots = [ 
{
    id : 0,
    author : 'Me',
    quote : 'Relax'
},
{
  id : 1,
  author : 'Mom',
  quote : 'Terpi kazak'
},
{
  id : 2,
  author : 'Dad',
  quote : 'Zabey'
},
{
  id : 3,
  author : 'Sasha',
  quote : 'Grustish'
},
{
  id : 4,
  author : 'Mitya',
  quote : 'nikogda bolshe'
}
]
let btn = document.querySelector('button')
btn.addEventListener('click', chooseQuote)
let currentQuoteId = 0;
let sect = document.querySelector('section')

function chooseQuote(){
  let newId;
  do{newId = Math.floor(Math.random() * quots.length)}while(newId==currentQuoteId)
  let one = quots.find(elem => elem.id == newId)
  sect.innerHTML = `<div>${one.quote}</div><br><div>${one.author}</div>`
  currentQuoteId = newId
}

let form = document.querySelector('form')
form.addEventListener('submit', addNewQuote)

function addNewQuote(e){
  e.preventDefault()
  obj = { id : quots.length,
    author : form.elements.author.value,
    quote : form.elements.quote.value
  }
  quots.push(obj)
  console.log(quots);
}


