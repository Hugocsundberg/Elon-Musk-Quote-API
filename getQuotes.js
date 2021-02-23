import fs from 'fs'

const regexp = new RegExp(/“.*”/gm)

const textInput = fs.readFileSync('./quotes.txt', 'utf8')
let quoteArray = textInput.match(regexp)

export default quoteArray
