// Exercise 1 : Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ------answer------
// it wil be "bread", "carrot", "potato", "chicken", "apple", "orange"
// because '...' unpack the array

// // ------2------
// const country = "USA";
// console.log([...country]);
// // ------answer------
// it will be 'U', 'S', 'A'
// because '...' unpack the array of letters in string


// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// ------answer------


// Exercise 2 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let helloArray = users.map((val, index, arr) =>{
return 'Hello '+val.firstName
})

console.log(helloArray);

let fullStacks = users.filter(item => item.role == 'Full Stack Resident' )

console.log(fullStacks);

let bonus = users.filter((val) => {
    return val.role == 'Full Stack Resident'
}).map((val, index, arr) => {
return val.lastName
})
console.log(bonus);

// Exercise 3 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const phrase = epic.reduce((acc, val) => {
return acc+' '+val
})

console.log(phrase);

// Exercise 4 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter(student => student.isPassed == true)

console.log(passed);

let passed2 = students.filter(student => student.isPassed == true).forEach(element => {
    console.log(`Good job ${element.name}, you passed the course in ${element.course}`)
});
passed2;