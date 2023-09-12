//CodigoImagens

let imagemDaEstrada;
let imagenAtor;
let imagemCarro
let imagemCarro2
let imagemCarro3

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  carro1 = loadImage("Imagens/carro-1.png");
  carro2 = loadImage("Imagens/carro-2.png");
  carro3 = loadImage("Imagens/carro-3.png");
  carro4 = loadImage("Imagens/carro-1.png");
  carro5 = loadImage("Imagens/carro-2.png");
  carro6 = loadImage("Imagens/carro-3.png");
  imagemCarro= [carro1,carro2,carro3,carro4,carro5,carro6]
  //Som do jogo
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}