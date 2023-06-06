const fs = require('fs')

// fs.readFile('text.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })



// const data = 'Bla bla'
// fs.writeFile('data.txt', data, 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFile('data.txt', '\n more bla bla', 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

fs.unlink('data.txt', (err)=>{
    if(err){
        return console.log(err)
    }
console.log('deleted');
}

)