//para quebrar a maldição, precisamos do ...:

console.log("Olá, mundo!!!");

//para ganhar em dollar

console.log("Hello World!!!");

//console.log vamos utilizar toda hora.


//o que é variável? é uma caixa onde guardo/armazeno valores/informações dos usuários.

//como declarar uma variável em JS?

//estrutura de declaração:
//tipo da variável + nome da variável + valor da variável

//tipos de variáveis em JS:
//var - forma mais antiga de declarar variável
//let - forma mais nova de declarar variável (recomendada). ela pode ser reatribuída. exemplo na linha 24
//const - forma de declarar variável que não pode ser alterada (constante)

let idade = 18;
console.log(idade);

idade = 19; //alterando o valor da variável
console.log(idade);

// let é uma variável que pode ser reatribuida

let nome = "Marina"; 
console.log(nome);
//criar com nomeclatura que faça sentido com o meu código. senao acabou

// let nome = "João"; //erro! não pode declarar a mesma variável duas vezes com let. cannot redeclare block-scoped variable 'nome'


//const - variável que não pode ser reatribuída. o valor nao pode ser alterado
const sobrenome = "Silva";
console.log(sobrenome);

//sobrenome = "Souza"; //erro! não pode reatribuir valor a uma variável const


const cpf = 12345678900;
console.log(cpf);

const data = "setembro/2023";
console.log(data);
//erro! não pode declarar a mesma variável duas vezes com const. cannot redeclare block-scoped variable 'data'

let quantidadeDeBlusas = 10;

let n1 = 1;
let n2 = 3;

console.log(n1 + n2); //soma

//reatribuição de variáveis

n2 = "3"; //string
// console.log(n1 + n2); //concatenação

console.log(typeof n2); //verificar o tipo da variável

