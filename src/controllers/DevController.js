const axios =require('axios');
const Dev = require('../models/Dev');
module.exports={

   // listar os devs
    async index( req, res){
      const {user}= req.headers;
      const loggledDev= await Dev.findById(user);

      const users = await Dev.find({
        $and:[
            {_id:{$ne:user} },
            { _id: {$nin:loggledDev.likes} },
            { _id: {$nin:loggledDev.dislikes} }
        ]

      })

      res.json(users);

    },
    // Criar objeto DEV
     async store(req, res){
     const {username}= req.body;

     const userExists = await Dev.findOne({user:username});

     if(userExists){
         return res.json(userExists);
     }
     
     //Usar o axios para pegar informação na Api do GitHub
     const response = await axios.get(`https://api.github.com/users/${username}`);
     //console.log(response.data);
     const { name, bio, avatar_url:avatar }= response.data;
     
     const dev = await Dev.create({
         name,
         user :username,
         bio,
         avatar
     })

        return res.json(dev);

    }

};