let frm = document.forms[0]
frm.addEventListener('submit', get_data)
let story = document.getElementById('story')

function get_data(e){
    e.preventDefault()  
    let inputs = document.querySelectorAll('input')
    let noun = inputs[0].value
    let adjective = inputs[1].value
    let person = inputs[2].value
    let verb = inputs[3].value
    let place = inputs[4].value  
    if (noun == "" || adjective == "" || person == "" || verb == "" || place == "") {
    alert('fill the form')
    }
    else{
        story.innerText= `Once upon a time in the ${adjective} country there lived a ${person}. He had a ${noun} with which he went on a trip to the ${place} to ${verb} ${noun}'s brother.`
    }
}