const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  console.log('Request Received : ', req.query.name )
  res.send(`Hello ${req.query.name}!\n`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})