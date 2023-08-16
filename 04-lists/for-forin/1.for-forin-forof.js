const service = require("./services.js")

async function main() {
    try {
        const result = await service.obterPessoas("a");
        const names = []

        //FOR
        console.time('for')
        for(let i = 0; i <= result.results.length -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        //FOR IN
        console.time('forin')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        //FOR OF
        console.time('forof')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')


        console.log('names', names)

    }catch (err) {
        console.error(`erro interno: `, err)
    }
}

main()