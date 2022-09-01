const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

/**
 * GET: Busca ou lista uma informação do usuário no backend
 * POST: Criar uma informação ou inserir no banco | backend
 * PUT: alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * baixar o insomnia
 * 
 */

/**
 * Parâmentros
 * Query: paramentros nomeados enviados na rota, tipo "Users?nome=natan&idade=23"
 * Route params: parametros utilizados para identificar um recurso
 * Request Body: Corpo da requisição
 */

routes.get('/users',async(req,res)=>{
    const users = await connection('users').select('*'); // seleciona todos users
    res.json(users);
})

routes.post('/users',async(req,res)=>{ // quando vai levar tempo é bom usar o async e await
    const {name, email, idade, empresa} = req.body; //Fazendo a desistruturação
    const id = crypto.randomBytes(4).toString('HEX'); // para o id ficar mais dificil

    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    res.json({id})
})

module.exports = routes; //tem que exportar para utilizar em outros locais