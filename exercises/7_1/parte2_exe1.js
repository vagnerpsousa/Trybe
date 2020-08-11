let fat = num => {
    let fat = num;
    for(let i = 1; i < num; i += 1) {
    fat *= i;
    }
    return fat
}

console.log(`Fatorial: ${fat(5)}.`);

let fatRec = number => number > 1 ? number * fatRec(number - 1) : 1;

console.log(`fatorial Recursiva: ${fatRec(5)}`);

