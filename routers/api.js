const express = require("express");
const api = express.Router();
const {Book,Member} = require("../models");

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
        });
    }
});

api.post('/v1/books', async (req,res)=>{
    const {title, author, publish_year,description} = req.body;
    try {
        const book = await Book.create({
            title,author,publish_year,description
        });
        res.status(201).json({
            status: "success",
            data: book,
            message:"data buku berhasil ditambahkan"
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: "req.body",
            message: error.message,
            stack:error
        });
    }
});

api.get('/v1/members', async (req,res)=>{
    const members = await Member.findAll();
    try {
        res.status(200).json({
            status:"success",
            data:members
        })
        
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message: error.message,
            stack:err
        });
    }
})
api.post('/v1/members', async (req,res)=>{
    const {name, npa, email,phone} = req.body;
    try {
        const member = await Member.create({
            name, npa, email,phone
        });
        res.status(201).json({
            status: "success",
            data: member,
            message:"List Member berhasil ditambahkan"
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: "req.body",
            message: error.message,
            stack:error
        });
    }
});
module.exports = api;