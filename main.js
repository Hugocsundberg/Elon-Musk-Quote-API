import express from 'express'
import quoteArray from './getQuotes.js'
const port = 3010

const app = express()

app.get('/', (req, res)=>{
    const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)]
    res.send(randomQuote)   
})

const server = app.listen(port, ()=>{
    console.log(`listening on http://127.0.0.1:${port}`)
})

process.on('SIGINT', ()=>{
    console.log('losing')
    server.close()

})