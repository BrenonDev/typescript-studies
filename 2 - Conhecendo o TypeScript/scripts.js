"use strict";
console.log("=== O QUE É O TYPESCRIPT ===");
// Javascript
// O JavaScript é uma linguagem não-tipada. Isto é, podemos criar uma variável para receber conteúdo de tipos diferentes.
// Por exemplo, podemos criar funções que esperam números e chamá-las enviando uma string ou vice-versa.
// É uma característica bastante flexível e que tornou o Javascript bastante popular. Mas, para o crescimento consistente da aplicacao e importante definir regras. Aqui entra o Typescript!
// TypeScript
// Adiciona tipagem no Javascript.
// No final, o código TypeScript é convertido em JavaScript permitindo ser executado em qualquer lugar em que o JavaScript é executado.
// .ts ==> .js
// TypeScript se torna JavaScript:
// 1
// TvpeScript file
/*
type Result = "pass" | "fail"

function verify(result: Result) {
    if (result "pass") {
        console.log("Passed")
    } else {
        console. log("Failed")
    }
}
*/
// 2
// Types are removed
/*
type Result = "pass" | "fail"

function verify(result: Result) {
    if (result "pass") {
        console. log("Passed")
    } else {
        console.log("Failed")
    }
}
*/
// 3
// JavaScript file
/*
function verify(result) {
    if (result "pass") {
        console. log("Passed")
    } else {
        console.log("Failed")
    }
}
*/
// Vantagens em utilizar Typescript:
// · Feedback mais rápido de erros;
// · Antecipa erros que seriam visto em execução;
// · Ajuda a manter o código consistente;
// · Ajuda no trabalho em times;
// · Processo de refatoração mais fácil;
// · Recurso de Autocomplete;
// · Pode adotar gradualmente typescript em uma base de código.
