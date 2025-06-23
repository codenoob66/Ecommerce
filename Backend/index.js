import express from 'express'

const app = express()
const port = 5000


app.get('/', (req,res) => {
    res.send('Please exit you are not welcome here')
})

app.listen(port, () => {
    console.log('Server started at http://localhost:5000')
})