class Animal {
    constructor() {
        this.qtdpatas=0;
    }
    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdpatas = 4;
        this.morde = morde;
    }
    latir() {
        console.log('AU AU');
    }
}

const pug = new Cachorro(false);
const pitbul = new Cachorro(true); 