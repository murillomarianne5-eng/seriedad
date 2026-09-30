// ========================================
// BRAINROT BATTLE 🧠⚔️
// ========================================


// ========================================
// LISTA DE BRAINROTS
// ========================================

const brainrots = [
    {
        nombre: "Tralalero Tralala",
        imagen: "images/brainrot1.png",
        nivel: 95
    },
    {
        nombre: "Bombardiro Crocodilo",
        imagen: "images/brainrot2.png",
        nivel: 98
    },
    {
        nombre: "Tung Tung Tung Sahur",
        imagen: "images/brainrot3.png",
        nivel: 97
    },
    {
        nombre: "Brr Brr Patapim",
        imagen: "images/brainrot4.png",
        nivel: 90
    },
    {
        nombre: "Lirili Larila",
        imagen: "images/brainrot5.png",
        nivel: 88
    },
    {
        nombre: "Chimpanzini Bananini",
        imagen: "images/brainrot6.png",
        nivel: 93
    },
    {
        nombre: "Frigo Camelo",
        imagen: "images/brainrot7.png",
        nivel: 91
    },
    {
        nombre: "Cappuccino Assassino",
        imagen: "images/brainrot8.png",
        nivel: 96
    },
    {
        nombre: "Trippi Troppi",
        imagen: "images/brainrot9.png",
        nivel: 89
    },
    {
        nombre: "Bombombini Gusini",
        imagen: "images/brainrot10.png",
        nivel: 94
    },
    {
        nombre: "Ballerina Cappuccina",
        imagen: "images/brainrot11.png",
        nivel: 92
    },
    {
        nombre: "Boneca Ambalabu",
        imagen: "images/brainrot12.png",
        nivel: 87
    },
    {
        nombre: "La Vaca Saturno Saturnita",
        imagen: "images/brainrot13.png",
        nivel: 99
    },
    {
        nombre: "Glorbo Fruttodrillo",
        imagen: "images/brainrot14.png",
        nivel: 86
    },
    {
        nombre: "Frulli Frulla",
        imagen: "images/brainrot15.png",
        nivel: 90
    },
    {
        nombre: "Cocofanto Elefanto",
        imagen: "images/brainrot16.png",
        nivel: 93
    }
];


// ========================================
// VARIABLES DEL TORNEO
// ========================================

let participantes = [];

let siguienteRonda = [];

let brainrotActual1;

let brainrotActual2;

let indice = 0;

let rondaActual = 1;

let victorias = 0;


// ========================================
// ELEMENTOS DEL HTML
// ========================================

const inicio = document.getElementById("inicio");

const torneo = document.getElementById("torneo");

const ganador = document.getElementById("ganador");

const botonIniciar = document.getElementById("iniciar");

const botonElegir1 = document.getElementById("elegir1");

const botonElegir2 = document.getElementById("elegir2");

const botonReiniciar = document.getElementById("reiniciar");


// ========================================
// INICIAR TORNEO
// ========================================

botonIniciar.addEventListener("click", function () {

    iniciarTorneo();

});


// ========================================
// FUNCIÓN PARA INICIAR
// ========================================

function iniciarTorneo() {

    participantes = [...brainrots];

    siguienteRonda = [];

    indice = 0;

    rondaActual = 1;

    victorias = 0;

    inicio.classList.add("oculto");

    ganador.classList.add("oculto");

    torneo.classList.remove("oculto");

    mostrarBatalla();

}


// ========================================
// MOSTRAR BATALLA
// ========================================

function mostrarBatalla() {

    // Obtener los dos participantes
    brainrotActual1 = participantes[indice];

    brainrotActual2 = participantes[indice + 1];


    // Mostrar imágenes
    document.getElementById("imagen1").src =
        brainrotActual1.imagen;

    document.getElementById("imagen2").src =
        brainrotActual2.imagen;


    // Mostrar nombres
    document.getElementById("nombre1").textContent =
        brainrotActual1.nombre;

    document.getElementById("nombre2").textContent =
        brainrotActual2.nombre;


    // Mostrar niveles
    document.getElementById("nivel1").textContent =
        "🧠 Nivel de brainrot: " +
        brainrotActual1.nivel + "%";

    document.getElementById("nivel2").textContent =
        "🧠 Nivel de brainrot: " +
        brainrotActual2.nivel + "%";


    // Actualizar título
    document.getElementById("ronda").textContent =
        obtenerNombreRonda();


    // Actualizar contador
    const batallasRestantes =
        Math.ceil(
            (participantes.length - indice) / 2
        );

    document.getElementById("contador").textContent =
        batallasRestantes +
        " BATALLAS RESTANTES";

}


// ========================================
// NOMBRE DE LA RONDA
// ========================================

function obtenerNombreRonda() {

    if (rondaActual === 1) {
        return "ROUND 1 — OCTAVOS DE FINAL";
    }

    if (rondaActual === 2) {
        return "ROUND 2 — CUARTOS DE FINAL";
    }

    if (rondaActual === 3) {
        return "ROUND 3 — SEMIFINAL";
    }

    if (rondaActual === 4) {
        return "🔥 GRAN FINAL 🔥";
    }

}


// ========================================
// ELEGIR BRAINROT 1
// ========================================

botonElegir1.addEventListener("click", function () {

    elegirGanador(brainrotActual1);

});


// ========================================
// ELEGIR BRAINROT 2
// ========================================

botonElegir2.addEventListener("click", function () {

    elegirGanador(brainrotActual2);

});


// ========================================
// ELEGIR GANADOR
// ========================================

function elegirGanador(brainrotGanador) {

    // Guardar ganador
    siguienteRonda.push(brainrotGanador);

    victorias++;

    // Pasar a la siguiente batalla
    indice += 2;


    // ¿Terminó la ronda?
    if (indice >= participantes.length) {

        comenzarSiguienteRonda();

        return;

    }


    // Mostrar siguiente batalla
    mostrarBatalla();

}


// ========================================
// SIGUIENTE RONDA
// ========================================

function comenzarSiguienteRonda() {

    // Si solamente queda un brainrot...
    if (siguienteRonda.length === 1) {

        mostrarGanador(siguienteRonda[0]);

        return;

    }


    // Los ganadores se convierten
    // en los participantes de la nueva ronda
    participantes = [...siguienteRonda];

    siguienteRonda = [];

    indice = 0;

    rondaActual++;


    mostrarBatalla();

}


// ========================================
// MOSTRAR GANADOR FINAL
// ========================================

function mostrarGanador(brainrot) {

    torneo.classList.add("oculto");

    ganador.classList.remove("oculto");


    // Imagen
    document.getElementById("imagenGanador").src =
        brainrot.imagen;


    // Nombre
    document.getElementById("nombreGanador").textContent =
        brainrot.nombre;


    // Nivel
    document.getElementById("nivelGanador").textContent =
        "🧠 Nivel de brainrot: " +
        brainrot.nivel +
        "%";


    // Victorias
    document.getElementById("victorias").textContent =
        "⚔️ Victorias: " +
        victorias;

}


// ========================================
// REINICIAR TORNEO
// ========================================

botonReiniciar.addEventListener("click", function () {

    ganador.classList.add("oculto");

    inicio.classList.remove("oculto");

});