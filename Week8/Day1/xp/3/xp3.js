let allBoldItems;
let paragraph = document.querySelector('p')
let bold_items
function getBold_items(){
    bold_items = paragraph.querySelectorAll('strong')
    return bold_items
}


function highlight(bold_items){
    bold_items = getBold_items()
    for(let item of bold_items){
        item.style.color = 'blue'
    }
}

function return_normal(bold_items){
    bold_items = getBold_items()
    for(let item of bold_items){
        item.style.color = 'black'
    }
}

paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', return_normal)