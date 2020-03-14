// criar uma novo array a partir de um número de parâmetros informados 
//array.of -- função of 

const persons = Array.of('Felipe','Sidney','Mariana','Lariane','Nina'); 

//console.log(persons); 

/*Outra forma é chamando a função array, cria de acordo com os parâmetros passados
 Se eu passar apenas com uma parêmetro: array(3), ele vai criar um array com 3 posições*/

 const arr = Array(3);
 console.log(arr); 

 //Se passar mais de um parâmetro, ele vai criar um array semelhante com o array of
const arr2 = Array('Felipe','Sidney');
console.log(arr2);

/* A função Array.from cria uma nova instância de array a partir de um parâmetro
array-like(pode ser um node list, busca elementos de e transforma em um array ) ou
 iterable object (set map)*/
 const divs = document.querySelectorAll('div');
 const arr3 = Array.from(divs);
 console.log(arr3);