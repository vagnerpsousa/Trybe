function somaNumero(num){
    let somatorio = 0;
    
    for(let index = 1; index <= num; index +=1){
        somatorio += index;
    }
    return somatorio;
}

let num = 5;
console.log('Somatório de todos os números de 1 a ' + num + ' é: ' + somaNumero(num));

    

