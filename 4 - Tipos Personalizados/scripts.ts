console.log("=== TIPOS PERSONALIZADOS ===");

// Os tipos personalizados são uma forma de criar tipos de dados específicos para o seu projeto, permitindo maior controle e segurança no código. Eles podem ser criados usando interfaces, tipos literais, enums e classes.


// ======================================================================


console.log("=== CONHECENDO INTERFACE NO TYPESCRIPT ===");

interface IProduct {
    id: number,
    name: string,
};

function newProduct(product: IProduct) {

};

newProduct({id: 1, name: "Produto X"});


// ======================================================================