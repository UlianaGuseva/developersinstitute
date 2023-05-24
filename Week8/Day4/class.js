// let arr = [2,4,4,1]

// function bdCandles(arr){
// let maxNum = Math.max(...arr)
// let filter = arr.filter(value =>{
//     return value === maxNum
// })
// return filter.length
// }
// let howMany = bdCandles(arr);
// console.log(howMany)

let arr2 = [2,5,3,7,2,3,6,8,6]

function minDist(arr){
    let dist = []
    for(let i = 0; i < arr.length; i++){
        let slice = arr.slice(i+1)
        if(slice.includes(arr[i])){
        let ind = arr.indexOf(arr[i], i+1) 
        dist.push(ind-i)
        } }
        let minNum = Math.min(...dist)
    console.log(minNum);
    }

    minDist(arr2)
    



