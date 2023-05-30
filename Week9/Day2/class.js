function textNum(num){
    const compare = new Promise(function (res, rej){
        if(num <10) {
            res('number is less than 10, success!!!')
        }
        else{
            rej('number is greater or equa to 10, error!!!')
        }
    })
    return compare
}

textNum(9)
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
})

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(res => console.log(res))

// expected output: Array [3, 42, "foo"]

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });