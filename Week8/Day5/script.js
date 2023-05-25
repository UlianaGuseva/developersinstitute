const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


for(let i of robots){  
    let div = document.createElement('div')
    div.innerHTML = `<div class="col"><div class="card"><img src=${i.image} class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${i.name}</h5><p class="card-text">${i.email}</p></div></div></div>`
    let base = document.querySelector('.base_js')
    base.appendChild(div)
}

let btn = document.querySelector('form')
btn.addEventListener('submit', search)

function search(e){
    e.preventDefault()  
    let searchValue = document.querySelector('input').value
    let find = robots.filter(robo => robo.name.toLowerCase().includes(searchValue.toLowerCase()))
    let base = document.querySelector('.base_js')
    base.innerHTML = ''
    for(let i of find){  
        let div = document.createElement('div')
        div.innerHTML = `<div class="col"><div class="card"><img src=${i.image} class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${i.name}</h5><p class="card-text">${i.email}</p></div></div></div>`
        base.appendChild(div)
    }
}