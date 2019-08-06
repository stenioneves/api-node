//Rotas da aplicação 

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.json({mensagem:` Olá  ${req.query.name}`} );
   });
routes.post('/devs',(req, res)=>{
    console.log(req.body);
   return res.json({ativo:true});
});

   module.exports = routes;