// Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// --------answer--------
// we will get info from object person


// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    let {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 }
let newArr = Object.entries(users)
console.log(newArr);

newArr.forEach((val)=>{
    val[1] = val[1]*2
})
console.log(newArr);

// Exercise 4 : Person Class

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//   ------answer--------
// type will be 'object'

// Exercise 5 : Dog Class

class Dog {
    constructor(name) {
      this.name = name;
    }
  };


//     // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
// //   -------answer-------
// // i think it shoul be super(name) inside Labrador class

//   // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

//   // i think this will successfully extends Dog class

//    // 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

//   // here sgoud be argument 'name' in constructor method
  
//    // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
// //   i think it shuld be super(name) instead of this.name, to correctly extend class


// Exercise 6 : Challenges

console.log([2] === [2]); //false
console.log({} === {}); //false


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 

object1.number = 4;// number = 4
console.log(object2.number) // number = 4
console.log(object3.number) // number = 4
console.log(object4.number)// number = 5

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }
}

class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
      
    }
    sound(voice){
        console.log(`the ${this.name} is ${this.color} ${this.type} and it says ${voice}`);
    }
}

let farmerCow = new Mammal('Zorka', 'cow', 'white')
farmerCow.sound('muuuuuu')