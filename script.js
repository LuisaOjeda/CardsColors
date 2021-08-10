const color = document.getElementById("input-color");
const cardMenu = document.getElementById("card-menu");
const botonDos = document.getElementById("boton-dos");
const botonTres = document.getElementById("boton-tres");
const cardPadre = document.getElementById("card-padre");
let cont = 1;

color.addEventListener("change", cardMenuu)
botonDos.addEventListener("click", cardBorderAumento)
botonTres.addEventListener("click", cardBorderDismi)



function cardMenuu() {
    console.log(color.value);
    cardMenu.style.backgroundColor = color.value;
}


function cardBorderAumento() {
    cont += 5;
    console.log(cont);
    cardPadre.style.borderRadius = cont + "px";
    cardMenu.style.borderTopLeftRadius = cont + "px";
    cardMenu.style.borderTopRightRadius = cont + "px";
}

function cardBorderDismi() {
    cont -= 5;
    console.log(cont);
    cardPadre.style.borderRadius = cont + "px";
    cardMenu.style.borderTopLeftRadius = cont + "px";
    cardMenu.style.borderTopRightRadius = cont + "px";
}



/* boton2.addEventListener("click", x) //esta es para el boton

let cont = 2; // una inicializacion en 2
function x() {
    cont += 5; // aumento de 5 en 5
    console.log(cont); // e imprime
} */