const { log } = require('handlebars')

const home = (req, res) =>{

  res.render("index",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active || false})  
}

const registro = (req, res) =>{
  res.render("registro",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active ||false })  
}


const login = (req, res) =>{
  res.render("login",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active || false, clase: "popCard none" , msg: false})  
}


const profile = (req, res) =>{
  res.render("profile",{ name:req.session.name || "", lastname:req.session.lastname || "", active:req.session.active || false })  
}

module.exports = { 
	home,
	registro,
	login,
	profile
}