const findAllUsers = 'SELECT * FROM "public"."Users" ORDER BY "id" ASC;'
const findAccountByCardAndPin = (cardNumber, pin) => {
    return `SELECT "account" FROM "public"."Users" WHERE ("account"->>'pin')::jsonb @> '${pin}' AND ("account"->>'cardNumber')::jsonb @> '${cardNumber}';` 
}
module.exports = {
    findAllUsers,
    findAccountByCardAndPin
}
