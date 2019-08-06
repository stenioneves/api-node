const axios =require('axios');
const Dev = require('../models/Dev');
module.exports={

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