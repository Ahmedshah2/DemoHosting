const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const path = require('path')

const clientpath = path.join(__dirname, './client/dist')

app.use(cors())
app.use('/', express.static(clientpath))
app.use(express.json())

app.get('/get-items', (req, res) => {
    res.json({
        items: [{
            name: "hello",
            price: 599,
            color: "black"
        }]
    })
})

app.post('/get-items', (req, res) => {

    const { name, price, color } = req.body
    res.json({
        items: [
            { name, price, color }
        ]
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'))
})

app.listen(port, () => {
    console.log(`App listening on port http://127.0.0.1:${port}`)
})