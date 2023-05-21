console.log(document.querySelector('form'))
let inputs = document.querySelectorAll('input')
console.log(inputs)
console.log(document.getElementsByName('fname'))
console.log(document.getElementsByName('lname'))

const frm = document.forms[0]
frm.addEventListener('submit', check_valid)

function check_valid(e){
    e.preventDefault()
    let name_first = inputs[0].value
    let name_last = inputs[1].value
    if(name_first != '' && name_last != ''){
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        li1.append(name_first)
        li2.append(name_last)
        document.querySelector('ul').appendChild(li1)
        document.querySelector('ul').appendChild(li2)
    }
}