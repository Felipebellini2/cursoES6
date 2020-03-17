//symbols -- é um identificador único e não pode ser adivinhado nem descrito 
// adicionar metapropriedades a objetos 

 const sym = Symbol('hello'); // esse valor está relacionado somente para debug

 // adicionar propriedades , como forma de ser acionada de forma intencional
 //só é acessível por quem tiver o symbol ou utilizar o método Object.getOwnPropertySymbols 

const obj = {
    [sym]: 'Olá' 
};

console.log(obj); 

// Well know symbols
//Iterator -- adicionar metapropriedades 
//Split
//Toprimitive

const arr = [,2,3,4,5];

const it = arr[Symbol.iterator]();// se torna uma interface para consumir passo a passo uma lista ou estrutura de dados 

console.log(it.next()); 

// Com ES6 posso usar o for of que ele vai fazer essa interação com a propriedade iteradora que o array já possui

for (let value of arr) {
    //console.log(value); 
}

//função iteradora em um objeto 

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){      
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

//agora pode usar o for of
for (let value of obj) {
    //console.log(value); 
}

//pode fazer um spread para construir um novo array
const arr2 = [...obj]; 

//Generators -- são funções com pausa, que despausam e retornam valores atavés da interface de iteração 

function* hello() {
    console.log('Olá');
    yield 1; 
    console.log('Felipe');
    const value = yield 2;
    console.log(value);
}

const it = hello();

console.log(it.next()); 
console.log(it.next()); 
console.log(it.next('Sidney')); 

//posso usar com um lop infinito mas ir controlando ele

function* numbers() {
    let number = 0;
    while(true){
        yield number;
        i++;
    }
}

const it = numbers();

console.log(it.next()); 

//Interface de iteração de objetos 

const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){      
     for (var i = 0; i < this.values.length; i++) {
         yield this.values[i]; 
     }
    }
};

for (let value of obj) {
    console.log(value); 
}
