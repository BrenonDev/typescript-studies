console.log("=== TIPOS PERSONALIZADOS ===");

// Os tipos personalizados são uma forma de criar tipos de dados específicos para o seu projeto, permitindo maior controle e segurança no código. Eles podem ser criados usando interfaces, tipos literais, enums e classes.


// ======================================================================


console.log("=== CONHECENDO INTERFACE NO TYPESCRIPT ===");

// Interfaces são uma forma de definir a estrutura de um objeto, especificando quais propriedades e métodos ele deve ter. Elas são úteis para garantir que os objetos sigam um contrato específico, facilitando a manutenção e a legibilidade do código.

interface IProduct {
    id: number,
    name: string,
};

function newProduct(product: IProduct) {

};

newProduct({id: 1, name: "Produto X"});


// ======================================================================


console.log("=== COMO ESTENDER INTERFACES ===");

// A extensão de interfaces permite criar novas interfaces com base em interfaces existentes, adicionando ou modificando propriedades e métodos. Isso promove a reutilização de código e a criação de hierarquias de tipos mais complexas.

interface IPerson {
    id: number,
    name: string,
};

interface ITeacher extends IPerson {
    // id: number,
    // name: string,
    subjects: string[],
};

interface IStudent extends IPerson {
    // id: number,
    // name: string,
    age: number,
};

let teacher: ITeacher = { id: 1, name: "Brenon", subjects: ["JavaScript", "TypeScript"] };

let student: IStudent = { id: 2, name: "João", age: 21 };

console.log(teacher.id);
console.log(teacher.name);
console.log(teacher.subjects);

console.log(student.id);
console.log(student.name);
console.log(student.age);


// ======================================================================


console.log("=== USANDO TYPE ===");

// O Type é uma forma de criar tipos personalizados no TypeScript, permitindo definir tipos de dados específicos para o seu projeto. Ele pode ser usado para criar tipos literais, uniões, interseções e muito mais.

type Product = {
    id: number,
    name: string,
};

function newProduct1(product: Product) {

};

newProduct1({ id: 1, name: "Produto Y" });

type SelectResponse = Product[] | null;

function selectProducts(): SelectResponse {
    return null;
};


// ======================================================================


console.log("=== INTERSECÇÃO DE TIPOS ===");

// A interseção de tipos permite combinar múltiplos tipos em um único tipo, criando um novo tipo que possui todas as propriedades e métodos dos tipos originais. Isso é útil para criar tipos mais complexos e específicos, garantindo maior flexibilidade e segurança no código.

type Person = {
    id: number,
    name: string,
};
type Teacher = Person & {
    subjects: string[],
};
type Student = Person & {
    age: number,
};

let teacher1: Teacher = {id: 1, name: "José", subjects: ["React"]};
let student1: Student = {id: 2, name: "Maria", age: 25};

console.log(teacher1.id);
console.log(teacher1.name);
console.log(teacher1.subjects);

console.log(student1.id);
console.log(student1.name);
console.log(student1.age);


// ======================================================================
