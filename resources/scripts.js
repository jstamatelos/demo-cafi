const login = async (cardNumber, pin) => {
    // local testing
    // const url = `http://localhost:3000/users/account/${cardNumber}/pin/${pin}`
    // heroku testing
    const url = `https://demo-cafi.herokuapp.com/users/account/${cardNumber}/pin/${pin}`
    const result = await fetch(url)
    .then(async r => { return r.text() })
    .catch(e => console.error(e))
    return document.getElementById("demo").innerHTML = result
}
