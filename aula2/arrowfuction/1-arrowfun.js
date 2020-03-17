var sum = (a, b) => a + b; // se não tiver uma expressão ou uma função retornando algo, pode ocultar o return 
console.log(sum(5,16)); 

var sum = a => a + 5; // se tiver um argumento, posso omitir os ()


var obj = () => ({}); // precisa colocar as chaves dentro do parenteses, o return fica implicito 

console.log(obj());

// função construtora, vai gerar um objeto

function car () {
    this.foo = 'bar'; 
}

console.log(new Car()); // utilizando a palavra new, crio um objeto a partir da função construtora
// Isso não é possível com arrowfunction 


/* As funções clássicas tem a caracteristica do hosting, são movidos para o topo do código
pode invocar ela antes de definir ela no código, isso também não funciona com arrowfunc */ 


var obj = {
    showContext: function showContext() {
        this.log('teste');// --- vai referenciar esse contexto, referencia ao próprio objeto, por causa do contexto de invocação 
    
        setTimeout(() => {
            this.log('Depois de 1000ms');
        }, 1000);/* com arrowfunc tenho certeza que o this é o mesmo do contexto, porque ela tem um propriedade
        de ter o contexto igual ao código que envolve a ele, o this referencia ao contexto das chaves que envolve*/
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext(); 