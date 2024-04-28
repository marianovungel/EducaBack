const express = require('express');
const Doc = require('../models/Doc');
const router = express.Router();

// Pegar todas as Dociplinas
router.get("/", async (req, res) => {
    try {
        const Dociplinas = await Doc.find();
        res.status(200).json(Dociplinas);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Pegar uma Dociplina pelo ID
router.get("/:id", async (req, res) => {
    try {
        const Dociplina = await Doc.findById(req.params.id);
        if (!Dociplina) {
            return res.status(404).json({ message: "Dociplina não encontrada" });
        }
        res.status(200).json(Dociplina);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Deletar Dociplina pelo ID
router.delete("/:id", async (req, res) => {
    try {
        await Doc.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Dociplina deletada com sucesso" });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Cadastrar nova Dociplina
router.post("/", async (req, res) => {
    try {
        const Dociplina = new Doc(req.body);
        const result = await Dociplina.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Atualizar Dociplina pelo ID
router.put("/:id", async (req, res) => {
    try {
        const Dociplina = await Doc.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!Dociplina) {
            return res.status(404).json({ message: "Dociplina não encontrada" });
        }
        res.status(200).json(Dociplina);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;
