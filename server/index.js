import express from 'express'
import users from './routes/users'
import bodyParser from 'body-parser'

let app = express()

app.use(bodyParser.json())
app.use('/api/signup', users)

app.get('/', (req, res) => {
    res.send('hello redux!')
})

app.listen(6060, () => console.log('Running on localhost:6060'))