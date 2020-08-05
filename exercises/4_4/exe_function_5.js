function conteRepetido(n){
    let indexNumRepetido = n[0];
    let cont = 0;
    let record = 0;
    for(let index in n){
        for(let index1 in n){
            if(n[index] === n[index1]){
                cont += 1;

            }
        }
        if(cont > record){
            record = cont;
            indexNumRepetido = index;
        }
        cont = 0;
    }
    return n[indexNumRepetido];
}

let n = [2, 3, 2, 5, 8, 2, 3];
console.log('O inteiro que mais se repete no array é : ' + conteRepetido(n));