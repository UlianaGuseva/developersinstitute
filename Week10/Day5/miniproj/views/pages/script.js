let seachTitle = document.getElementById('titleform')
let seachCategory = document.getElementById('categoryform')
let titleInput = document.getElementById('title')
let categInput = document.getElementById('category')

seachTitle.addEventListener('submit', searchTitleFunc)
seachCategory.addEventListener('submit', searchCategFunc)

async function seachTitle(){
    e.preventDefault()  
   let value = {val: titleInput.value} 
   const res = await fetch('http://127.0.0.1:3001/search/title',
  {
    method : 'POST',
    body : JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json'
    },
  })

}

async function seachCategory(){
    e.preventDefault()  
   let value = categInput.value
   const res = await fetch('http://127.0.0.1:3001/search/category',
  {
    method : 'POST',
    body : JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json'
    },
  })

}