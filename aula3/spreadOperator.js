// Spread Operator 

// pega todos os itens do array e transforma em parâmetros para a segunda função 
// quebra os itens de algum lugar e passa para outro 

const multi = (...args) => args.reduce((acc, value) => acc * value, 1); 

const sum = (...rest) => {
    return multi(...rest); 
};

//console.log(sum(5,2,3,6,5)); 

// pode ser usado em strings, arrays e objetos para construir outros objetos literais e iteráveis 

//string

const str = 'Estou tentando aprender'; 

function logArgs(...args) {
    console.log(args); 
}

//logArgs(...str); 

//Array
const arr = [1,2,3,5]; 

function logArr() {
    console.log(arguments);//mesmo funcionamento, recebe uma lista 
}

logArgs(...arr); 

// Pode ser usado para construir um array
const arr1 = [1,2,3];

const arr2 = [...arr1, 4,5,6]; //vai transformar os intens do primeiro em itens dentro do segundo 


//Objetos literais, só pode ser usado para construir novos objetos, não são iteraveis 

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'Olá'
}
// a ordem do spread é importante para determinar qual propriedade vai prevalecer 
const objeMerged = {
    ...obj,
    ...obj2
};//os atributos do obj2 vai prevalecer por causa de ordem 

const objt = {
    test: 123
};

const objt2 = obj;

objt2 = 456; // vai refletir no primeiro objeto 