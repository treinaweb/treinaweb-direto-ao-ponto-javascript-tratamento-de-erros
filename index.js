class MeuErro extends Error {
    constructor(message, props) {
        super(message, props);
        this.name = "MeuErro";
    }
}

async function asyncFunction() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Sucesso");

            } else {

                reject(new MeuErro("Erro desconhecido"));
            }


        }, 1000);
    });
}

async function runAsync() {
    try {
        console.log("carregando...");
        const result = await asyncFunction();
        console.log('executou: ', result);
    } catch (erro) {
        console.log(erro.name);
    }

}

runAsync();
