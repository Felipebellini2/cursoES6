// Objetos literais

var obj = {
    prop = 'Digital '
};

// Outra forma de escrever, referenciando uma vriável
var prop1 = 'Teste';

var obj2 = {
    prop1
}; 

//escrevendo com uma função
var obj3 = {
    sum: function sum(a, b) {
        return a + b;
    }
}; 

console.log(obj3.sum(5,6)); 

//mesma função de soma, omitindo a palavra function
var obj4 = {
    sum(a, b){
        return a + b;
    }
};

// outra forma, utilizando uma variavel como nome de uma propriedade
var propName = 'test';

var obj5 = {
    [propName + 'concact']: 'prop value'
};


