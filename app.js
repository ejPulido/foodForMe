const express = require("express");
const session = require("express-session")
require('dotenv').config()
require('./database/db.js')


const app = express();
app.use(session({
    secret: "secreto",
    resave:true,
    saveUninitialized: true,
})) 
app.use(express.static("public"))


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))



app.use("/", require("./routes/home.js"));




/*
app.get("/",(req, res)=>{
    res.send('listo')
});

app.use("/", require("./routes/home.js"));
app.use('/auth', require("./routes/auth.js"))

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
*/

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log("server andando en el puerto🔥", PORT));