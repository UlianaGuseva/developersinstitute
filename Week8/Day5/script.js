function playTheGame(){
    if(confirm('would you like to play the game?')=== true){
        let number = parseInt(prompt('enter a number between 0 and 10'))
        if(isNaN(number) == true || number == '' ){
            alert('Sorry Not a number, Goodbye')
        }
        else if(Number(number)>10 || Number(number)<0){
            alert('Sorry it’s not a good number, Goodbye')
        }
        else{
            let computerNumber = Math.floor(Math.random() * 11);
            console.log(computerNumber)
            compareNumbers(number,computerNumber)
        }
    }
    else{
        // window.location.assign("./");
        alert('No problem, Goodbye')
    }
}

function compareNumbers(number,computerNumber){
    let try_num = 3
    while (try_num !=0 && number != computerNumber){
        try_num= try_num-1;
        if(number<computerNumber){
        alert('Your number is smaller then the computer’s, guess again')}
        if(number>computerNumber){
        alert('Your number is bigger then the computer’s, guess again')}
        number = parseInt(prompt('Try again. Enter a number between 0 and 10'))
            if(isNaN(number) == true || number == '' ){
                alert('Sorry Not a number')}
            else if(Number(number)>10 || Number(number)<0){
                    alert('Sorry it’s not a good number')}
        } 
    if(number==computerNumber){
        alert('WINNER')}
    if(try_num == 0 && number != computerNumber){
        alert('Out of chances')}
}
            
           


        




