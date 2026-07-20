"use strict";
console.log("=== UTILITÁRIOS DE TIPOS ===");
// Os utilitários de tipos são tipos genéricos que permitem manipular outros tipos de forma mais flexível e poderosa. Eles são amplamente utilizados para criar tipos derivados, transformar tipos existentes e fornecer funcionalidades adicionais ao trabalhar com tipos em TypeScript.
// ======================================================================
console.log("=== PARTIAL ===");
;
const mewUser = { id: 1, name: "Brenon", email: "exemplo@email.com" };
const updatedUser = { name: "Brenon Rondello" };
// ======================================================================
console.log("=== PICK ===");
;
const book1 = { title: "TypeScript", pages: 64 };
// ======================================================================
console.log("=== OMIT ===");
;
const book2 = { title: "TypeScript", author: "Brenon" };
// ======================================================================
console.log("=== RECORD ===");
// O utilitário de tipo Record<K, T> é usado para criar um novo tipo que representa um objeto com chaves de um tipo específico K e valores de um tipo específico T. Isso é útil quando você deseja criar um objeto com chaves dinâmicas e valores de um tipo específico.
// Cria um objeto onde todas as chaves são string e os valores são números
const scores = {
    "Brenon": 10,
    "Mayk": 15,
};
const user = {
    "admin": 1,
    "user": 2,
    "guest": 3,
};
;
const users = {
    1: { name: "Brenon", email: "exemplo@email.com" },
    2: { name: "Mayk", email: "exemplo@email.com" },
};
// ======================================================================
console.log("=== TYPEOF ===");
;
const product1 = { id: 1, name: "Produto 1" };
const product2 = { id: 2, name: "Produto 2" };
// ======================================================================
console.log("=== KEYOF ===");
// O operador keyof é usado para obter um tipo que representa todas as chaves de um tipo de objeto. Ele permite criar tipos derivados com base nas propriedades de um objeto, tornando o código mais flexível e reutilizável.
const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg",
};
const icon = "add";
