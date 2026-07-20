console.log("=== UTILITÁRIOS DE TIPOS ===");

// Os utilitários de tipos são tipos genéricos que permitem manipular outros tipos de forma mais flexível e poderosa. Eles são amplamente utilizados para criar tipos derivados, transformar tipos existentes e fornecer funcionalidades adicionais ao trabalhar com tipos em TypeScript.


// ======================================================================


console.log("=== PARTIAL ===");

// O utilitário de tipo Partial<T> é usado para criar um novo tipo a partir de um tipo existente, tornando todas as suas propriedades opcionais. Isso é útil quando você deseja atualizar apenas algumas propriedades de um objeto sem precisar fornecer todas as propriedades obrigatórias do tipo original.

interface User1 {
    id: number,
    name: string,
    email: string,
};

const mewUser: User1 = { id: 1, name: "Brenon", email: "exemplo@email.com"};

const updatedUser: Partial<User1> = { name: "Brenon Rondello" };


// ======================================================================


console.log("=== PICK ===");

// O utilitário de tipo Pick<T, K> é usado para criar um novo tipo a partir de um tipo existente, selecionando apenas um subconjunto de suas propriedades. Isso é útil quando você deseja trabalhar com apenas algumas propriedades específicas de um tipo, ignorando as demais.

interface Book1 {
    title: string,
    pages: number,
    author: string,
};

const book1: Pick<Book1, "title" | "pages"> = { title: "TypeScript", pages: 64 };


// ======================================================================


console.log("=== OMIT ===");

// O utilitário de tipo Omit<T, K> é usado para criar um novo tipo a partir de um tipo existente, omitindo algumas de suas propriedades. Isso é útil quando você deseja trabalhar com um tipo que possui muitas propriedades, mas deseja excluir algumas delas para simplificar o tipo resultante.

interface Book2 {
    title: string,
    pages: number,
    author: string,
    description: string,
};

const book2: Omit<Book2, "description" | "pages"> = { title: "TypeScript", author: "Brenon" };


// ======================================================================


console.log("=== RECORD ===");

// O utilitário de tipo Record<K, T> é usado para criar um novo tipo que representa um objeto com chaves de um tipo específico K e valores de um tipo específico T. Isso é útil quando você deseja criar um objeto com chaves dinâmicas e valores de um tipo específico.

// Cria um objeto onde todas as chaves são string e os valores são números
const scores: Record<string, number> = {
    "Brenon": 10,
    "Mayk": 15,
};

// Limita valores
type Profile = "admin" | "user" | "guest";
const user: Record<Profile, number> = {
    "admin": 1,
    "user": 2,
    "guest": 3,
};

// Objetos personalizados
interface User2 {
    name: string,
    email: string,
};

const users: Record<number, User2> = {
    1: { name: "Brenon", email: "exemplo@email.com"},
    2: { name: "Mayk", email: "exemplo@email.com"},
};


// ======================================================================


console.log("=== TYPEOF ===");

// O operador typeof é usado para obter o tipo de uma variável ou expressão em tempo de compilação. Ele permite criar tipos derivados com base em valores existentes, tornando o código mais flexível e reutilizável.

interface Product {
    id: number,
    name: string,
};

const product1: Product = { id: 1, name: "Produto 1" };

const product2: typeof product1 = { id: 2, name: "Produto 2" };


// ======================================================================


console.log("=== KEYOF ===");

// O operador keyof é usado para obter um tipo que representa todas as chaves de um tipo de objeto. Ele permite criar tipos derivados com base nas propriedades de um objeto, tornando o código mais flexível e reutilizável.

const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg",
};

type Icon = typeof icons;

const icon: keyof Icon = "add";