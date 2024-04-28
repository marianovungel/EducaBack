const express = require('express');
const Categ = require('../models/categ');
const router = express.Router();

// Pegar todas as categorias
router.get("/", async (req, res) => {
    try {
        const categorias = await Categ.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Pegar uma categoria pelo ID
router.get("/:id", async (req, res) => {
    try {
        const categoria = await Categ.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Deletar categoria pelo ID
router.delete("/:id", async (req, res) => {
    try {
        await Categ.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Cadastrar nova categoria
router.post("/", async (req, res) => {
    try {
        const categoria = new Categ(req.body);
        const result = await categoria.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Atualizar categoria pelo ID
router.put("/:id", async (req, res) => {
    try {
        const categoria = await Categ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;
