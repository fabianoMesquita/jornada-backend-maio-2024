const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.get('/oi', function(req,res) {
  res.send('Olá, Mundo!')
})

//Lista de Itens
const itens = ['Rick Sanchez', 'Summer Smith', 'Morty Smith']

//End Point Read-All

app.get('/item', function (req,res) {
  res.send(itens)
})

app.listen(3000)