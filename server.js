import express from 'express';
import livroRoutes from './src/routes/livroRoutes.js';
import connectionDB from './src/config/db.js';

connectionDB();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use('/livros', livroRoutes)

app.get('/', (request, response) => {
    response.send("Hello World!")
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
    
});