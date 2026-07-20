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
