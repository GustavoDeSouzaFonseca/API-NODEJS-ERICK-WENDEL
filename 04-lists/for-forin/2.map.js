const service = require("./services")

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for(let indice = 0; indice <= this.length -1; indice ++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

async function main(){
    try {
        
        const results = await service.obterPessoas('a')
        
        console.time('forEach')
        const names = []
        results.results.forEach(function (item) {
            names.push(item.name)
        })
        console.timeEnd('forEach')

        console.time('map')
        const names2 = results.results.map(function (pessoa) {
            return pessoa.name
        })
        console.timeEnd('map')

        console.time('mapDireto')
        const names3 = results.results.map((pessoa) => pessoa.name)
        console.timeEnd('mapDireto')

        console.time('meuMap')
        const names4 = results.results.meuMap(function (pessoa, indice) {
            return `[${indice}]${pessoa.name}`
        })
        console.timeEnd('meuMap')
        
        console.log("names", names)

    } catch (error) {
        console.error("Erro interno de servidor: ", error)
    }
}

main()