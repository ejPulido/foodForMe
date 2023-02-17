const database = {}
const  Users  = require('../models/Users') 


database.test = function(x){
	console.log(x)
}

database.insertUserData = async function(data){
	try{
		const {name, lastname, email, pass} = data
		const user = new Users({email, pass, data: {name, lastname}})
		await user.save()
		return true
	}catch(e){
		console.log(e)
		return false
	}

}

database.readUserData = async function(data){
	const {email, pass} = data

	try{
		const dataUser = await Users.findOne({email}).lean()
		return dataUser
		
	}catch(e){
		console.log(e)
	}
}

database.updateDocument = async function(id, newName, newLastname){
	try {
		const updateUser = await Users.findOneAndUpdate({ _id:id }, { data:{ name: newName, lastname: newLastname} })

		console.log(updateUser)

		return true
	} catch(e) {
		// statements
		console.log(e);
	}
}

database.deleteDocument = async function (id) {
	
    try {
        await Users.findByIdAndDelete(id)
    	return true		
    } catch (error) {
        
        console.log(error)
    }
}

module.exports = database