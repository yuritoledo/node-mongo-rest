import express from 'express'
import mongoose from 'mongoose'
import { json, urlencoded } from 'body-parser'

import bookRouter from './routes/bookRouter'

mongoose.connect('mongodb://admin:admin123@ds125073.mlab.com:25073/teste', { useNewUrlParser: true })

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.use('/api/books', bookRouter)

app.listen(port, () => console.log('We are online!'))