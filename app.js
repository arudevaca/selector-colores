// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;// Actualiza el valor de la variable 
  textoRojo.textContent = rojo;//Actualiza el texto.
  console.log(`Rojo: ${rojo}`); 
  actualizarColor(rojo, verde, azul); // Llama a la función para actualizar el color de fondo.
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value; // Actualiza el valor de la variable 
  textoVerde.textContent = verde; //Actualiza el texto con el valor
  console.log(`Verde: ${verde}`); 
  actualizarColor(rojo, verde, azul);// Llama a la función para actualizar el color de fondo.
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;// Actualiza el valor de la variable azul
  textoAzul.textContent = azul;//actualiza el texto.
  console.log(`Azul: ${azul}`);
  actualizarColor(rojo, verde, azul);// Llama a la función para actualizar el color de fondo.
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

// Seleccionar los elementos del DOM.
const boton = document.querySelector('button');
const color = document.getElementById('color');

// Generar un color hexadecimal aleatorio.
function generarColorHexAleatorio() {
  let digitos = '0123456789ABCDEF'; // 16 opciones.
  let color = '#'; // El color inicia con #.

  for (let i = 0; i < 6; i++) {
    // Escoger uno de los 16 digitos posibles.
    let indiceAleatorio = Math.floor(Math.random() * 16);
    // Agregarlo al codigo del color.
    color += digitos[indiceAleatorio];
  }

  return color;
}

// Event Listener.
boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  document.body.style.backgroundColor = colorAleatorio;
  color.textContent = colorAleatorio;
});
*/