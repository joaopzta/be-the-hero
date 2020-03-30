const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json()); // Converte JSON no corpo da aplicação
app.use(routes);

app.listen('3333');
