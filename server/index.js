import express from 'express'
import users from './routes/users'
import auth from './routes/auth'
import events from './routes/events'
import bodyParser from 'body-parser'

let app = express()

app.use(bodyParser.json())
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/events', events)

app.get('/', (req, res) => {
    res.send('hello redux!')
})

app.listen(6060, () => console.log('Running on localhost:6060'))