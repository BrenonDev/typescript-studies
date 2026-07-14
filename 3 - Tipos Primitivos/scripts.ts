console.log("=== TIPOS PRIMITIVOS ===")

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


console.log("=== INFERÊNCIA DE TIPOS E TIPAGEM EXPLÍCITA ===")

// A tipagem explícita é quando você declara o tipo de uma variável de forma explícita, enquanto a inferência de tipos é quando o TypeScript deduz o tipo da variável com base no valor atribuído a ela. A tipagem explícita é útil quando você deseja garantir que uma variável tenha um tipo específico, enquanto a inferência de tipos é útil quando você deseja que o TypeScript deduza automaticamente o tipo da variável com base no valor atribuído a ela.

// TIPAGEM EXPLÍCITA

let myName: string;

myName = "Brenon";

// INFERÊNCIA DE TIPOS

let message = "Hello World!";

// message = 1; // Error ao tentar trocar o valor para outro tipo de dado
message = "Olá mundo!"


// ======================================================================
