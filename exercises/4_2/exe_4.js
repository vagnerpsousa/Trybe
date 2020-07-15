let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0;

for(let i = 0; i < numbers.length; i++){
    somatorio += numbers[i];
}
console.log('Somatório: ' + somatorio);
let media = somatorio / numbers.length;
console.log('Média aritimética: ' + media);
if(media > 20){
    console.log('Média superior a 20!');
}else{
    console.log('Média inferior a 20!');
}