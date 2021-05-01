const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/uts_hatta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('berhasil konek ke database')
}).catch((e) => {
    console.log(e)
    console.log('gagal konek ke database')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))

app.use('/barang/',require('./routes/barang'))

app.listen(4000,() => {
    console.log('Server Started')
})
