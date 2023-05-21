function sing_a_song(){
    let number;
    do{number = parseInt(prompt('Enter number to begin counting down bottles.'))
}while(isNaN(number) || number == '');
    let subtracted = 1
    while(number > 0){
        console.log(`${number} bottles of beer on the wall`)
        console.log(`${number} bottles of beer`)
        if(subtracted == 1){
            console.log(`Take ${subtracted} down, pass it around`)
        }
        else{
            console.log(`Take ${subtracted} down, pass them around`)
        }
        if(number-subtracted <= 0){
            console.log(`0 bottle of beer on the wall`)
        }
        else{
            console.log(`${number-subtracted} bottles of beer on the wall`)
        }        
        number = number - subtracted
        subtracted = subtracted + 1
    }
    
}

sing_a_song()