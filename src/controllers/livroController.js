import { response } from "express";
import Livro from "../models/livroModel.js";

const books = [
    { id: 1, title: "O Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Duna", author: "Frank Herbert" },
  ];

export const criarLivro = async (request, response) =>{
    try {
        const novoLivro = new Livro(request.body);
        await novoLivro.save();

        response.status(201).json(novoLivro);
    } catch (error) {
        response(400).json({error: err.message})
    }
}

export const listarLivros = async (request, response) => {
    try {
        const livros = await Livro.find();
        response.status(200).json(livros);
    } catch (error) {
        response.status(500).json({error: error.message})
    }
}

export const buscarLivroPorId = async (request, response) => {
    try {
        const livro = await Livro.findById(request.params.id);
        if (!livro) {
            return response.status(404).json({message: 'Livro não encontrado'})
        }
        response.status(200).json(livro);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export const atualizarLivro = async (request, response) =>{
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(request.params.id, request.body, {new:true});
        response.status(200).json(livroAtualizado);
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

export const deletarLivro = async (request, response) =>{
    try {
        const livroDeletado = await Livro.findByIdAndDelete(request.params.id);
        response.status(200).json({messagem: 'Livro deletado com sucesso'});
    } catch (error) {
        response.status(500).json({error: error.message})
    }
}