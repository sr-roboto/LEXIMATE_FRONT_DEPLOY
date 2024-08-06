var cartas = document.getElementsByTagName("img");
var puntos = 0;

document.body.onclick = funcionCarta;

function funcionCarta(){
    for(var i = 0; i < cartas.length; i++){
        cartas[i].addEventListener("click", voltear);
    }
}

function voltear(){

var heart = document.getElementsByClassName("heart");
var diamond = document.getElementsByClassName("diamond");
var spades = document.getElementsByClassName("spades");
var clubs = document.getElementsByClassName("clubs");

     //Si las clases coinciden, voltea cada carta
    for(var x = 0; x < heart.length; x++){
        if(this == heart[x]){
            corazon = "corazon";
            this.src="../assets/memorama/img/heart.png";
            validarParejas(this, heart, corazon);
        }
        if(this == diamond[x]){
            diamante = "diamante";
            this.src="../assets/memorama/img/diamond.png";
            validarParejas(this, diamond, diamante);
        }
        if(this == spades[x]){
            pica = "pica";
            this.src="../assets/memorama/img/spades.png";
            validarParejas(this, spades, pica);
        }
        if(this == clubs[x]){
            trebol = "trebol";
            this.src="../assets/memorama/img/clubs.png";  
            validarParejas(this, clubs, trebol); 
        }
    }
} 

function validarParejas(esto, palo, clase){
    if(esto === palo[0]){
        esto.classList.add(clase);
    } 
    if(esto === palo[1]){
       esto.classList.add(clase);
    }

    //Verifica que se ha revelado la pareja
    if(palo[0].matches("." + clase) && palo[1].matches("." + clase)){
        alert("¡¡Pareja!!");
        palo[0].style.display="none";
        palo[1].style.display="none";
        finPartida();
    }
    
}

function finPartida(){
    puntos++;
    if(puntos === 4){
        alert("¡Enhorabuena, has ganado!");
    }
}

// /**
// *Array asociativo con cartas. El atributo dibujo es indice
// *
// */
// const arrayCartas = [
//     {
//         dibujo: 'Daredevil',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/daredevil.jpg'
//     },
//     {
//         dibujo: 'Spiderman',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/spiderman.jpg'
//     },
//     {
//         dibujo: 'Hulk',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/hulk.png'
//     },
//     {
//         dibujo: 'Thor',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/thor.jpg'
//     },
//     {
//         dibujo: 'Thor',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/thor.jpg'
//     }
//     ,
//     {
//         dibujo: 'Spiderman',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/spiderman.jpg'
//     },
//     {
//         dibujo: 'Hulk',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/hulk.png'
//     },
//     {
//         dibujo: 'Daredevil',
//         imagen: '/LEXIMATE-FRONT/assets/memorama/img/daredevil.jpg'
//     }
// ]

// //variables globales
// //Para manejar cuantas tengo seleccionadas en el momento
// var seleccionadas = 0;
// var cartaAnterior = -1;
// var movimientos = 0;
// var aciertos = 0;


// /**
// *Randomicamante asigna posiciones a las cartas
// *
// *Dentro del mismo array declarado anteriormente de le asignan posiciones 
// *randomica a las mismas (que luego estarán representadas por los números  de celdas 
// *declarados en HTML).
// *
// *Le asigna a cada celda en la tabla HTML un estilo que tiene como imagen de fondo el reverso de 
// *la carta - Ver en estilos
// */
// function mezclarCartas(){
//      arrayCartas.sort(() => Math.random() - 0.5);
//      //console.log(arrayCartas);
//      for (var i =0; i < arrayCartas.length ;i++) {
//          document.getElementById(i).setAttribute("class", "carta cartaReverso");
//      }
// }


// /**
// *Muestra la imagen de la carta
// *
// *Cuando el usuario selecciona la carta (celda en la tabla HTML), cambiamos el estilo de la 
// *celda poniendo como imagen de fondo, la correspondiente del array de cartas
// *
// */
// function mostrarCarta(i){
//     document.getElementById(i).style.backgroundImage = "url('"+arrayCartas[i].imagen+"')";

// }


// /**
// *La carta se oculta mostrando el reverso
// *
// *Cuando no hay coincidencia, las cartas vuelvne a mostrar el reverso
// *Se le asigna el fondo a la celda de el reverso
// *
// */
// function ocultarCarta(i){
//     document.getElementById(i).style.backgroundImage = "url('/LEXIMATE-FRONT/assets/memorama/img/cartaReverso.png')";
// }


// /**
// *Selecciona carta y analiza jugada
// *
// *Cuando el usuario selecciona una carta, debera dar veulta otro. El algoritmo verifica cual es, 
// * y a partir de eso toma la desicion de si es un "MATCH" o al medio segundo las vuelve 
// *a su sposicion original
// *
// */
// function elegirCarta(i){
//     mostrarCarta(i);
//     if (seleccionadas == 0){
//         cartaAnterior = i;
//         seleccionadas = 1;	
//     }else{
//         if(arrayCartas[cartaAnterior].dibujo === arrayCartas[i].dibujo){
//             aciertos++;
//         }else{
//             setTimeout(() => {  ocultarCarta(cartaAnterior); ocultarCarta(i); }, 500);
//         }
//     seleccionadas = 0;
//     movimientos++;	
//     }
    
//     document.getElementById("movimientos").innerHTML = movimientos;

//     if (aciertos == 4){
//         document.getElementById("ganador").innerHTML = "GANASTE!!!!";
//     }

// }


