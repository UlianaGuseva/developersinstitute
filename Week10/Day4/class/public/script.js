const getMyProd = async() => {
    try {
        const res = await fetch('http://127.0.0.1:3030/api/class/product/')
        const data = await res.json()
        console.log(data);
        render(data)
    } catch (e){
        console.log(e);
    }
}

const render = (arr) => {
    const html = arr.map(item => {
        return `<div 
        style="display:inline-block;
        border:1px solid black;
        padding:20px;
        margin:10px;">
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        </div> `
    })
    document.getElementById('root').innerHTML = html.join('')

}

getMyProd()