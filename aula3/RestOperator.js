//Rest Operator 

//forma antes do ES6
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++ ) {
        value += arguments[i];
    }
    return value;
}


//console.log(sum(5,2,6,9,50,6));


//Com o ES6- operador Rest Operator -escreve com ... dentro da lista de argumentos, na frente defini um valor para a variavel 
// O prototype é um array, então traz os métodos para manipular 

function som(...args) {
    return args.reduce((acc, value) => acc +value, 0); 
}

//console.log(som(5,2,9,10,2,3,6)); 

//Com arrowfunction, a lista arguments é inexistente, devendo usar o rest operator
//posso usar para pegar argumentos restantes, posso definir dois argumentos, e o restante pega no array 

const sum1 = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(sum1(5,2,6,9,20)); 