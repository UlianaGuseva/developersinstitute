let btn = document.getElementById('button')
btn.addEventListener('click', showSomeone)

async function showSomeone(){
        document.getElementById('name').innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>'
        document.getElementById('height').innerText = ''
        document.getElementById('gender').innerText = ''
        document.getElementById('birth-year').innerText = ''
        document.getElementById('home-world').innerText = ''
    let random = Math.floor(Math.random() * 83) + 1
    let url = 'https://www.swapi.tech/api/people/' + random
    try{ 
      let api = await fetch(url)
      if(api.status != 200){
        throw new Error('Something went wrong')
      }
    let response = await api.json()
    
    console.log(response);
    if (response.message = 'ok'){
        console.log(response.result.properties.name);
        document.getElementById('name').innerText = response.result.properties.name
        document.getElementById('height').innerText = 'Height: ' + response.result.properties.height
        document.getElementById('gender').innerText = 'Gender: ' + response.result.properties.gender
        document.getElementById('birth-year').innerText = 'Birth Year: ' + response.result.properties.birth_year
        let homeW = await fetch(response.result.properties.homeworld)
        let planet = await homeW.json()
        console.log(planet.result.properties.name);
        document.getElementById('home-world').innerText = 'Home World: ' + planet.result.properties.name
    }
    else {
        // document.getElementById('name').innerText = 'Oh No! That person isnt available.'
        throw new Error('Something went wrong')
    }    
    }
    catch(error){
        document.getElementById('name').innerText = 'Oh No! That person isnt available.'
        // throw new Error('Something went wrong')

    }
    
}

