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

router.get('/user',async(req,res)=>{
    id = req.query.idUser;
    console.log(id);
    const usuario = await Usuario.findById(id);
    
    if(usuario != null)
        res.status(200).send(usuario);
    else
        res.send(null);
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

// put
router.put('/editar',async(req,res)=>{
    id = req.body._id;
    if(req.body.pass != undefined 
        || req.body.pass != " "
        || req.body.pass != null){
        req.body.pass = bcrypt.hashSync(req.body.pass,saltRound);
    }
    console.log(id);
    console.log(req.body);
    await Usuario.updateOne({_id:id},req.body);
    res.send({});
});

// delete
router.delete('/eliminar',async(req,res)=>{
    id = req.query.idUser;
    console.log('eliminar'+id);
    await Usuario.remove({_id:id});
    res.send({});
});


module.exports = router;