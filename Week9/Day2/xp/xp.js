// Exercise 1 : Comparison

function compareToTen(num){
    return new Promise((res, rej)=>{
 if(num<10){
    res('number is less than 10')
 }
 else{
    rej('number is greater or equal to 10')
 }
    })
}

compareToTen(15)
.then(res =>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})

// Exercise 2 : Promises


const promise = new Promise((res, rej) => {
    res('success')
}, 4000)
.catch(()=> {
    console.log('Ooops something went wrong');
})

promise
.then(res => console.log(res)) 

Promise.resolve(console.log('success'))


// Exercise 3 : Resolve & Reject
Promise.resolve(3)
Promise.reject("Boo!")

