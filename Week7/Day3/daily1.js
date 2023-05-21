let sentence = 'The movie is not that bad, I like it'

let wordNot = sentence.indexOf('not');
console.log(typeof wordNot)

let wordBad = sentence.indexOf('bad');
console.log(wordBad)

let newstr;
if(wordNot<wordBad){
    
    res = sentence.slice(wordNot,wordBad+3);
    console.log(res)
    newstr = sentence.replace(res, 'good')
}
console.log(newstr)