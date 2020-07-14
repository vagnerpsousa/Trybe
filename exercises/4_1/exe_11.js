let salBruto = 3000;
let salBase = 0;
let salLiquido = 0;
if(salBruto <= 1556.94){
    salBase = salBruto * 0.92;
}else 
if(salBruto >= 1556.95 & salBruto <= 2594.92){
    salBase = salBruto * 0.91;
}else
if(salBruto >= 2594.93 & salBruto <= 5189.82){
    salBase = salBruto * 0.89;
}else{
    salBase = salBruto - 570.88;
}

if(salBase >= 1903.99 & salBase <= 2826.65){
    salLiquido = salBase -((salBase * 0.075) - 142.80);
}else
if(salBase >= 2826.66 & salBase <= 3751.05){
    salLiquido = salBase -((salBase * 0.15) - 354.80);
}else
if(salBase >= 3751.05 & salBase <= 4664.68){
    salLiquido = salBase - ((salBase * 0.225) - 636.13);
}else{
    salLiquido = salBase - ((salBase * 0.275) - 869.36);
}
console.log('Salario Liquido é: ' + salLiquido);