let div = document.querySelector('div')

div.setAttribute('id', 'socialNetworkNavigation')

let ul = document.querySelector('ul')

let li = document.createElement('li')

let logout = document.createTextNode('Logout')

li.append(logout)

ul.appendChild(li)

console.log(ul.firstElementChild.textContent)
console.log(ul.lastElementChild.textContent)
