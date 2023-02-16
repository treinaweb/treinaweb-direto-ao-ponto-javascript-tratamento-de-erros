function main() {
    F1();
    console.log("função main");
}

function F1() {
    F2();
    try {
        new Array(1000000000000);
    } catch (error) {

    }
    console.log("função F1");
}

function F2() {
    F3();
    console.log("função F2");
}

function F3() {
    console.log("função F3");
}

main();