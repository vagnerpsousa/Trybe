const changeX = name => {
    let text = 'Trybe x aqui!'
    let letters = text.split('');
    let newText = '';
    for(let i = 0; i < letters.length; i +=1) {
        if (letters[i] === 'x') {
            newText += name;
        } else {
            newText += letters[i];
        }
    }
    // let neWText = text.replace('x', string);
    return newText;
}

const arraySkills = ['datilografia', 'café', 'html', 'css', 'javaScript'];

const concatText = changeX => {
    let newString = `${changeX}
    teste`;
    console.log('teste');
    console.log(newString);
}


concatText('Vagner');