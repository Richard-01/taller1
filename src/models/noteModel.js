const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    
    nombre: String,
    nota: String,
    id: Number
    
});

module.exports = model('users', userSchema);

