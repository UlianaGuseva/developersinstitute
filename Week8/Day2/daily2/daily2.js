let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (arr) => arr.fruits.forEach(element => {
console.log(element);  
});
displayGroceries(groceries)

const cloneGroceries = () => {
  let user = client
  client = 'Betty'
  console.log(user)
  let shopping = groceries
  shopping.totalPrice = "35$"
  console.log(groceries);
  shopping.other.payed = false
  console.log(groceries);
}
cloneGroceries()

