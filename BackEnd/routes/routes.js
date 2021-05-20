const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const usuario = require('../models/usuario');

// seguridad
const saltRound = 10;

// Get

router.get('/',(req,res)=>{
    res.send('The API say Hello');
});

router.get('/login',async(req,res)=>
{
    let pass = req.query.pass;
    let email = req.query.email;

    const user =
         await Usuario.findOne(
        {
            'email' : email
        });
    if(bcrypt.compareSync(pass,user.pass))
        res.send(user);
    else
        res.send({});
});


// post HTTP Methods
router.post('/registro', async(req,res)=>
{
    req.body.pass = bcrypt.hashSync(req.body.pass,saltRound);
    let newUser = new Usuario(req.body);
    await newUser.save();
    console.log(newUser);
    res.statusCode(200);
    res.send({status:200});
});



module.exports = router;