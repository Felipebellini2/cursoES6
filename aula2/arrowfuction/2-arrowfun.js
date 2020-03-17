// default function arguments
function multi (a ,b = 1) {// consigo dar um valor padrão para o parâmetro, se nada for passado, será usado ele 
    return a * b;
}

function mul(a, b = a) { // posso referenciar outros parâmetros, posso diser que o b será igual ao a quando deixar de passar 
    return a + b;
}

// lazy evaluation
//Caraceterística que permite utilizar funções para definir valores de um argumento
// e a mesma só será invocada quando o argumento for indefinido
// número randomico toda vez que alguém deixar de passar um parâmetro


function randomNumber() {
    return Math.random() *10;//cada vez que é invocada, o número é diferente 
}

function multiply (a, b = randomNumber()) {
    return a * b; // quando deixar de passar um parâmetro, invoca outra função 
}

console.log(multiply()); 