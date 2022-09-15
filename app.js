//import da biblioteca do express
const express =  require('express')

//import da biblioteca do cors
const cors = require('cors')

//import da biblioteca do body-parser
const bodyParser = require('body-parser')

//import das funcoes utilizadas

app.use((request, response, next) => {
    //header - contém permissão / segurança
    //body - dados(JSON)
    //Permite especificar quem serao os IP's que podem acessar a API (no caso (* == significa todos))
    response.header('Acess-Control-Allow-Origin', '*')
    //Permite especificar quais serao os verbos (metodos) que API irá reconhecer 
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Estabelece que as opcoes acima serao respresentadas pelo cors
    app.use(cors());

    next();
});