const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

function ages(arr){
  let ageSum = 0
  for(let i of arr){
    ageSum = ageSum + (i.age*7)
  }
  console.log(ageSum);
}

ages(data)

let ages2 = data.reduce((acc, val)=>{
  return acc+val.age*7
}, 0
)

console.log(ages2);

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

let new_str = userEmail3.trim()
 console.log(`|${new_str}|`);


 const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
 { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
 { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
 { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
 { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
 { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
 { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let users2 = []
users.forEach((item)=>{
  let fullName = item.firstName + item.lastName
  users2[fullName] = item.role
})
console.log(users2)


const letters = ['x', 'y', 'z', 'z'];
let output = {}
function loop(arr){
  for(let i of arr){
    if(output[i]>0){
      output[i] = output[i]+1
    }
    else{
      output[i] = 1
    }
  }
}
loop(letters)
console.log(output);


let output2 = {}
letters.reduce((acc, val)=>{
  if (val in output2) {
    return output2[val] = output2[val]+1
  }
  return output2[val] = acc
}, 1 )
console.log(output2);
