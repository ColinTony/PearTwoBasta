const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

// seguridad
const saltRound = 10;

// Get

router.get('/',(req,res)=>{
    res.send('The API say Hello');
});

router.get('/login',async (req,res)=>
{
    let isOk = false;
    const usuario = await Usuario.findOne(
    {
        'email' : req.query.email
    });

    bcrypt.compare(req.query.pass,usuario.pass,(err,result)=>{
        isOk = result;
    });
    
    if(isOk)
        res.send(usuario);
    else
        res.send({});
});

// post HTTP Methods
router.post('/registro', async(req,res)=>
{
    let has;
    bcrypt.hash(req.body.pass,saltRound, (err,hash)=>
    {
        has = hash;
    });
    req.body.pass = has;
    let newUser = new Usuario(req.body);
    await newUser.save();
    console.log(newUser);
    res.statusCode(200);
    res.send({status:200});
});



module.exports = router;