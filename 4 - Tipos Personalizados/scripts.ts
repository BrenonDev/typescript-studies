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
