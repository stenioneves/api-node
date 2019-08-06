const Dev = require('../models/Dev');

module.exports = {

     async store(req, res){

        const {devId} = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetdev = await Dev.findById(devId);

        if(!targetdev){
            return res.status(400).json({erro:'Dev não existe!'});
        }
        if(targetdev.likes.includes(loggedDev._id)){
            console.log("Deu match!");
        }
        loggedDev.likes.push(targetdev._id);
        await loggedDev.save();

        //console.log(req.params.devId);
        //console.log(req.headers.user);
        return res.json(loggedDev);

    }



};