module.exports = {
    handleFind: (dbResult) => {
        if (!dbResult) {
            throw new Error('Not found')
        } else {
            return dbResult[0]
        }
    }
}