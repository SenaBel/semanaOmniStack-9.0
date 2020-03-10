
// index - Metodo que vai retornar uma listagem de seções
// show -  Metodo para listar uma unica seção
// store - Metodo para criar uma seção
// update - Metodo para alterar uma seção
// destroy - Metodo para remover uma seção 
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const {email} =  req.body
    
    let user = await User.findOne({ email })

    if (!user){
       user = await User.create({email})
    }
  

    return res.json(user)
    }
}