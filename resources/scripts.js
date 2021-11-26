const wakeUp = async () => {
    const url = 'https://demo-cafi.herokuapp.com/'
    await fetch(url)
    .then(async r => { return r.text() })
    .catch(e => console.error(e))
}

const checkBalance = async (cardNumber, pin) => {
    // local testing
    // const url = `http://localhost:3000/users/account/${cardNumber}/pin/${pin}`
    // heroku testing
    const url = `https://demo-cafi.herokuapp.com/users/account/${cardNumber}/pin/${pin}`
    const result = await fetch(url)
    .then(async r => { return r.text() })
    .catch(e => console.error(e))
    const parsed = JSON.parse(result).account
    document.getElementById("accountNumber").innerHTML = 'Account Number: ' + parsed.cardNumber
    document.getElementById("accountBalance").innerHTML = 'Account Balance: $'+ parsed.balance
}

const clearForm = () => {
    document.getElementById('cardNumber').value = ''
    document.getElementById('pin').value = ''
    document.getElementById('accountNumber').innerHTML = ''
    document.getElementById('accountBalance').innerHTML = ''
}