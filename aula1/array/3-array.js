// --- push pode adicionar um ou mais elementos no final de um array e rotorna o tamanho do novo array

const frutas = ['melancia','banana','maçã']; 
console.log(frutas);

const f2 = frutas.push('laranja');
console.log(f2); // o retorno vai ser o tamanho 

//------pop remove o último elemento de um array e retorna o elemento removido 

const remove = frutas.pop(); 
console.log(remove);//vai mostrar o elemento removido

console.log(frutas); //array sem o elemento 


//----unshift adiciona um ou mais elementos no início do array e retorna o tamanho do novo array 

const ini = frutas.unshift('abacate','melão');
//console.log(ini);//vai retornar o tamanho

console.log(frutas); // vai retornar o array com as alterações 

//---- shift remove o primeiro elemento de um array e retorna o elemento removido

const reini = frutas.shift(); 
console.log(reini); // retorna o elemento removido

console.log(frutas); 

// ----- concat concatena um ou mais arrays retornando um novo array, é imutável, retorna um novo array 

const sucos = ['fresco','natural','artificial']; 
console.log(sucos);

const lista = frutas.concat(sucos); //junta as duas e armazena em lista 

console.log(lista); 

// --- slice, retorna um novo array, fatiando ele de acordo com o início e o fim informado

const t = lista.slice(2, 5); /* -- vai fatiar do indice 2 ao 4, mostra o valor do 2
mas não mostra o valor do indice 5*/
console.log(t); 

// ---- splice, consegue alterar um array adicionando novos elementos enquanto remove elementos antigos 

const r = lista.splice(3); // vai remover até a posição 3, altera o array sem criar outro 
console.log(r); 

// consigo adicionar em um determinado lugar do array
 lista.splice(0, 0, 'leite'); // o primeiro é na onde eu vou mexer no array, o segundo quantos eu vou remover 
console.log(lista); 