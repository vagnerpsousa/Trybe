//Primeira solução
let n = 5;
let simbolo = '*';
let agrupador= '';

for (let index = 0; index < n; index+=1) {
  agrupador += simbolo;
  if( index === 0){
      console.log(agrupador);
  }else
  if( index === 1){
      console.log(agrupador);
  }else
  if( index === 2){
      console.log(agrupador);
  }else
  if( index === 3){
      console.log(agrupador);
  }else{
      console.log(agrupador);
  }
}

//segunda solução
agrupador = '*';
console.log('');
for(index = 0; index < n; index +=1){
console.log(agrupador);
agrupador += '*';
}