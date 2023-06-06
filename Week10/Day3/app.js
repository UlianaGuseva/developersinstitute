// filesystem
// const fs = require('fs')


// try{
//     const data = fs.readFileSync('info', 'utf-8')
//     console.log(data);
// }
// catch(e){
//     console.log(e.message);
// }

// console.log('the file has been read');

// fs.readFile('info', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log('the file has been read');
// const data = 'this is my file'
// fs.writeFile('hello.txt', data, 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// const products =[
//     {id:1, name:'iphone7'},
//     {id:2, name:'iphone8'},
//     {id:3, name:'iphoneX'}

// ]
// fs.writeFile('products.json', JSON.stringify(products), 'utf-8', (err) => {
//     if(err){
//         console.log(err);
//     }
// })

// fs.readFile('products.json', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         loopproduct(JSON.parse(data))
//         console.log(JSON.parse(data));
//     }
// })

// const loopproduct = (arr) => {
//     arr.forEach((item, i) => {
//         console.log(item.name);
//     });
// }

// fs.appendFile('hello.txt', 'this is append', 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.copyFile('hello.txt', 'hello1.txt', (err)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('file copied');
// })

// fs.unlink('hello1.txt', (err)=>{
// console.log(err);
// }
// )

const fs = require('fs').promises

const start = async() => {
    const data = await fs.readFile('hello.txt', 'utf-8')
    console.log(data);
}

start()

