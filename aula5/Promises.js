/* Promises -- é um objeto que é passado outra função pra ela
é uma função anônima que recebe dois parâmetros que são callbacks, resolve e o reject 
*/

const doSomethingPromise = () => new Promise ((resolve, reject) => {
    setTimeout(function(){
        //did something
        resolve('First data'); 
    }, 1000);
});

const otherSomethingPromise = () =>  new Promise((resolve, reject) => {
    setTimeout(function(){
        //did other thing
        resolve('Second data'); 
    }, 1000);
});

//excutar tudo ao mesmo tempo, em paralelo
Promise.all([doSomethingPromise(), otherSomethingPromise()]).then( data => {
    console.log(data);
});

/*doSomething.then(data => {
    console.log(data);
    return doSomethingPromise;
})
.then(data2 => console.log(data2))
.catch(error => console.log('erro', error)); */ 



// funções de callback -- executa algo após uma tarefa assincrona ter sido executada, antes do ES6
function doSomething () {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing() {
    setTimeout(function() {
        // did do other thing
        callback('second data');
    }, 1000);
}

//Quero executar as duas de forma sequencial sem utilizar promises

function doAll () {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
        
    try {       
        doOtherThing(function(data2) {
            var processedData2 = data2.split('');  

    try {       
        setTimeout(function() {
        console.log(processedData, processedData2); 
        }, 1000);
    } catch(err) {
        //erro
    }
            });
        } catch(err){
            //erro
            }
        });
    } catch(err) {
        //erro
    }
}

doAll();

