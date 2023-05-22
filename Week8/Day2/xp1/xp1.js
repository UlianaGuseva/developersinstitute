// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// ------------answer-------------
// a=3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ------------answer-------------
// we can't change the const, so it will be error

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// // ------------answer-------------

// // #2.1 - run in the console:
// funcThree() 
// funcTwo()
// funcThree()

// ------------answer-------------
// first in funcThree a = 0
// second in funcThree a = 5
// because funcTwo() change the a


// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// ------------answer-------------
// first in funcThree a = 0
// second in funcThree will be error,
// because in funcTwo() we can't change the a, because it is const

// //#3
// function funcFour() {
//     window.a = "hello";
// }



// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }


// // #3.1 - run in the console:
// funcFour()
// funcFive()
// ------------answer-------------
// in funcFive() a will be "hello", because it daclared in window



// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()

// ------------answer-------------
// in funcSix a = 'test', because we declare it inside the function, 
// and it stay inside the function 

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// ------------answer-------------
// the same. because global const not affect on variables inside functions

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// ------------answer-------------
// inside a = 5, because it was declared inside the block
// outside a = 2, because it doesn't know about variable inside block,
// and outside it is 2


// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// ------------answer-------------
// the same. because daclarating inside the block don't affect on global variable

// Exercise 2 : Ternary Operator

const winBattle = () => true;
var experiencePoints;
winBattle() ? experiencePoints=10 : experiencePoints=1
console.log(experiencePoints);

// Exercise 3 : Is It A String ?

const isString = a =>  typeof a === 'string' ? true : false
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((item, index) => {
 console.log(`${index+1}# choice is ${item}.`);
})
colors.some((item) => {
    return (item == "Violet") 
}) == true ? console.log('Yeah') : console.log('No');

// Exercise 5 : Colors #2
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((item, index) => {
    let suff = index+1 > 3 ? ordinal[0] : ordinal[index+1];
    console.log(`${index+1}${suff} choice is ${item}.`);
})

// Exercise 6 : Bank Details
let bankAmount;
const amount_of_VAT = 0.17
const details = ["+200", "-100", "+146", "+167", "-290"]
const get_expenses = (det, vat) => {
    det.forEach((item, i, arr) => {
        arr[i] = item * (1-vat)})
    bankAmount = det.reduce(function(a, b){
        return a + b;
      });
      console.log(bankAmount);
    
}
get_expenses(details, amount_of_VAT)


