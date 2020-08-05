function menorValor(num){
    let indexMenor = 0;
    for(let index in num){
        if(num[index] < num[indexMenor]){
        indexMenor = index;
        }
    }
    return indexMenor;
}

let num = [2, 4, 6, 7, 10, 0, -3];
console.log('O índice do menor valor do array é: ' + menorValor(num));