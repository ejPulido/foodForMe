const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema({
	email:{
		type: String,
		unique: true,
		required: true,
	},
	pass:{type:String},

	data:{
		name:{type:String},
		lastname:{type:String},

	},
	recetas:{}
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users