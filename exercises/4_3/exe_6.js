n = 114;
cont = 0;

for(let i = 0; i < n; i += 1){
    if( n % i === 0){
        cont += 1;
    }
}
if(cont > 2){
    console.log('O número ' + n + ' não é primo!');
}else{
    console.log('O número ' + n + ' é primo!');
}