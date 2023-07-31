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

});