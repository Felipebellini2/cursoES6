// Iterar elementos 

// -- foreach interar cada item dentro do array eu consigo fazer uma iteração 

const frutas = ['banana','melancia','goiaba'];

frutas.forEach(frutas => console.log(frutas)); 

frutas.forEach((frutas, index) => console.log(index, frutas));

//primeiro é o valor que estou lendo
//segunda é o index, a posição

// -- map itera e retorna um novo array, de mesmo tamanho, iterando cada item de um array 

frutas.map((frutas, index) => ${index} + ${frutas}); // retorna um novo array com item que é essa experessão 

// flat retorna um novo array com todos os elementos de um sub-array concatenados de forma recursica de acordo com a profundidade especificada

const arr = [,2,[3,4]];

arr.flat();// o retorno será [1,2,3,4]

// flatmap retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr2 = [1,2,4,5];
arr2.flatmap(value => [value * 2]); //retorno será [2,4,6,8,10]

arr2.flatmap(value => [[value * 2 ]]); //retorno [[2], [4], [6], [10]]

// keys retorna um array iterator que contém as chaves para cada elemento do array 
const iterator = arr.keys(); 

// values retorna um array interator e retorno os valores
const value = arr.values(); 

// entries retorna os pares chave/valor para cada elemento do array 
const value = arr.entries();

// find retorna um item que satifaz uma condição

coost ret = arr2.find(value => value > 2); // retorna os itens maior que 2 

// findindex, retorna o index do array que vai satisfazer a condição 

// filter retorna um novo array com todos os elementos que satisfazem a condição
arr.filter(value => value > 2); 

// indexof primeiro indice que um elemento pode ser encontrado em um arrar -- lastindex of -- último index 
arr.indexOf(3);//primeira ocorrência de 3 


//includes retorna um boolean, saber se um iten está em um array
arr.includes(1); 

// some verifica se um item do array satisfaz alguma condição
arr.some(value => value %2 === 0 ); 

