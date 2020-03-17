// Destructuring Assgnment 

var [apple2, banana2, laranja2,[tomate2]] = ['apple', 'banana', 'laranja',['tomate']]; 

console.log(tomate2); 


//objeto
var obj = {
    name: 'Felipe',
    props: {
        age: 25
    }
}; 

var {name:name2, props: {age:age2}} = obj; 
console.log(name2); 

// outro objeto 
var arr = [{name:'Felipe', type: 'M'}]; 

var [{name}] = arr; 
 
console.log(name);