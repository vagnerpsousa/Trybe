let n = 15;
let centro = (n + 1) / 2;
let lDireito = centro;
let lEsquerdo = centro;
let agrupador = '';

for(let a = 0; a <= centro; a += 1){
    for(let b = 1; b <= n ; b += 1){
        if(a === centro -1){
            agrupador += '*';
        }else
        if(b === lEsquerdo || b === lDireito){
            agrupador += '*';
        }else {
            agrupador += ' ';
        }
    }
    console.log(agrupador);
    agrupador = '';
    lDireito += 1;
    lEsquerdo -= 1;
}

