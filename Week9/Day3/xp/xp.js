// Exercise 1 : Giphy API

function fetchApi(url){
        fetch(url)
        .then((response) => {
            if(response.ok == true){
                return response.json()
            }
            else {throw new Error('some error')}
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((err)=>{
            console.log(err);
        })
}

url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

fetchApi(url)


// Exercise 2 : Giphy API

fetchApi('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

// Exercise 3 : Async Function

async function starWars(){
    let response = await fetch("https://www.swapi.tech/api/starships/9/")
    let data = await response.json()
    if (response.status = 200){
         let objectStarWars = data.result
         console.log(objectStarWars);
         return objectStarWars
    }
    else {
        // .catch((err)=>console.log(err))
        throw new Error('Something went wrong')
    }
}

starWars()

// Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// it will display:
// calling
// resolved