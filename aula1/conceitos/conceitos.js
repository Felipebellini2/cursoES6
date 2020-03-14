//prototype é uma variável que armazena as definições do objeto 
/* toda vez que cria uma variável, ela a referencia __proto__ que aponta para 
o prototype do tipo que foi criado. Esse tipo é chamado de constructor*/

/*Baseado em um constructor é criado um prototype e nessa variavel armazena a referência dela
por meio do __proto__*/

/* Quando chamo uma função com o operador NEW
1 - Um objeto novo é criado, herdando o foo.prototype
2 - A função construtor Foo é chamada com os argumentos especificados com o 'this' vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu return, senão, será retornado o objeto criado 
no passo 1 .*/


function Pessoa(name) {
    this.name = name; 
}

const p = new Pessoa('Felipe'); 
console.log(p); 

function Animal(qtdpatas) {
    this.qtdpatas = qtdpatas; 
    this.movimentar = function () {}
}

function Cachorro(morde) {
    Animal.call(this,4);

    this.morde = morde; 
    this.latir = function() {
        console.log('AU AU'); 
    }
}

const pug = new Cachorro(false);
const nina = new Cachorro(true);
console.log(pug);
console.log(nina); 

