let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2
let velocidadexBolinha = 5
let velocidadeyBolinha = 5
let xRaquete = 10
let yRaquete = 200
let comprimentoRaquete = 20
let larguraRaquete = 100
let xraqueteoponente = 570
let yraqueteoponente = 200
let comprimentoraqueteoponente = 100
let larguraraqueteoponente = 20
let meuspontos = 0
let pontooponente = 0


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
   colisaoBorda ()
  movimentoBolinha ()
  mostrarBolinha()
 mostrarRaquete()
 movimentominhaRaquete()  
  verificaColisaoRaquete ()
 mostrarraqueteoponente ()
 movimentoraqueteoponente ()
verificaColisaoraqueteoponente ()
  placar ()
  marcarponto ()
 BolinhaNaoFicaPresa()
 


} function mostrarBolinha() {
   circle (xBolinha, yBolinha, diametro)
 }

function movimentoBolinha () {
   xBolinha +=  velocidadexBolinha
  yBolinha +=  velocidadeyBolinha
}

function colisaoBorda () {
   if (yBolinha > height || yBolinha < 0) {
    velocidadeyBolinha *= -1
  }
   if (xBolinha > width || xBolinha < 0) {
     velocidadexBolinha *= -1
   }
}
    function mostrarRaquete() {
     rect (xRaquete, yRaquete, comprimentoRaquete, larguraRaquete)
 
   
   }
 
  function movimentominhaRaquete () {
    if (keyIsDown (87)) {
 yRaquete -= 10
  }
 
    if (keyIsDown (83)){
 yRaquete += 10
  }
}
 
function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yBolinha + larguraRaquete && yBolinha + raio > yRaquete ) {
    velocidadexBolinha *= -1
     }
}
 function mostrarraqueteoponente () {
   rect (xraqueteoponente, yraqueteoponente, larguraraqueteoponente, comprimentoraqueteoponente)
 }

 function movimentoraqueteoponente () {
    if (keyIsDown (UP_ARROW)) {
 yraqueteoponente -= 10
  }
 
    if (keyIsDown (DOWN_ARROW)){
 yraqueteoponente += 10
  }
}

function verificaColisaoraqueteoponente () {
  if (xBolinha - raio > xraqueteoponente - larguraraqueteoponente && yBolinha - raio < yBolinha + comprimentoraqueteoponente && yBolinha + raio > yraqueteoponente ) {
    velocidadexBolinha *= -1
   }
}

function placar () {
  textAlign (CENTER)
 textSize (30)
 fill (255)
  text ( meuspontos, 250, 35)
 text (pontooponente, 350, 35)

}
function marcarponto () {
  if (xBolinha > 600) {
    meuspontos += 1
  }
if (xBolinha < 0) {
  pontooponente += 1
}
}

function BolinhaNaoFicaPresa(){
    if (xBolinha < 0){
    xBolinha = 10
    }
 if (xBolinha - raio > 599)
 xBolinha =577
}
