const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = express.Router()

//Pegar todos os Usuários
router.get("/", async(req, res)=>{
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

//Pegar 1 Usuários
router.get("/:id", async(req, res)=>{
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})
//deletar Usuário
router.delete("/:id", async(req, res)=>{
    try{
        if(!req.params.id){
            return res.status(404).json("O ID é Obrigatório!")
        }
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("Usuário deletado com sucesso!");
    }catch(err){
        return res.status(404).json(err);
        
    }
})

// Cadastrar usuário
router.post("/", async (req, res) => {
    try {
        const usuario = new User(req.body);
        const result = await usuario.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});





//Editar Usuário
router.put("/:id", async(req, res)=>{
    try {
        
        res.status(200).json()
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;