//CodigoCarro


let yCarros = [40,95,150,210,265,320]
let xCarro = [600,600,600,  600,600,600]
let velocidadeCarro = [2,3,2.5,2,4,2.5]
let comprimentoCarro = 50
let alturaCarro = 40
function movimentaCarro(){ 
  xCarro[0] -=velocidadeCarro[0];  
  xCarro[1] -= velocidadeCarro[1]
  xCarro[2]-= velocidadeCarro[2]
  xCarro[3] -= velocidadeCarro[3]
  xCarro[4] -= velocidadeCarro[4]
  xCarro[5] -= velocidadeCarro[5]
}
function mostraCarro(){
  for(let i= 0; i<imagemCarro.length; i++){
   image(imagemCarro[i],xCarro[i], yCarros[i], comprimentoCarro, alturaCarro )

}
}

function voltaPosicaoInicialCarro(){
  for(let i=0; i<imagemCarro.length; i++){
    if(passouaTela(xCarro[i])){
    xCarro[i] =600    
  }
  }
}
function passouaTela(xCarro){
  return xCarro<-50
}



