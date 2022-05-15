const {usuarios, perfis} = require('../data/db')

module.exports = {

    ola(){
        return 'Bom dia!'
    },

    horaCerta(){
         return `${new Date().getHours()}:${new Date().getMinutes()}`;
    },

    usuarioLogado() {
        
        return{
            id:1,
            nome:'Ana da web',
            email:'anadaweb@email.com',
            idade:23,
            salario_real:1234.56,
            vip:true
        }
    },

    produtoEmDestaque(){
        return{
            nome:'Notebook Gamer',
            preco:4890.89,
            desconto:0.15
            
        }
    },
    
    numerosMegaSena(){
        //return[4,8,13,27,33,54] retorna un array
        const crescente = (a ,b) => a - b

        return Array(6).fill(0).map( n => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },
    
    usuarios(){
        //retorna un array
        return usuarios
    },
    // procura por id
    // {id} = esto es destructuring una forma de entrar directo ala variable del objeto 
    usuario(_, {id}) {
        const seleccionados = usuarios.filter(u => u.id === id)
        return seleccionados ? seleccionados[0] : null
        //Si tengo un usuario con esse id ? retorno esse primer elemento seleccionados[0]:sino hay retorno null
    },

    perfis(){
        return perfis
    },
    
    perfilById(_, args){
        const perfiles = perfis.filter(p => p.id === args.id)
        return perfiles ? perfiles[0] : null
    }
}