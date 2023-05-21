let book1 = {title: 'Harry Potter', 
author: 'Joan Rolling', 
image: 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg',
alreadyRead: true}

let book2 = {title: 'Sherlock Holmes', 
author: 'Arthur Konan Doyle', 
image: 'https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg',
alreadyRead: false}

let allBooks = [book1, book2]
let section = document.querySelector('.listBooks')
for(let i of allBooks){
    let div = document.createElement('div')
    let text = document.createTextNode(`${i.title} written by ${i.author}`)
    div.append(text)
    section.appendChild(div)
    let img = document.createElement('img')
    img.setAttribute('src', i.image)
    img.style.width = '100px'
    section.appendChild(img)
    if(i.alreadyRead == true){
        div.style.color = 'red'
    }
}