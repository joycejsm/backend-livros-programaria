import express from 'express'
import { criarLivro, listarLivros, buscarLivroPorId, atualizarLivro, deletarLivro } from '../controllers/livroController.js';

const router = express.Router();


//rota para criar um novo livro;
router.post('/', criarLivro);

//rota para buscar todos os livros;
router.get('/', listarLivros);

//rota para buscar livro pelo id;
router.get('/:id', buscarLivroPorId)

//rota para atualizar livro pelo id;
router.patch('/:id', atualizarLivro);

//rota para deletar livro pelo id;
router.delete('/:id', deletarLivro)

export default router;