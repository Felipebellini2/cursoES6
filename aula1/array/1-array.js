const users = ['Felipe', 'Mariana', 'Sidney'];

const gender = {
    man: Symbol('M'),
    fem: Symbol('F')
}

const persons = [
    {
        name: 'Mari', 
        age: 28,
        gender: gender.fem
    },

    {
        name: 'Lucas',
        age: 50,
        gender: gender.man
    }, 
    {
        name: 'Larissa',
        age: 24,
        gender: gender.fem
    }
]; 

//retornar a quantidade de itens
console.log('Items: ', persons.length); 

//verificar se é um array
console.log('\nA variável é um array: ', Array.isArray(persons)); 

//Iterar itens, para cada item executa uma função
persons.forEach((persons, index, arr) => {
    console.log(`\nNome: ${persons.name} index: ${index}`, arr);
}); 

// essas funções não alteram o objeto de referência, elas retornam um novo

//filtrar um array
const mens = persons.filter(person => person.gender === gender.man);
console.log('\nNova lista apenas com os homens: ', mens); 

//retornar um novo array
const persoscourse = persons.map(person => {
    person.course = 'Introdução ao Javascript'; 
    return person
});

console.log('Array com a nova propriedade: ', persoscourse); 

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0); 

console.log('O valor das idades: ', totalAge); 