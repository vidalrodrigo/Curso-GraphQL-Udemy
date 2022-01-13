const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    #esto cria un tipo Dare como puede crear otros
    scalar Date

    type Usuario {
        id:ID!
        nome:String!
        email:String!
        idade:Int
        salario:Float
        vip:Boolean
    }

    type Produto {
        nome:String!
        preco:Float!
        desconto:Float
        precoComDesconto:Float
    }

    # Pontos de entrada da sua API!

    type Query{
        ola:String!
        horaCerta:Date!
        usuarioLogado:Usuario
        produtoEmDestaque:Produto
    }
`

const resolvers = {
    Usuario: {
        salario(usuario){
            return usuario.salario_real
        },
        
    },
    
    Produto: {
        precoComDesconto(des){
            let d = des.preco - des.desconto;
            return d;
        }
    },

    Query:{

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
                nome:'Coca',
                preco:5.0,
                
            }
        }




    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) =>{
    console.log(`Executando em ${url}`)
})
