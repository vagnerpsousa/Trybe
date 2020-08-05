function maiorValor(num){
    let indexMaior = 0;
    for(let index in num){
        if(num[index] > num[indexMaior]){
        indexMaior = index;
        }
    }
    return indexMaior;
}

let num = [2, 3, 6, 7, 10, 1];
console.log('O índice do maior valor do array é: ' + maiorValor(num));