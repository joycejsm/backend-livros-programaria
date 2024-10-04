import express from 'express';
import livroRoutes from './src/routes/livroRoutes.js';
import connectionDB from './src/config/db.js';

connectionDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/livros', livroRoutes)

app.get('/', (request, response) => {
    response.send("Hello World!")
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
    
});