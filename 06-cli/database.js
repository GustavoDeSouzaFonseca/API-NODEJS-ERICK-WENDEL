const {readFile, writeFile} = require("fs")

const {promisify} = require("util")

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

// OUTRA FORMA DE OBTER DADOS DO JSON
// const dadosJson = require('./herois.json')

class Database {

    constructor() {
        this.NOME_ARQUIVO = "herois.json"
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf-8')
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        /*
        * {
        *   nome: Flash,
        *   poder: velocidade
        * }
        * 
        * {
        *   id: 123871327
        * }
        * {
        *   nome: Flash,
        *   poder: velocidade
        *   id: 1
        * }
        */

        const heroiComId = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        /**
         * [
         * {
         *  nome: Flash
         * }
         * ]
         * 
         * {
         *  nome: Batman
         * }
         * 
         * [
         *  {
         *    nome: Flash
         *  }
         * 
         *  {
         *    nome: Batman
         *  }
         * ]
         * 
         */

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()