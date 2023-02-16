const database = {}
const  Users  = require('../models/Users') 


database.test = function(x){
	console.log(x)
}

database.insertUserData = async function(data){
	try{
		const {name, lastname, email, pass} = data
		const user = new Users({email, data: {name, lastname, pass }})
		await user.save()
		return true
	}catch(e){
		console.log(e)
		return false
	}

}

database.readUserData = async function(data){
	const {email, pass} = data
}
module.exports = database