const {perfis} = require('../data/db');

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    perfil(usuario){
        const perfiles = perfis.filter(p => p.id === usuario.id)
        return perfiles ? perfiles[0] : null
    }
}