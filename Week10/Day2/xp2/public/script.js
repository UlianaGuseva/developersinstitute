async function getData(){
    let url = await fetch('http://127.0.0.1:3000/api/')
    let response = await url.json()
    console.log(response);

    document.getElementById('user').innerText = JSON.stringify(response)
}



getData()

