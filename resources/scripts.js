const login = async (cardNumber, pin) => {
    // local testing
    // const url = `http://localhost:3000/users/account/${cardNumber}/pin/${pin}`
    // heroku testing
    const url = `http://localhost:3000/users/account/${cardNumber}/pin/${pin}`
    const result = await fetch(url)
    .then(async r => {
        return r.text()
    })
    .catch(e => console.error(e));
    console.log(result)
}