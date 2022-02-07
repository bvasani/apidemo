var mongoose = require('mongoose');

var accessoriesSchema = mongoose.Schema({
    name:String,
    price:String
})

module.exports = mongoose.model("accessories",accessoriesSchema)
