function anagram(word1, word2){
    let newWord1 = word1.toLowerCase().split('').sort().join('').trim();
    let newWord2 = word2.toLowerCase().split('').sort().join('').trim();
    const answer = newWord1.localeCompare(newWord2) == 0 ? true : false
    console.log(answer); 
}

// console.log();
anagram('Astronomer', 'Moon starer')
anagram('mad', 'gam')
anagram("School master", "The classroom")
anagram("The Morse Code", "Here come dots")
