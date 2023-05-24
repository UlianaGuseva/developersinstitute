console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  }));


console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  )); 

//   const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// console.log(newArray);

const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let flattened = array.flat(2)
console.log(flattened);
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]

let flattened2 = []
greeting.forEach(element => {
    let str =  ''
    element.forEach(item => {
        str = str + ' ' + item
    })
    flattened2.push(str)
})
console.log(flattened2);

let flattened3 = ''
greeting.forEach(element => {
    let str =  ''
    element.forEach(item => {
        str = str + ' ' + item
    })
    flattened3 = flattened3 + " " + str
})
console.log(flattened3);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let flattened4 = trapped.flat(25)
console.log(flattened4);






