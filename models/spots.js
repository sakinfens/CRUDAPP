const mongoose = require('mongoose');
const spotSchema = new mongoose.Schema({
	name:{type: String, required: true},
	spot:{type: String, required: true},
	address: {type: String, required: true},
	rating: {type: Number, required: true}
})

module.exports = mongoose.model('Spots', spotSchema)