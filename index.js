const express = require('express');
const cors = require('cors')

const app = express();
const router = require('./src/router');

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || '8000';

app.listen(port, ()=>{
    console.log(`Servidor iniciado com sucesso. Rodando na porta: ${port}`)
})