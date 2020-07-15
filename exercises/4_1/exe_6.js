let dama = 'A dama pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
let torre = 'A torre move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
let bispo = 'O bispo move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
let cavalo = 'O cavalo É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.';
let peao = 'O peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. ';
let rei = 'O rei pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.';
let opcao = 'bispo';
switch (opcao) {
    case 'rei':
        console.log(rei);
        break;
    case 'dama':
        console.log(dama);
        break;
    case 'peao':
        console.log(peao);
        break;
    case 'cavalo':
        console.log(cavalo);
        break;
    case 'bispo':
        console.log(bispo);
        break;
    case 'torre':
        console.log(torre);
        break;

    default:
        console.log('Opção inválida!');
}