const database = require("./dbControllers")


const registerUser = async (req,res)=>{
	const {name, lastname, email, pass} = req.body
	try{
	await database.insertUserData(req.body)
	res.redirect("/login")
	}
	catch{res.send("algo pasó")}
}


const loginUser = async (req, res)=>{

}


module.exports = { 
	registerUser,
	loginUser,
}