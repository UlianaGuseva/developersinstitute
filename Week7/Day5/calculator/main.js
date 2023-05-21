let str1 = '';
let result = 0

function number(num){
    str1 += num
        console.log(str1)}
  
function operator(operator){
    if(operator )
    if(isNaN(str1[str1.length-1]) == true){
        let str2 = str1.slice(0, str1.length-1)
        str1 = str2
    }
    str1 += operator
    console.log(str1)
}

function equal(){
    result = eval(str1)
str1 = ''
alert(`${result}`)
}

function reset_display(){
    while(isNaN(str1[str1.length-1]) == false){
        let str2 = str1.slice(0, str1.length-1)
        str1 = str2
        console.log(str1)
    }
}

function clear_display(){
    str1 = ''
}



