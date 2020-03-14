const element = ['mesa','sofá','cadeiras','computdor','cama','guardaroupas'];
console.log(element);
console.log('Tamanho antes da alteração: ',element.length);



const adele = element.push('geladeira','pia'); 
console.log(element); 

console.log('tamanho depois: ', adele);


// pop
const po = element.pop();
console.log(element);
console.log('elemento removido: ',po);
console.log('tamanho depois: ', element.length);

// unshift
const adi = element.unshift('pia', 'torneira'); 
console.log(element);
console.log('Tamanho depois:', adi);

// shift
const pri = element.shift();
console.log(element); 
console.log('elemento removido: ', pri);
console.log('Tamanho depois: ', element.length); 


// concat 
const mud = ['mudança','cidade','Blumenau']; 
console.log('Novo array --->'); 
console.log(mud); 

console.log('Array depois de concatenar --- >');

const li = mud.concat(element);
console.log(li); 

// slice
console.log('Fatiando o array,sem criar um novo array --->');

const s = li.slice(3,6);
console.log('Elementos que foram removidos:', s);
console.log('Array depois de fatiado: ', li); 

//splice 
console.log('Altarando sem retornar um novo array --->');
const ne = li.splice(2);
console.log('Novo array', li);

//splice
console.log('Array modificado em um lugar específico ---->');
const t = li.splice(0,0, 'caixa');
console.log(t); 
