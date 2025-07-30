const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    user_name:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})

UserSchema.pre('save', async function(next) {
    // `this` ici représente l'objet utilisateur qui va être sauvegardé
    if (!this.isModified('password')) return next(); 
    // Si le mot de passe n'a pas été modifié, on ne fait rien (ex: quand on change juste l'email)
    
    this.password = await bcrypt.hash(this.password, 10); 
    // Si le mot de passe est nouveau ou modifié, on le crypte
    
    next(); // On passe au prochain middleware ou on sauvegarde
});

const User = mongoose.model('User', UserSchema);

module.exports = User;