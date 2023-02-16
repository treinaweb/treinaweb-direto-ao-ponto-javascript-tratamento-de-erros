class MeuErro extends Error {
    constructor(message, props) {
        super(message, props);
        this.name = "MeuErro";
    }
}

async function asyncFunction() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Sucesso");

            } else {

                reject(new MeuErro("Erro desconhecido"));
            }


        }, 1000);
    });
}

asyncFunction().then((result) => {
    throw "novo erro desconhecido";
    new Array(100000000000);
    console.log(result);
}).catch((erro) => {
    if (erro instanceof MeuErro) {
        console.log(erro.name);
    }

    if (erro instanceof RangeError) {
        console.log(erro.name);
    }
    if (!(erro instanceof Error)) {

        console.log(erro);
    }

});

console.log('final da execução do código');

// async function runAsync() {
//     try {
//         console.log("carregando...");
//         const result = await asyncFunction();
//         console.log('executou: ', result);
//     } catch (erro) {
//         console.log(erro.name);
//     }

// }

// runAsync();
