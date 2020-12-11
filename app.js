const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello Node JS. It is my first App!</h1><br><p>Nasrulloev Rustam</p><p>exellentgo3@gmail.com</p>')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
