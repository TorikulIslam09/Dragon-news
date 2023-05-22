const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const newscatgory = require('./data/categories.json')
const news = require('./data/news.json')


app.get('/newscatgory', (req, res) => {
  res.send(newscatgory)
})

app.get('/', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const ID = req.params.id;
  const selectnews = news.find(n => n._id === ID)
  res.send(selectnews)
})

app.get('/catagori/:id', (req, res) => {
  const ID = req.params.id;
  if(ID === '0'){
    res.send(news)
  }
  else {
    const selectnews = news.filter(n => n.category_id === ID)
    res.send(selectnews)
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})