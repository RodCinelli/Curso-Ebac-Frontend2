// Função de multiplicação
function multiply(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function greet(name: string): string {
    return "Olá " + name;
}

// Testando as funções
const resultMultiplication = multiply(5, 3);
console.log(`Resultado da multiplicação: ${resultMultiplication}`); // Output: Resultado da multiplicação: 15

const greeting = greet("Rodrigo");
console.log(greeting); // Output: Olá Rodrigo
