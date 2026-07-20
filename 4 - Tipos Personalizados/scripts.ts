console.log("=== TIPOS PERSONALIZADOS ===");

// Os tipos personalizados são uma forma de criar tipos de dados específicos para o seu projeto, permitindo maior controle e segurança no código. Eles podem ser criados usando interfaces, tipos literais, enums e classes.


// ======================================================================


console.log("=== CONHECENDO INTERFACE NO TYPESCRIPT ===");

// Interfaces são uma forma de definir a estrutura de um objeto, especificando quais propriedades e métodos ele deve ter. Elas são úteis para garantir que os objetos sigam um contrato específico, facilitando a manutenção e a legibilidade do código.

interface IProductX {
    id: number,
    name: string,
};

function newProduct(product: IProductX) {

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

let teacher1: Teacher = { id: 1, name: "José", subjects: ["React"] };
let student1: Student = { id: 2, name: "Maria", age: 25 };

console.log(teacher1.id);
console.log(teacher1.name);
console.log(teacher1.subjects);

console.log(student1.id);
console.log(student1.name);
console.log(student1.age);


// ======================================================================


console.log("=== DIFERENÇA ENTRE TYPE E INTERFACE ===");

// A principal diferença entre Type e Interface é que as interfaces podem ser estendidas e implementadas, enquanto os tipos não podem. Além disso, as interfaces são mais flexíveis e podem ser usadas para definir contratos para classes, enquanto os tipos são mais adequados para definir tipos literais e uniões.

// Exemplo de interface:

interface IBaseProduct {
    price: number,
};

interface IProduct extends IBaseProduct {
    id: number,
    name: string,
};

// Declarar uma interface com o mesmo nome de uma interface existente irá mesclar as propriedades e métodos das duas interfaces, criando uma nova interface que possui todas as propriedades e métodos das interfaces originais. Isso é útil para estender a funcionalidade de uma interface sem precisar criar uma nova interface do zero.
interface IProduct {
    quantity: number,
};

let product1: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 10 };

// Exemplo de type:

type TBaseProduct = {
    price: number,
};

type TProduct = TBaseProduct & {
    id: number,
    name: string,
};

// Declarar um type com o mesmo nome de um type existente irá gerar um erro, pois os types não podem ser mesclados. Isso significa que você não pode criar um novo type com o mesmo nome de um type existente, mesmo que eles tenham propriedades e métodos diferentes. Para criar um novo type, você deve usar um nome diferente.
// type TProduct = {
//     quantity: number,
// };

let product2: TProduct = { id: 2, name: "Produto 2", price: 700 };


// Tipos personalizados podem ser baseados em tipos primitivos, como string, number, boolean, etc. Isso permite criar tipos mais específicos e significativos para o seu projeto, melhorando a legibilidade e a manutenção do código.
type TypeString = string;
type TypeNumber = number;

// Declarar uma interface que estende um tipo primitivo irá gerar um erro, pois as interfaces não podem estender tipos primitivos. Isso significa que você não pode criar uma interface que herda de um tipo primitivo, como string, number, boolean, etc.
// interface I extends string {};


// ======================================================================


console.log("=== ASSERÇÃO DE TIPOS ===");

// A asserção de tipos é uma forma de informar ao compilador do TypeScript que você tem mais conhecimento sobre o tipo de uma variável do que ele possui. Isso permite que você trate a variável como um tipo específico, mesmo que o compilador não consiga inferir isso automaticamente. No entanto, é importante usar a asserção de tipos com cuidado, pois ela pode levar a erros em tempo de execução se usada incorretamente. A asserção de tipo normalmente é usada consumir APIs externas, onde o retorno da API pode não ser conhecido pelo compilador do TypeScript. Nesse caso, você pode usar a asserção de tipos para informar ao compilador que o retorno da API é de um tipo específico, permitindo que você acesse as propriedades e métodos desse tipo sem erros de compilação.

type UserResponse = {
    id: number,
    name: string,
    avatar: string,
}

let userResponse = {} as UserResponse;


// ======================================================================


console.log("=== RESTRINGINDO VALORES ===");

// Restringir valores é uma técnica que permite limitar os valores que uma variável pode assumir, garantindo maior controle e segurança no código. Isso pode ser feito usando tipos literais, enums e tipos personalizados.

type Size = "small" | "medium" | "large";

let size: Size;

size = "small";


// ======================================================================
