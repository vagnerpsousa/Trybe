function maiorNome(nomes){
    let maior = nomes[0];
    for(let index in nomes){
        if(nomes[index].length > maior.length){
            maior = nomes[index];
        }
    }
    return maior;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log('O maior nome do array é : ' + maiorNome(nomes));