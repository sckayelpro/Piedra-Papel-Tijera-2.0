//variables del modo de juego
const bestOfOne = document.querySelector("#bestOfOne");
const bestOfThree = document.querySelector("#bestOfThree");
const bestOfFive = document.querySelector("#bestOfFive");
const bestOfSeven = document.querySelector("#bestOfSeven");
const modoSeleccionadoVar = document.querySelector("#modo-seleccionado");
//variables del jugador 1
const opcPiedra1 = document.querySelector("#piedra-1");
const opcPapel1 = document.querySelector("#papel-1");
const opcTijera1 = document.querySelector("#tijera-1");
const seleccion1 = document.querySelector("#accion-seleccionada-1");
//variables del jugador 2
const opcPiedra2 = document.querySelector("#piedra-2");
const opcPapel2 = document.querySelector("#papel-2");
const opcTijera2 = document.querySelector("#tijera-2");
const seleccion2 = document.querySelector("#accion-seleccionada-2");
//variables contador de score
var score1 = 0;
var score2 = 0;
//variable contador de rondas
var rondas = 0;
//variable score visible
var scoreJ1=document.querySelector("#score-1");
var scoreJ2=document.querySelector("#score-2")

bestOfOne.addEventListener("click", modoSeleccionado);
bestOfThree.addEventListener("click", modoSeleccionado);
bestOfFive.addEventListener("click", modoSeleccionado);
bestOfSeven.addEventListener("click", modoSeleccionado);

function modoSeleccionado() {
  modoSeleccionadoVar.id = this.id;
  switch (modoSeleccionadoVar.id) {
    case "bestOfOne":
      alert("GANA EL MEJOR DE 1 JUEGO");
      rondas = 1;
      opcPiedra1.addEventListener("click", opcSeleccionada1);
      opcPapel1.addEventListener("click", opcSeleccionada1);
      opcTijera1.addEventListener("click", opcSeleccionada1);

      opcPiedra2.addEventListener("click", opcSeleccionada2);
      opcPapel2.addEventListener("click", opcSeleccionada2);
      opcTijera2.addEventListener("click", opcSeleccionada2);
      break;
    case "bestOfThree":
      alert("GANA EL MEJOR DE 3 JUEGOS");
      rondas = 2;
      opcPiedra1.addEventListener("click", opcSeleccionada1);
      opcPapel1.addEventListener("click", opcSeleccionada1);
      opcTijera1.addEventListener("click", opcSeleccionada1);

      opcPiedra2.addEventListener("click", opcSeleccionada2);
      opcPapel2.addEventListener("click", opcSeleccionada2);
      opcTijera2.addEventListener("click", opcSeleccionada2);
      break;
    case "bestOfFive":
      alert("GANA EL MEJOR DE 5 JUEGOS");
      rondas = 3;
      opcPiedra1.addEventListener("click", opcSeleccionada1);
      opcPapel1.addEventListener("click", opcSeleccionada1);
      opcTijera1.addEventListener("click", opcSeleccionada1);

      opcPiedra2.addEventListener("click", opcSeleccionada2);
      opcPapel2.addEventListener("click", opcSeleccionada2);
      opcTijera2.addEventListener("click", opcSeleccionada2);
      break;
    case "bestOfSeven":
      alert("GANA EL MEJOR DE 7 JUEGOS");
      rondas = 4;
      opcPiedra1.addEventListener("click", opcSeleccionada1);
      opcPapel1.addEventListener("click", opcSeleccionada1);
      opcTijera1.addEventListener("click", opcSeleccionada1);

      opcPiedra2.addEventListener("click", opcSeleccionada2);
      opcPapel2.addEventListener("click", opcSeleccionada2);
      opcTijera2.addEventListener("click", opcSeleccionada2);
      break;
  }
}

function opcSeleccionada1() {
  seleccion1.style.visibility="hidden";
  seleccion2.style.visibility="hidden";
  seleccion1.src = this.src;
  seleccion1.className = this.classList.item(1);
  jugador1 = seleccion1.className;
}
function opcSeleccionada2() {
  seleccion2.src = this.src;
  seleccion2.className = this.classList.item(1);
  jugador2 = seleccion2.className;
  switch (jugador1 + "|" + jugador2) {
    case "piedra|papel":
      score2++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    case "piedra|tijera":
      score1++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    case "papel|piedra":
      score1++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    case "papel|tijera":
      score2++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    case "tijera|piedra":
      score2++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    case "tijera|papel":
      score1++;
      scoreJ1.textContent=score1;
      scoreJ2.textContent=score2;
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
      if (score1 === rondas || score2 === rondas) {
        if (score1 > score2) {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        } else {
          setTimeout(
            () => alert(`Gana el jugador 1 por ${score1} a ${score2}`),
            500
          );
        }
        setTimeout(() => window.location.reload(), 2000);
      }
      break;
    default:
      seleccion1.style.visibility="visible";
      seleccion2.style.visibility="visible";
  }
}
