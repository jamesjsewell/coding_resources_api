const mongoose = require("mongoose")

// mongoose schema class
const Schema = mongoose.Schema

// instance of mongoose Schema class 
var Item = new Schema({
    category: {type: String, required: true},
    title: { type: String },
    description: { type: String },
    link_href: {type: String},
    link_name: {type: String}
}, { collection: 'items', timestamps: true })

// exports mongoose model to the itemController.js file
module.exports = mongoose.model("Item", Item)