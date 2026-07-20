"use strict";
console.log("=== TIPOS PERSONALIZADOS ===");
// Os tipos personalizados são uma forma de criar tipos de dados específicos para o seu projeto, permitindo maior controle e segurança no código. Eles podem ser criados usando interfaces, tipos literais, enums e classes.
// ======================================================================
console.log("=== CONHECENDO INTERFACE NO TYPESCRIPT ===");
;
function newProduct(product) {
}
;
newProduct({ id: 1, name: "Produto X" });
// ======================================================================
console.log("=== COMO ESTENDER INTERFACES ===");
;
;
;
let teacher = { id: 1, name: "Brenon", subjects: ["JavaScript", "TypeScript"] };
let student = { id: 2, name: "João", age: 21 };
console.log(teacher.id);
console.log(teacher.name);
console.log(teacher.subjects);
console.log(student.id);
console.log(student.name);
console.log(student.age);
// ======================================================================
console.log("=== USANDO TYPE ===");
function newProduct1(product) {
}
;
newProduct1({ id: 1, name: "Produto Y" });
function selectProducts() {
    return null;
}
;
// ======================================================================
console.log("=== INTERSECÇÃO DE TIPOS ===");
let teacher1 = { id: 1, name: "José", subjects: ["React"] };
let student1 = { id: 2, name: "Maria", age: 25 };
console.log(teacher1.id);
console.log(teacher1.name);
console.log(teacher1.subjects);
console.log(student1.id);
console.log(student1.name);
console.log(student1.age);
// ======================================================================
console.log("=== DIFERENÇA ENTRE TYPE E INTERFACE ===");
;
;
;
let product1 = { id: 1, name: "Produto 1", price: 500, quantity: 10 };
// Declarar um type com o mesmo nome de um type existente irá gerar um erro, pois os types não podem ser mesclados. Isso significa que você não pode criar um novo type com o mesmo nome de um type existente, mesmo que eles tenham propriedades e métodos diferentes. Para criar um novo type, você deve usar um nome diferente.
// type TProduct = {
//     quantity: number,
// };
let product2 = { id: 2, name: "Produto 2", price: 700 };
// Declarar uma interface que estende um tipo primitivo irá gerar um erro, pois as interfaces não podem estender tipos primitivos. Isso significa que você não pode criar uma interface que herda de um tipo primitivo, como string, number, boolean, etc.
// interface I extends string {};
// ======================================================================
console.log("=== ASSERÇÃO DE TIPOS ===");
let userResponse = {};
// ======================================================================
console.log("=== RESTRINGINDO VALORES ===");
let size;
size = "small";
// ======================================================================
console.log("=== ENUMS ===");
// Enums são uma forma de definir um conjunto de valores nomeados, permitindo que você trabalhe com valores simbólicos em vez de valores literais. Eles podem ser usados para representar estados, categorias, tipos e muito mais, melhorando a legibilidade e a manutenção do código.
var Profile;
(function (Profile) {
    Profile[Profile["Admin"] = 1] = "Admin";
    Profile[Profile["Client"] = 2] = "Client";
    Profile[Profile["Seller"] = 3] = "Seller";
})(Profile || (Profile = {}));
;
let profile = Profile.Admin;
console.log(Profile.Admin);
// ======================================================================
console.log("=== GENERIC ===");
// Generics são uma forma de criar componentes e funções que podem trabalhar com diferentes tipos de dados, permitindo maior flexibilidade e reutilização de código. Eles permitem que você defina tipos genéricos que podem ser substituídos por tipos específicos no momento da utilização, garantindo maior segurança e controle sobre os tipos de dados utilizados.
/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */
function useState() {
    let state;
    function get() {
        return state;
    }
    ;
    function set(newValue) {
        state = newValue;
    }
    ;
    return { get, set };
}
;
let newState = useState();
newState.get();
// newState.set("Brenon"); // Erro
newState.set(123);
