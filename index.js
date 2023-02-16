
var loading = false;

try {
    console.log('tentando executar...');
    loading = true;
    // throw 'erro desconhecido';

    console.log('final da execução');
} catch (erro) {
    console.log('executou com erro');
} finally {
    loading = false;
    console.log('finally');
}

console.log('final do código', loading);
