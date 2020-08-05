function verificaPalindrome(word){
    let wordAux = '';
    for(let i = (word.length -1); i >= 0; i -=1){
        wordAux += word[i];
    }
    if(word === wordAux){
        return true
    }else{
        return false
    }
}

let word = 'aabbaag';
if(verificaPalindrome(word)){
    console.log('É um palíndromo!');
}else{
    console.log('Não é um palíndromo!');
}

// outra forma de fazer


function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  let arraypalavra = ('arara').split("");
  console.log(arraypalavra);
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false