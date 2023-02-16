

try {
    console.log('Primeiro console');
    // const meuArray = new Array(1000000000000000);
    throw new Error("erro desconhecido", {
        cause: "causa do erro"
    });

    console.log('Segundo console');
} catch (erro) {
    // console.log(erro);
    console.log("Nome: ", erro.name);
    console.log("Message: ", erro.message);
    console.log("Cause: ", erro.cause);
    console.log("Stack : ", erro.stack);
}

console.log('Final da execução do programa');