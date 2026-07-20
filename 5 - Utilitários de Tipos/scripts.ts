console.log("=== UTILITÁRIOS DE TIPOS ===");

// Os utilitários de tipos são tipos genéricos que permitem manipular outros tipos de forma mais flexível e poderosa. Eles são amplamente utilizados para criar tipos derivados, transformar tipos existentes e fornecer funcionalidades adicionais ao trabalhar com tipos em TypeScript.


// ======================================================================


console.log("=== PARTIAL ===");

// O utilitário de tipo Partial<T> é usado para criar um novo tipo a partir de um tipo existente, tornando todas as suas propriedades opcionais. Isso é útil quando você deseja atualizar apenas algumas propriedades de um objeto sem precisar fornecer todas as propriedades obrigatórias do tipo original.

interface User {
    id: number,
    name: string,
    email: string,
};

const mewUser: User = { id: 1, name: "Brenon", email: "exemplo@email.com"};

const updatedUser: Partial<User> = { name: "Brenon Rondello" };


// ======================================================================


console.log("=== PICK ===");

// O utilitário de tipo Pick<T, K> é usado para criar um novo tipo a partir de um tipo existente, selecionando apenas um subconjunto de suas propriedades. Isso é útil quando você deseja trabalhar com apenas algumas propriedades específicas de um tipo, ignorando as demais.

interface Book {
    title: string,
    pages: number,
    author: string,
};

const book: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 64 };


// ======================================================================
