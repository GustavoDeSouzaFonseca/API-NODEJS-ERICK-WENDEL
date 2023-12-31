const {deepEqual, ok} = require("assert")

const database = require("./database")

const DEFAULT_ITEM_CADASTRAR = {
    nome: "Flash", 
    poder: "Speed", 
    id: 1
}

describe("Suite de manipulação de Heróis", () => {

    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })

    it("Deve pesquisar um heroi usando arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id) //UTILIZANDO DESESTRUTURAÇÃO PELO [resultado]
        deepEqual(resultado, expected)
    })
    
    it("Deve cadastrar um herói, usando arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
})