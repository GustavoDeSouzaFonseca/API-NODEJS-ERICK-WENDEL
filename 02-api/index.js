//Importamos um módulo interno do nodejs
const util = require("util");

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
     return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        })
     }, 1000)
}

function obterUsuarioCallback (callback) {

    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    
    }, 1000)
}

function obterTelefoneCallback(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: "11999",
            ddd: "11"
        })
    }, 2000)
}

function obterTelefone(idUsuario) {

    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: "11999",
                ddd: "11"
            })
        }, 2000)        
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000);
}

//1° passo adicionar a palavra async -> automaticamente retornaá uma Promise
main()
async function main(){
    try{
        console.time("medida-promise")
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd})${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd("medida-promise")

    } catch (err) {
        console.error('DEU RUIM', error);
    }
}

// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco (result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     }).catch (function (err) {
//         console.error('DEU RUIM: ', err)
//     })

