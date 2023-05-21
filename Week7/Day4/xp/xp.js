function isDivisible(divisor){
    for(let i = 0; i <= 500; i++){
        if(i % divisor === 0){
            console.log(i)
        }
    }
}

isDivisible(23)

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple']

function myBill(){
    let total_price = 0
    for(let x of shoppingList){
        if(x in stock){
            if(stock[x]>0){
                total_price = total_price + prices[x]
                --stock[x] 
            }
            
        }
    }
    console.log(total_price)
    console.log(stock)
}

myBill()



function changeEnough(itemPrice, amountOfChange){
    let sum_money = 0
    let change = [0.25, 0.1, 0.05, 0.01]
    for(let i=0; i < amountOfChange.length; i++ ){
        sum_money = sum_money + amountOfChange[i] * change[i]
      
    }
  
    if(itemPrice<sum_money){
        return true
    }
    else{
        return false
    }
   
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))

function hotelCost(){
    let res;
    do {
        res = prompt('Please enter a number of nights');
    } while(isNaN(res) == true || res == '' )
    total_summ = 140 * Number(res)
    return total_summ
}



function planeRideCost(){
    let res;
    do {
        res = prompt('Please enter a destination');
    } while(isNaN(res) == false || res == '' );
    let price;
    if(res == 'London' || res == 'london'){
        price = 183
    }
    else if(res == 'Paris' || res == 'paris'){
        price = 220
    }
    else{
        price = 300
    }
    return price
}



function rentalCarCost(){
    let summ = 0
    let res;
    do {res = prompt('Please enter a number of days they would like to rent the car.');
    } while(isNaN(res) == true || res == '' );
    if(res<=10){
        summ = Number(res) * 40
    }
    else{
        summ = 0.95 * (Number(res) * 40)
    }
    return summ
}



function totalVacationCost(){
    hotel = hotelCost()
    plane = planeRideCost()
    rental = rentalCarCost()
    return `the total vacation cost ${hotel+plane+rental}. The car cost: ${rental}$, the hotel cost: ${hotel}$, the plane tickets cost: ${plane}$.`
}

console.log(totalVacationCost())