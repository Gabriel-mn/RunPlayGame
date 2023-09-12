//CodigoAtor

let yAtor = 366;
let xAtor = 100;
let colisao = false
let comprimentoAtor = 30
let meusPontos = 0
function mostraAtor(){
    image(imagemAtor,xAtor, yAtor, comprimentoAtor,30 )

}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= 2
     }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 2  
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 2  
  }

}

function verificaColisao(){
  
  for(let i = 0; i<imagemCarro.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, comprimentoAtor)
    if(colisao){
       somDaColisao.play();
      voltaAtorParaPosicaoInicial();
     if (pontosMaiorQueZero()){
        meusPontos = 0;
    }
    }
  }
  
}

function voltaAtorParaPosicaoInicial(){
  
  yAtor = 366;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}