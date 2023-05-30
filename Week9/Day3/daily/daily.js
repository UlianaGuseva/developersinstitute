let form = document.querySelector('form')
form.addEventListener('submit', lookFor)

async function lookFor(e){
    e.preventDefault() 
    let search = form.elements[0].value
    let url = 'https://api.giphy.com/v1/gifs/random?tag=' + search + '&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    let response = await fetch(url)
    let data = await response.json()
    if (response.status = 200){
        console.log(data);
        let gif = data.data.images.fixed_width.url
        console.log(gif);
        let div = document.createElement('div')
        div.innerHTML= `<img src="${gif}" alt=""><button>Delete</button>`
        document.getElementById('gifs').appendChild(div)
        div.lastChild.addEventListener('click', deleteOne)
    }
    else {
        throw new Error('Something went wrong')
    }  
}

let delAll = document.getElementById('delete_all')
delAll.addEventListener('click', deleteAll)

function deleteAll(){
    document.getElementById('gifs').innerHTML = ''
}


function deleteOne(e){
this.parentElement.remove()
}


