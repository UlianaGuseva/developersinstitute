// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
// + --d+ + +b-- +
// + +d*b+ +
// u

// console.log(tree);//163

// b=3 d=3 u=3
// 4 * 4 * 3 * 3 
// 3 + 4 
// 3 * 3
// 3

var a = 3;
let b = 5;
// const D = 7;

function getName(param1, param2){
    console.log(param1, param2);
}
getName('Mary', 'John')


function getFullName(a, b= 'Due'){
    console.log(a + ' ' + b);
}

getFullName('Mary')


function getAge(a, b){
    let c = 10
    // console.log((a*b)+c);
    return((a*b)+c);
}

let age = getAge(3,5)
console.log(age);

function ages(myAge){
    let mum = myAge*2
    let dad = mum*1.2
    console.log(`my mum age is ${mum} and dad is ${dad} years old`)
}

ages(29)

function ages2(myAge){
    let mum = myAge*2
    return mum
}

console.log(ages2(29))

function getage(){

}

const age2 = function(){
    return '70'

}
console.log(age2());

const x = (a,b) => a*b
console.log(x(2,3));

let pokemon = {
    firstname: 'Pika',
    lastname: "Chu",
    fullname: function(){
        return this.firstname+this.lastname
    }
}

// let pikachu = pokemon.firstname + pokemon.lastname;
// console.log(pikachu)

let pikachu = pokemon.fullname()
console.log(pikachu)

// let xx = 5;
// function foo(){
//     let xx = 1
//     console.log(this.xx);
// }

// foo()

var xx = 5;
function foo(){
    var xx = 1
    console.log(this.xx);
}

foo()

let obj ={
    xx:2
}
obj.a = foo;
// console.log(obj)

console.log(obj.a())


var name = 'John'
function getName2(){
    var name = "Mary"
    return this.name
}
console.log(getName2())