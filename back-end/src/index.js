const express = require("express");
const cors = require("cors");
const routes = require("./routes"); 
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/*
Métodos HTTP:

GET: Buscar informação do back-end;
POST: Criar uma informação no back-end;
PUT: Alterar uma informação no back-end;
DELETE: Deletar uma informação no back-end.
*/

/*
Tipos de parâmetros:

Query params: Parâmetros nomeados/enviados na rota, após o "?". Servem para filtros e paginação.
Route params: Parâmetros utilizados para identificar recursos.
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

app.listen(3333);