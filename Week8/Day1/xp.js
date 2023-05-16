const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)

arr = people
arr[2] = 'Jason'
console.log(people)

arr[arr.length] = 'Uliana';
console.log(people)

let pos = arr.indexOf('Mary');
console.log(pos)

let slice = arr.slice(1,3)
console.log(slice)

let pos1 = arr.indexOf('Foo');
console.log(pos1)
// return -1 because there is no 'Foo' in arr

let last = arr[arr.length-1]
console.log(last)

for(x of arr){
    console.log(x);
}

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
    if (arr[i]=='Devon'){
        break;
    }
}

let colors = ['blue', 'orange', 'black', 'grey']
let suffix = ['st', 'nd', 'rd', 'th']
for(let x in colors ){
    y = Number(x)+1
    console.log(`My #${y}${suffix[x]} choise is ${colors[x]}`)
}

// let res = prompt('Please enter a number');
// console.log(isNaN(res))
// while(isNaN(res) == true || Number(res) < 10 ){
//     res = prompt('Please enter a number');
// }
// console.log(res)

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(`${building.numberOfAptByFloor.firstFloor} apartments on the 1st floor, ${building.numberOfAptByFloor.thirdFloor} apartments on the 3rd floor`)
console.log(`name of the second tenant ${building.nameOfTenants[1]} and the number of rooms he has in his apartment is ${building.numberOfRoomsAndRent.dan[0]}.`)

copy = building
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    copy.numberOfRoomsAndRent.dan[1] = 1200
}

console.log(building.numberOfRoomsAndRent.dan[1])

let family = {mom: 'Ulia', dad: 'Sasha', son: 'Leo'}
for(let x in family){
    console.log(x)
}
for(let x in family){
    console.log(family[x])
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let str = ''
for(let x in details){
str = str + x + ' ' + details[x] + ' '
}
console.log(str)

let str1 = ''
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
for(let x of names){
str1 = str1 + x[0]
}
console.log(str1)


