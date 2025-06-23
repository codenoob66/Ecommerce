import express from 'express'
import dontenv from "dotenv"
import { connectDB } from './config/db.js'

dontenv.config()

const app = express()
const port = 5000


app.get('/', (req,res) => {
    res.send('Please exit you are not welcome here')
})

// console.log(process.env.MONGO_URI)

app.listen(port, () => {
    connectDB();
    console.log('Server started at http://localhost:5000')
})