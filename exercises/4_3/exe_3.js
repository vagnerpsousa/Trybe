let n = 6;
let agrupador = '';
let j = n-1;
for (let a = 0; a < n; a +=1){
    agrupador = '';
    for(let b = 0; b < n; b +=1){
        if(b < j){
            agrupador += ' ';
        }else{
            agrupador += '*';
        }
    }
    j -= 1;
    console.log(agrupador);
}