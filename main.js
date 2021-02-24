import express from 'express'
import quoteArray from './getQuotes.js'
const port = process.env.PORT || 3010

const app = express()

app.get('/', (req, res)=>{
    const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)]
    res.send(randomQuote)   
})

const server = app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

process.on('SIGINT', ()=>{
    console.log('losing')
    server.close()

})