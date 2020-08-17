let biggerWord = phrase => {
    const arrayWord= phrase.split(' ');
    let size = 0
    let word = '';
    for(let i = 0; i < arrayWord.length; i += 1) {
        if (arrayWord[i].length > size) {
            size = arrayWord[i].length
            word = arrayWord[i];
        }
    }
    return word;
}
console.log(`Maior palavra: ${biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu")}`);

//Longestword com sort em uma linha.
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))