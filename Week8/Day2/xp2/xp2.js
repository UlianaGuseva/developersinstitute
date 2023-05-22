// // Exercise 1 : Find The Sum
// const addition = (a, b) => a+b
// console.log(addition(1,2)); 

// // Exercise 2 : Kg And Grams
// function get_grams(g){
//    return g*1000
// }

// console.log(get_grams(2));

// const get_grams1 = function(g){
//     return g*1000
// }

// console.log(get_grams1(1.7));

// // using function declaration i can call the function before it declarating,
// // using function expression i can call function only after expression

// const get_grams2 = (g) => g*1000

// console.log(get_grams2(3.5));

// // Exercise 3 : Fortune Teller
// (function fortune(num_of_kids, partner, location, job){
// let new_div = document.createElement('div')
//     new_div.append(`You will be a ${job} in ${location}, and married to ${partner} with ${num_of_kids} kids.`)
// document.querySelector('body').appendChild(new_div)
// })(2, 'Sasha', 'Rishon', 'developer')

// Exercise 4 : Welcome
// (function member(name){
//     let new_div1 = document.createElement('div')
//         new_div1.innerHTML = `<img src="https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> <a href=""> ${name} </a>`
//     document.querySelector('nav').appendChild(new_div1)
//     })('Uliana')

// Exercise 5 : Juice Bar
// part1
// function makeJuice(size){
//     function addIngredients(ing1, ing2, ing3){
//         let my_div = document.createElement('div')
//         my_div.append(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`)
//         document.querySelector('body').appendChild(my_div)
//     }
//     addIngredients('apple', 'cucumber', 'orange')
// }

// makeJuice('large')


// part2

function makeJuice(size){
    let ingredients = []
    function addIngredients(ing1, ing2, ing3){
        ingredients = ingredients.concat([ing1, ing2, ing3])
        
    }
    function displayJuice(ingredients){
        let sentence = `The client wants a ${size} juice, containing `
        ingredients.forEach(element => {
        sentence = sentence + element + ','           
        });
        let my_div = document.createElement('div')
        my_div.append(sentence)
        document.querySelector('body').appendChild(my_div)
    }
    addIngredients('apple', 'cucumber', 'orange')
    addIngredients('banana', 'peach', 'ananas')
    displayJuice(ingredients)
}

makeJuice('large')