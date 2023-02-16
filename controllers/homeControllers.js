const { log } = require('handlebars')

const home = (req, res) =>{
  res.render("index")  
}

const registro = (req, res) =>{
  res.render("registro")  
}


const login = (req, res) =>{
  res.render("login")  
}


module.exports = { 
	home,
	registro,
	login
}