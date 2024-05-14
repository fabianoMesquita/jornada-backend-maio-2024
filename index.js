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


app.use(express.json())

//Endpoint de Create [POST]
app.post('/item', function (req, res){
  
  //Acessamos o corpo da Requisição
  const body = req.body

  //Adicionar o novo item na Lista
  const novoItem = body.nome

  //Enviar uma mensagem confirmando
  itens.push(novoItem)

  res.send('Itens Adicionados: ' + novoItem)

})

  //Endpoint de Update [PUT] /item/:id
  app.put('/item/:id', function (req, res){

    const id = req.params.id

    const body = req.body
    const atualizarItem = body.nome

    itens[id-1] = atualizarItem

    res.send('Item Atualizado com sucesso: ' + id + ', ' + atualizarItem)
  })


//Endpoint de Delete
app.delete('/item/:id', function(req,res){
  const id = req.params.id

  delete itens[id - 1]
  res.send('Itens removidos com sucesso: '+id)
})

app.listen(3000)


