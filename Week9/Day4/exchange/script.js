async function getCurrencies(){
    let url = 'https://v6.exchangerate-api.com/v6/72e209034d13043d26059dfd/codes'
    let response = await fetch(url)
    let result = await response.json()
    // console.log(result.supported_codes);
    let currencies = ''
    for(let i of result.supported_codes){
        currencies = `${currencies}<option value="${i[0]}">${i[0]}-${i[1]}</option>`
    }

    document.getElementById('from').innerHTML = currencies
    document.getElementById('to').innerHTML = currencies
}

getCurrencies()

let form = document.querySelector('form')
form.addEventListener('submit', convertMoney)

async function convertMoney(e){
    e.preventDefault()
    let fromCur = form.elements.from.value 
    // console.log(fromCur);
    let toCur = form.elements.to.value 
    // console.log(toCur);
    let amount = form.elements.amount.value 
    // console.log(amount);
    let url = 'https://v6.exchangerate-api.com/v6/72e209034d13043d26059dfd/pair/' + fromCur + '/' + toCur + '/' + amount
    // console.log(url);
    let response = await fetch(url)
    let result = await response.json()
    // console.log(result.conversion_result);
    document.getElementById('result').innerText = result.conversion_result
}

let change = document.getElementsByClassName('change')[0]
change.addEventListener('click', reverseCurrencies)

function reverseCurrencies(){
    let inter = form.elements.from.value 
    form.elements.from.value = form.elements.to.value 
    form.elements.to.value = inter
}
