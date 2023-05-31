// async function lookFor(){
//     let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     let data = await response.json()
//     if (response.status = 200){
//         // console.log(data);
//         let gif = data.data.images.fixed_width.url
//         // console.log(gif);
//         let div = document.createElement('div')
//         div.innerHTML= `<img src="${gif}" alt="">`
//         document.getElementById('gifs').appendChild(div)
        
//     }
//     else {
//         throw new Error('Something went wrong')
//     }  
// }

// lookFor()

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

const urls = [
    "https://jsonplacehodler.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];
const getData = async function() {
try { 
    const [ users, posts, albums ] = await Promise.all(urls.map(async (url) => {
        let result = await fetch(url)
        let result1 = result.json()
        return result1}
    ))
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);}
catch(err){
    console.log('oooooooooooooooops');
  }
}
getData()

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
//   ];

// const getData = async function() {
// const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//   fetch(url).then(resp => resp.json())
// ));
// console.log('users', users);
// console.log('posta', posts);
// console.log('albums', albums);
// }

// getData()