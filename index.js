class MeuErro extends Error {
    constructor(message, props) {
        super(message, props);
        this.name = "MeuErro";
    }
}

function handleErro(erro) {
    if (erro instanceof MeuErro) {
        console.log("tratando MeuErro");
    }

    if (erro instanceof RangeError) {
        console.log("tratando o RangeError");
    }
    console.log("Nome: ", erro.name);
    console.log("Message: ", erro.message);
    console.log("Cause: ", erro.cause);
}

function fetchErro() {
    if (Math.random() > 0.5) {
        throw new MeuErro("erro desconhecido", {
            cause: "causa do erro"
        });
    } else {
        new Array(1000000000000000);
    }
}

try {
    fetchErro();
} catch (erro) {
    handleErro(erro);
}

console.log('Final da execução do programa');