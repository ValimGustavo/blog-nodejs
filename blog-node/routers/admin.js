const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require("../models/Categoria");

const Categoria = mongoose.model("categoria")

router.get('/', (req, res) => res.render('admin/index'))

router.get("/categoria", (req, res) => {
    res.render('categoria/categorias');
})

router.get("/categoria/adicionar", (req, res) =>{
    res.render("categoria/adicionar")
})

router.post("/categoria/banco/salvar", (req, res) => {
    const { nome, slug } = req.body;

    new Categoria({nome, slug})
        .save()
        .then(()=> res.redirect("/admin/categoria/adicionar"))
        .catch((error)=> console.log(error))

})


module.exports = router;