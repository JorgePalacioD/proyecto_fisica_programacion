const velocidadAeronave = 100; // nudos
const tiempoLanzamiento = 5; // s
const tipoParacaidas = "personal";
const alturaLanzamiento = 4000; // pies
const velocidadViento = 10; // nudos
let tiempoAperturaParacaidas = 0.0;

// Función para calcular la dispersión
function calcularDispersion() {
  return velocidadAeronave * 0.51 * tiempoLanzamiento;
}

// Función para calcular el desvío
function calcularDesvio() {
  const constanteParacaidas = {
    carga: 1.5,
    personal: 3.0,
  };

  return (
    constanteParacaidas[tipoParacaidas] *
    (alturaLanzamiento / 100) *
    velocidadViento
  );
}

// Función para calcular tiempo de apertura del paraidas

function calcularTiempoApertura() {
  if (velocidadAeronave >= 60 && velocidadAeronave < 70) {
    tiempoAperturaParacaidas = 5.97;
  } else if (velocidadAeronave >= 70 && velocidadAeronave < 90) {
    tiempoAperturaParacaidas = 5.15;
  } else if (velocidadAeronave >= 90 && velocidadAeronave < 100) {
    tiempoAperturaParacaidas = 4.57;
  } else if (velocidadAeronave >= 100 && velocidadAeronave < 110) {
    tiempoAperturaParacaidas = 4.3;
  } else if (velocidadAeronave >= 110 && velocidadAeronave < 120) {
    tiempoAperturaParacaidas = 3.8;
  } else if (velocidadAeronave >= 120 && velocidadAeronave < 130) {
    tiempoAperturaParacaidas = 3.5;
  } else if (velocidadAeronave >= 140 && velocidadAeronave < 150) {
    tiempoAperturaParacaidas = 3.02;
  } else if (velocidadAeronave >= 150 && velocidadAeronave < 151) {
    tiempoAperturaParacaidas = 2.9;
  } else {
    console.log("La aeronave debe tener una velocidad entre 60 y 150 nudos");
  }
  return tiempoAperturaParacaidas;
}

const tiempoApertura = calcularTiempoApertura();

// Función para calcular el empuje frontal
function calcularEmpujeFrontal() {
  return velocidadAeronave * tiempoApertura;
}

const dispersion = calcularDispersion();
const desvio = calcularDesvio();
const empujeFrontal = calcularEmpujeFrontal();

console.log("Dispersión:", dispersion, "metros");
console.log("Desvío:", desvio, "metros");
console.log("Empuje frontal:", empujeFrontal, "metros");
