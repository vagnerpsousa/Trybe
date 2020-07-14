let custProduto = 30;
let valorVenda = 50;
let lucro = ((valorVenda - custProduto) * 0.80) * 1000

if(custProduto < 0 || valorVenda < 0){
    console.log('Valores inválidos!');
}else{
    console.log('Lucro:' + lucro);
}
