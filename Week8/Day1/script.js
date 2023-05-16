console.log('hi from script');

/* comment */

// 1. number
// 2. string
// 3. boolean
// 4. unerfined
// 5. null
/*
1
1.2
-1

'1'
"2"

true // 1
false // 0
*/
/* variables
---------

var
let 
const */
/*
let a = 9;
let name;
console.log('name', name);

const COLOR_BLACK = '#000000'; --CANT change constant, write UPPERCASE */ 

// var a = 5;
// var b;
// b='John';


// let txt ="abcdefghijklm";
// let len = txt.length;
// console.log(len);

// let str = "Lorem ipsum 'Lorem' ";
// let pos = str.indexOf('Lorem');
// let pos = str.lastIndexOf('Lorem');
// let pos = str.search9('Lorem');
// console.log(pos);

// let str = "Apple, Banana, Kiwi";
// let res = str.slice(7,13);
// console.log(res);

// let str = "Please visit Microsoft!";
// let newStr = str.replace('Microsoft', 'MICROSOFT')

// let newStr = atr.toUpperCase();
// console.log(newStr);

// let str = "Please visit ";
// let str1 = "Microsoft!";

// console.log(str+ " " + str1 + " " + "ghfjytfj");

// let str2 = str.concat(" ", str1, " ", "fghjfjhtfhjfhgjfh");

// let str2 = `${str} ${str1}` //template string


// let str = 'Hello world';
// console.log(str.charAt(0), str.charCodeAt(0));

alert('hello');
let res = prompt('Please enter a number');
console.log(res);
console.log(typeof res);

let res1 = confirm('Are you coming to the party?');
console.log(res1);

// Array
// Object

let arr = [4, 'a', [5,6,7], 's', 8];
let arr1 = new Array();
console.log(arr, arr1);
console.log(arr[1]);
console.log(arr[2][0]);
arr[2][0] = 'b'
console.log(arr);
console.log(arr.length);

var fruits = ["Apple, Banana, Kiwi"];
console.log(fruits.toString());

console.log(fruits.join(' '));

fruits.push('Mango');
let last = fruits.pop();
fruits.shift();
fruits.unshift('Apple');
console.log(fruits);
let str = 'abcdefg';
console.log(str.split(''));
fruits[0] = 'orange';
console.log(fruits);
fruits[fruits.length] = 'Pineapple';
console.log(fruits);
fruits[fruits.length+1] = 'Pineapple';
console.log(fruits);

let girls = ['Lea', 'Liel'];
let boys = ['Ben', 'Ron'];

console.log(girls.concat(boys,[11,11]))

let slice = fruits.slice(1)
console.log(slice) // doesnt change fruits
let slice1 = fruits.slice(1,3)

let a = fruits.splice(1,2) //cut 2 elements from element with ind=1. it changes fruits

let obj = {
    a:1, 
    b:2, 
    name: 'John',
    arr: [1,2,3],
    x: {a:10},
    f: function(){
        alert('function')
    }

}
let obj1 = new Object()

console.log(obj, obj1)
console.log(obj.a, obj.arr, obj['b'])

obj.a  = 20
console.log(obj)
obj.y  = 20
console.log(obj)

console.log(obj.f)
console.log(obj.f())

delete obj.a

if(1 === '1'){
    console.log('true');
}
else if('2'=='2'){
    console.log('2')
}
else{
    console.log('else');
}

let page = 'shop'
switch (page) {
    case 'home':
        console.log('home');
        break;
    case 'shop':
        console.log('shop');
        break;
    default:
        console.log('404');
}

(1==1) ? console.log('1') : console.log(2)
// equall:
if(1==1){
    console.log(1);
}
else{
    console.log(2);
}

let x = (1==2) ? 1 : 'vcjvgj';
console.log(x)

let y = (1==2) ? 1 : (3==3) ? 3: 4;



let aa = 2;
let bb =2;
let cc = 5;
if(aa==bb && b<c){
    console.log(1);
}
else{
    console.log(2);
}


if(aa==bb || b<c){ // || or
    console.log(1);
}
else{
    console.log(2);
}


//LOOPS

for(let i = 0; i < 5; i++) {
    console.log(i);
}

let arr2 = ['a', 'b', 'c', 'd', 'e']
for(let i = 0; i < arr2/length; i++) { //i=i+2 to scip every 2nd element
    console.log(i, arr2[i]);
}


for(let x in arr2){
    console.log(x, arr2[x]);
}

let obj = {
    a:222,
    b:333
}

for(let x in obj){
    console.log(x, obj[x]);
}

for(let x of obj){
    console.log(x);
}

let xx= 2;
while(xx < arr.length){

    x++; // or xx = xx+3

}

let xxx=0
do{
console.log('do first this and  tnen check the condotions')
xxx++
}
while(xxx<2)