var mongoose = require("mongoose")
var express = require("express")
var route = require('./routes')
var bodyParser = require('body-parser')
var app = express()

mongoose.connect("mongodb+srv://Bvasani729:B1234567@cluster0.wluvm.mongodb.net/SPElectronics?retryWrites=true&w=majority").then(() => {

    console.log("Router Connected...!!")

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use('/api', route)

    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: __dirname })
    })

    app.listen((process.env.PORT || 3000), () => {
        console.log('Server Started Successfully...!!')
    })
}).catch((e) => {
    console.log(e.toString())
})