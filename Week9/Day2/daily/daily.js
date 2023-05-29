function makeAllCaps(arr){

    return new Promise((res, rej)=>{
       
        if( arr.every(element => typeof element == 'string')){
            res(arr.map(x => x.toUpperCase()))
        }
        else{
            rej('this is not an arr of strings')
        }
        })
    }

function sortWords(arr){
    return new Promise((res, rej)=>{
        if(arr.length>4){
        res(arr.sort())
    }
        else{
            rej('length less than 4')
        }
    })
    


}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


      

      const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`

function toJs(str){
    let obj = JSON.parse(str)
    return new Promise((res, rej)=>{
        if(obj != {}){
        res(obj)
    }
    else{
        rej('error')
    }
    })
}


function toMorse(morseJS){
    let chars = Object.keys(morseJS)
    let word = prompt('Please enter the word')
    return new Promise((res, rej)=>{
        if(word.split("").every(w => chars.includes(w))){
            let div = document.querySelector('div')
            div.append(`"${word}" gives you: `)
            let morseRes = []
            for(let l of word.split("")){
                morseRes.push(morseJS[l])
            }
            res(morseRes)
    }
    else{
        rej('error. character doesnt exist in the morse')
    }
    })
    
}

function joinWords(morseTranslation){
    let div = document.querySelector('div')
    for(let l of morseTranslation){
        let newP = document.createElement('p')
        newP.append(l)
        div.appendChild(newP)
        
    }
}

toJs(morse)
    .then((obj) => toMorse(obj))
    .then((morseRes)=> joinWords(morseRes))
    .catch(error => console.log(error))