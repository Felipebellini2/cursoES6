//controle do que é privado e do que é público

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#this.name; 
    }
}

console.log(p);

p.getName();

p.name;

p.setName('felipe');
p.getName(); 
