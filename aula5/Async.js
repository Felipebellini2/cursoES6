// ES7 Async /await -- espera que outras promises sejam resolvidas primeiro 

const timer = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('12345'); 
    }, 1000);
});


const simple = async () => {
    const data = await timer();
    return data;
}; // só colocar o async já transforma em uma promise 

simple().then(data => {
    console.log(data); 
})
.catch( err => {
    console.log(err); 
});