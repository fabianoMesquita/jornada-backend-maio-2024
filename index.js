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

//End Point by ID /item/:id
app.get('/item/:id', function (req,res) {
  //Acessamos o parâmetro de rota ID
  const id = req.params.id
  
  //ID -1
  const item = itens[id - 1]

  //Item Enviado
  res.send(item)
})

app.listen(3000)