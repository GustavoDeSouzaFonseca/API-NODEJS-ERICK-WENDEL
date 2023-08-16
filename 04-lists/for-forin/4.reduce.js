const { obterPessoas } = require("./services");

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]

    //UTILIZADO FOR TRAZIDIONAL PARA NÃO OBRIGAR A RETORNAR TODOS OS DADOS DO CALLBACK
    for(let i = 0; i <= this.length -1; i++) {
        valorFinal = callback(valorFinal, this[i], this)
    }
    
    return valorFinal
}

async function main(){
    try {
        const {results} = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        
        console.log(`Pesos: ${pesos}`)

        // [20.2, 30.3, 40.5] = ?
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // }, 0)   
        
        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzao'],
        ]

        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')

        console.log("Total: ", total)

    } catch (error) {
        console.error("DEU RUIM", error)
    }
}

main()