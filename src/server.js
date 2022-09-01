const express = require('express');
const routes = require('./routes'); //importanto routes | entende que é um modulo e quer o arquivo

const app = express();
/**
 * Drive: Select * from users;
 * Query Builders: table('users').select('*').where('')
 */


app.use(express.json());
app.use(routes);

app.listen(3001);