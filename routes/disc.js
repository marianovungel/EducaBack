const express = require('express');
const Disc = require('../models/disc');
const router = express.Router();

// Pegar todas as disciplinas
router.get("/", async (req, res) => {
    try {
        const disciplinas = await Disc.find();
        res.status(200).json(disciplinas);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Pegar uma disciplina pelo ID
router.get("/:id", async (req, res) => {
    try {
        const disciplina = await Disc.findById(req.params.id);
        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }
        res.status(200).json(disciplina);
    } catch (error) {
        res.status(404).json(error);
    }
});

// Deletar disciplina pelo ID
router.delete("/:id", async (req, res) => {
    try {
        await Disc.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Disciplina deletada com sucesso" });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Cadastrar nova disciplina
router.post("/", async (req, res) => {
    try {
        const disciplina = new Disc(req.body);
        const result = await disciplina.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Atualizar disciplina pelo ID
router.put("/:id", async (req, res) => {
    try {
        const disciplina = await Disc.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }
        res.status(200).json(disciplina);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;
