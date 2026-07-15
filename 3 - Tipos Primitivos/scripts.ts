console.log("=== TIPOS PRIMITIVOS ===");

// Os tipos primitivos são os tipos de dados mais básicos do TypeScript. Eles incluem:

// · number: representa números, tanto inteiros quanto decimais;
// · string: representa cadeias de caracteres, como texto;
// · boolean: representa valores lógicos, verdadeiro (true) ou falso (false);

// STRING

let username: string;

username = "Brenon";
// username = 25; // Error ao tentar trocar o valor para outro tipo de dado
// username = true; // Error ao tentar trocar o valor para outro tipo de dado

// NUMBER

let total: number;

total = 7;
total = 5.5;

// BOOLEAN

let isLoading: boolean;

isLoading = true;


// ======================================================================


console.log("=== INFERÊNCIA DE TIPOS E TIPAGEM EXPLÍCITA ===");

// A tipagem explícita é quando você declara o tipo de uma variável de forma explícita, enquanto a inferência de tipos é quando o TypeScript deduz o tipo da variável com base no valor atribuído a ela. A tipagem explícita é útil quando você deseja garantir que uma variável tenha um tipo específico, enquanto a inferência de tipos é útil quando você deseja que o TypeScript deduza automaticamente o tipo da variável com base no valor atribuído a ela.

// TIPAGEM EXPLÍCITA

let myName: string ;

myName = "Brenon";

// INFERÊNCIA DE TIPOS

let message = "Hello World!";

// message = 1; // Error ao tentar trocar o valor para outro tipo de dado
message = "Olá mundo!"


// ======================================================================


console.log("=== TIPO ANY ===");

// O tipo any é um tipo especial que permite que uma variável possa receber qualquer tipo de valor, seja ele primitivo ou objeto. Ele é útil quando você não sabe o tipo de dado que será atribuído a uma variável, mas deve ser usado com cautela, pois pode levar a erros em tempo de execução se não for usado corretamente.

let value1; // Variáveis declaradas sem tipo assumem automaticamente o tipo de dado any
let value2: any; // Ou pode ser declarada de forma explícita

value1 = 1;
value1 = "1";

value2 = 2;
value2 = "2";


// ======================================================================


console.log("=== TIPAGEM EM ARRAYS ===");

// A tipagem em arrays é uma forma de garantir que todos os elementos de um array sejam do mesmo tipo. Isso ajuda a evitar erros em tempo de execução e torna o código mais legível e fácil de entender. O TypeScript permite que você defina o tipo dos elementos de um array usando a sintaxe de colchetes [] ou a sintaxe de Array<tipo>.

// TIPAGEM EXPLÍCITA OU ANOTAÇÃO DE TIPO (TYPE ANNOTATION)
let names: string[] = ["Brenon", "João"];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

// INFERÊNCIA DE TIPO
let products = ["Produto X", "Produto Y", "Produto Z"];
let values = [100, 200, 300];


// ======================================================================


console.log("=== TIPAGEM EM FUNÇÕES ===");

// A tipagem em funções é uma forma de garantir que os parâmetros e o valor de retorno de uma função sejam do tipo esperado. Isso ajuda a evitar erros em tempo de execução e torna o código mais legível e fácil de entender. O TypeScript permite que você defina o tipo dos parâmetros e do valor de retorno de uma função usando a sintaxe de dois pontos : seguida do tipo desejado.

// function sum(x, y) { // Erro porque o TS não recomenda any em funções, então não aceitar any inferido, exceto que seja de forma explícita
//     const result = x + y;
//     console.log("Resultado:", result);
// };

function sum(x: number, y: number): number {
    const result = x + y;
    return result;
};

const result = sum(1, 2);
console.log("Resultado:", result);

const showMessage = (name: string): string => {
    const message = "Olá " + name;
    return message;
};

console.log(showMessage("Brenon"));


// ======================================================================


console.log("=== TIPAGEM EM OBJETOS ===");

// A tipagem em objetos é uma forma de garantir que as propriedades de um objeto sejam do tipo esperado. Isso ajuda a evitar erros em tempo de execução e torna o código mais legível e fácil de entender. O TypeScript permite que você defina o tipo das propriedades de um objeto usando a sintaxe de dois pontos : seguida do tipo desejado. E também permite que você defina propriedades opcionais usando o operador ? após o nome da propriedade.

let user: { name: string, age: number, avatarUrl?: string } = { //
    name: "Brenon",
    age: 25,
};

console.log(user.name);
console.log(user.age);
console.log(user.avatarUrl);


// function signIn(email: string, password: string) {
//     // Lógica de conectar o usuário na aplicação
//     console.log("Usuário " + email + " conectado!");
// };

// signIn("exemplo@email.com", "123");


// function signIn({ email, password }:{ email: string, password: string }) {
//     // Lógica de conectar o usuário na aplicação
//     console.log("Usuário " + email + " conectado!");
// };

// signIn({ email: "exemplo@email.com", password: "123" });


function signIn( data :{ email: string, password: string }) {
    // Lógica de conectar o usuário na aplicação
    console.log("Usuário " + data.email + " conectado!");
};

signIn({ email: "exemplo@email.com", password: "123" });


// ======================================================================


console.log("=== NULL E UNDEFINED ===");

// O TypeScript possui dois tipos especiais de valores: null e undefined. O valor null é usado de forma explícita para indicar que uma variável não possui valor, enquanto o valor undefined é usado de forma implícita pelo JavaScript quando uma variável é declarada, mas não inicializada. Ambos os valores são considerados falsy em JavaScript, o que significa que eles são avaliados como false em contextos booleanos.


// UNDEFINED

let value: number;

// console.log(value); // undefined


let user1 = {
    name: "Brenon",
};

// console.log(user.email); // undefined


// NULL

let email = null;

console.log(email); // null


// ======================================================================
