function printFullName({first, last}){
 console.log(`Your full name is ${first} ${last}`);
}
printFullName({first: 'Elie', last:'Schoppik'}) 

function keysValues(obj){
    let keysAndValues = [Object.keys(obj), Object.values(obj)]
    return keysAndValues
}

console.log(keysValues({ key1: true, key2: false, key3: undefined }));
console.log(keysValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysValues({ a: 1, b: 2, c: 3 }));

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);

  class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();
  console.log(pet);