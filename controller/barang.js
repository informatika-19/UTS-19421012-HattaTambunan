const  barangModel = require('../model/barang')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    barangModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil mengririm barang'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengirim barang'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    barangModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan pengiriman barang',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan pengiriman barang',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    barangModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan id pengiriman barang',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan  id pengiriman barang',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    barangModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data pengiriman barang'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data pengiriman barang'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    barangModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data pengiriman barang'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data pengiriman barang'
    }))
})
