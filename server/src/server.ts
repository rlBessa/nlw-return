import express from 'express'
import { routes } from './routes';

// GET, POST, PUT, PATCH, DELETE
// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma única informação de um entidade
// DELETE = Remover uma informação de uma entidade

const app = express();

app.use(express.json());
app.use(routes);





app.listen(3333, () => {
    console.log('HTTP server running');

});