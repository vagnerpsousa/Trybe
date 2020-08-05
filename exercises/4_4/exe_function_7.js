function verificaFimPalavra(word, end){
    
    for(let index = 1; index <= end.length; index += 1){
        if(word[word.length - index] !== end[end.length - index]){
            return false;
        }
    }
    return true;
}

let word = 'trybe';
let end = 'be';

console.log(verificaFimPalavra(word, end));