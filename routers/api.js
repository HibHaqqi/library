const express = require("express");
const api = express.Router();
const {Book} = require("../models");

api.get('/v1/books',  async (req,res)=>{
    const books = await Book.findAll();
    try {
        res.status(200).json({
            status:"success",
            data:books
        })
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message: error.message,
            stack:err
        })
    }
});

api.post('v1/books', async (req,res)=>{
    const {title, author, publish_year,description} = req.body;
    try {
        const book = await Book.create({
            title,author,publish_year,description
        });
        res.status(201).send.json({
            status: "success",
            data: book,
            message:"data buku berhasil ditambahkan"
        });
    } catch (error) {
        res.status(400).send.json({
            status: "failed",
            data: "req.body",
            message: err.message,
            stack:err
        })
    }
});

module.exports = api;