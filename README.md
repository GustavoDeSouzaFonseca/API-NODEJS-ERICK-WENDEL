# API-NODEJS-ERICK-WENDEL
### Lerninig api nodejs with magic Erick Wendel

### Promises
Utilizado para ações de uma única vez

### Event Emiter
Usado para ações contínuas

### FOR
Estrutura padrão para percorrer elementos
```
for(let i = 0; i <= RESULTADO.lenght -1; i++)
```
### FOR IN
Estrutura extendida do for
```
for(index in Result) { Result[index] }
```

### FOR OF
Estrutura extendida do for sem a necessidade de um index
```
for(index of Result)
```

### REDUCE
Utilizado para pegar elementos de um Array [] e transformar em um único valor.
```
const total = pesos.reduce((anterior, proximo) => {
        return anterior + proximo
    }, 0)   
```

## TESTS 
### MOCHA
O mocha é a área de testes que tem como padrão uma descrição e o que ele deve fazer, 
assim passando uma variável esperada e passar a sua resposta para validar se está correta.

```
describe("Nome do conjunto de testes" () => {
    it("Descrição do teste", () => {
        Código de teste aqui!
    });
});
```

### ASSERT
```
assert.ok()
```
valida se está tudo certo

```
assert.deepEqual( recebe uma response, e uma resposta de validação)
```