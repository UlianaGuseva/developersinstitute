const fs = require('fs')

let steps = []
let start = 0
let countSteps = 0
let isfirsttime = false
fs.readFile('RightLeft.txt', 'utf-8', (err, data)=>{
    
    console.log(data.split(''));
    if(err){
        console.log(err);
    }
    else{
        steps
        for(let i=0; i<data.length; i++){
            if(data[i]==">"){
                start = start+1
            }
            else{
                start = start -1
                
            }
            if(start==-1){
                countSteps=countSteps+1
                if(isfirsttime==false){
                    console.log('first time in left side ', countSteps);
                    isfirsttime=true
                }
                
        
            }
            else{
                countSteps=countSteps+1
            }
        }
       
        console.log('Total steps:', start);
    }

})