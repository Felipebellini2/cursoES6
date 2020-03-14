const pets = [
    {
        name: 'Nina',
        type: 'Dog',
        age: 2,
        peso: 5
    },
    {
    name: 'Leci',
    type: 'Cat',
    age: 18,
    peso: 10
    },
    {
        type: 'cat',
        name: 'marron',
        age: 6,
        peso: 8
    },
    {
        type: 'fish',
        name: 'pull',
        age: 1,
        peso: 9
    }
]

const menor = (numero) => {
    return numero < 5
}

const newPets = pets.filter(({age}) => menor(age))// filtra alguns elementos de acordo com um teste lógico 


const petName = pets.map((pet) => {
    return pet.name
});// vai varrer todo o array e vai retornar um novo, com o mesmo tanto de elementos e nesse caso, com o elemento name 

const Foreach = []; 
pets.forEach((pet) => {
    forEach.push(pet.name)
});
/* Também varre o array, mas não retorna um novo array 
 para poder ter os valores, cria um array e depois da um push para inserir esses valores nele */


const totalpe = pets.reduce((total, pet) => {
    return total + pet.peso
}, 0)
/* recebe duas variáveis, a primeira é o valor que irá começar, a segunda é item que vai iterar
nesse caso começa com 0 e soma o peso de cada elemento a cada nova passagem*/

// encadeando todas as funções 
const totalPesoDogs = pets.filter((pet) => {
    return pet.type === 'dog'
})
.reduce((total, pet) => {
    return total + pet.peso
}, 0);

console.log(totalPesoDogs);