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