const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema({
   	    namabarang:{
        type: String
        },
        kodebarang:{
            type: String
        },
        alamat: {
            type: String
        },
	    jumlahbarang:{
        type: String
        },
        satuanbarang:{
            type: String
        },
	    harga: {
            type: String
        }
})
module.exports =mongoose.model('barang',barangSchema)