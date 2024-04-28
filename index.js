require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
require("./db")

// middlesware
app.use(express.json())
app.use(cors())


//Importarções de rotas
const Disciplina = require("./routes/disc")
const Userapp = require("./routes/user")
const Categ = require("./routes/categ")
const Event = require("./routes/Event")
const Documentos = require("./routes/Doc")
const Trab = require('./routes/Trab')

const disc = require('./models/disc')
const Doc = require('./models/Doc')
const User = require('./models/user')
// const Eventos = require('./models/Event')

//criação de rotas
app.use("/disc", Disciplina)
app.use("/user", Userapp)
app.use("/categ", Categ)
app.use("/doc", Documentos)
app.use("/events", Event)
app.use("/trab", Trab)

//pesquisa
app.get("/classe/:heash", async (req, res) => {
    try {
        const disciplinas = await disc.find({classe: req.params.heash});
        res.status(200).json(disciplinas);
    } catch (error) {
        res.status(404).json(error);
    }
});
app.post("/classedis", async (req, res) => {
    try {
        const disciplinas = await Doc.find({
            disciplina: req.body.disciplina,
            classe: req.body.classe
        });
        res.status(200).json(disciplinas);
    } catch (error) {
        res.status(404).json(error);
    }
});

// // Login
app.post("/login", async (req, res) => {
    try {
        const resUser = await User.findOne({email: req.body.email})
        if(!resUser){
            res.status(400).json({ message: "Sem Usuário!"});
        }else{
            if(req.body.password === resUser.password){
                res.status(200).json(resUser);
            }else{
                res.status(400).json({ message: "Senha Incorreta!"});
            }
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.get("/", (req, res)=>{
    res.status(200).json("Em ótimo funcionamento!!!")
})

const port = process.env.PORT
app.listen(port, console.log("Backend Porta => "+ port))