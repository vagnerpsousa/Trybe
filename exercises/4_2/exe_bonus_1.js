let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for(let a = 1; a < numbers.length; a += 1){
  for(let b = 0; b < a; b +=1){
    if(numbers[a] < numbers[b]){
      let num = numbers[a];
      numbers[a] = numbers[b];
      numbers[b] = num;
    }
  }
}
console.log(numbers);
