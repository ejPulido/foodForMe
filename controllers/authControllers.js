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
	const dataUser = await database.readUserData(req.body)
	const {pass} = req.body
	if(dataUser != null && pass === dataUser.pass){
		req.session.name = dataUser.data.name
		req.session.lastname = dataUser.data.lastname
		req.session.idUser = dataUser._id
		req.session.email = req.body.email 
		req.session.active = true
		console.log(req.session)
		res.redirect("/")
	}

  res.render("login",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active || false, clase: "popCard block", msg: "Usuario no encontrado"})  
}

const logout = (req, res)=>{
	req.session.name = ""
	req.session.lastname = ""
	req.session.active = false
	req.session.idUser = ''
	console.log(req.session)
	res.redirect("/")
}

const updateUserData = (req, res)=>{
	const {newName, newLastname} = req.body
	const id = req.session.idUser

	const result =  database.updateDocument(id, newName,  newLastname)

	req.session.name = newName
	req.session.lastname = newLastname
  res.render("index",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active || false})  
}

const deleteAcount = (req, res)=>{ 
	database.deleteDocument(req.session.email)

	res.redirect("/")

}

module.exports = { 
	registerUser,
	loginUser,
	logout,
	updateUserData,
	deleteAcount
}