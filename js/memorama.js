let cartas = document.getElementsByTagName("img"); // Selecciona todas las etiquetas <img> (cartas)
let puntos = 0; // Inicializa la variable para contar los puntos

// Asigna la función `funcionCarta` al evento `onclick` del cuerpo del documento
document.body.onclick = funcionCarta;

function funcionCarta() {
  // Añade el evento `click` a cada carta, asociando la función `voltear`
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener("click", voltear);
  }
}

function voltear() {
  // Obtiene todas las cartas por clase
  let heart = document.getElementsByClassName("heart");
  let diamond = document.getElementsByClassName("diamond");
  let spades = document.getElementsByClassName("spades");
  let clubs = document.getElementsByClassName("clubs");

  // Recorre cada conjunto de cartas y compara si la carta actual pertenece a algún conjunto
  for (let x = 0; x < heart.length; x++) {
    if (this == heart[x]) {
      corazon = "corazon";
      this.src = "../assets/memorama/img/heart.png"; // Cambia la imagen para mostrar el corazón
      validarParejas(this, heart, corazon); // Valida si se ha formado una pareja
    }
    if (this == diamond[x]) {
      diamante = "diamante";
      this.src = "../assets/memorama/img/diamond.png"; // Cambia la imagen para mostrar el diamante
      validarParejas(this, diamond, diamante); // Valida si se ha formado una pareja
    }
    if (this == spades[x]) {
      pica = "pica";
      this.src = "../assets/memorama/img/spades.png"; // Cambia la imagen para mostrar la pica
      validarParejas(this, spades, pica); // Valida si se ha formado una pareja
    }
    if (this == clubs[x]) {
      trebol = "trebol";
      this.src = "../assets/memorama/img/clubs.png"; // Cambia la imagen para mostrar el trébol
      validarParejas(this, clubs, trebol); // Valida si se ha formado una pareja
    }
  }
}

function validarParejas(esto, palo, clase) {
  // Añade la clase correspondiente a la carta seleccionada para identificar su tipo
  if (esto === palo[0]) {
    esto.classList.add(clase);
  }
  if (esto === palo[1]) {
    esto.classList.add(clase);
  }

  // Verifica si ambas cartas del mismo tipo están visibles
  if (palo[0].matches("." + clase) && palo[1].matches("." + clase)) {
    alert("¡¡Pareja!!");
    palo[0].style.display = "none"; // Oculta la primera carta de la pareja
    palo[1].style.display = "none"; // Oculta la segunda carta de la pareja
    finPartida(); // Verifica si se ha completado el juego
  }
}

function finPartida() {
  puntos++; // Incrementa los puntos por cada pareja encontrada
  if (puntos === 4) {
    // Verifica si se han encontrado todas las parejas (asumiendo 4 parejas)
    alert("¡Enhorabuena, has ganado!");
  }
}
