import mongoose from "mongoose";


const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});

const Livro = mongoose.model('livro', LivroSchema);

export default Livro;