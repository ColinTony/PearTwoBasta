const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
    {
        nombre   : String,
        apeP     : String,
        apeM     : String,
        nickName : String,
        email    : String,
        pass     : String,
        ganadas  : {
            type : Number,
            default: 0
        },
        perdidas : {
            type : Number,
            default: 0
        },
        empatadas: {
            type : Number,
            default: 0
        }
    }
);
// collections de usuarios
module.exports = mongoose.model('usuarios',usuarioSchema);