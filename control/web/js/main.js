//alert("Hola mundo");
let adelante=document.getElementById("Adelante");
let atras=document.getElementById("Atras");
let izquierda=document.getElementById("Izquierda");
let derecha=document.getElementById("Derecha");
let detener=document.getElementById("Detener");
let mensaje=document.getElementById("mensaje");


// Función para llamar a la API

function CallApi(estatus)
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://3.142.153.159/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    mensaje.innerHTML="Respuesta: " + response.data;
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}




if (Adelante) {
  Adelante.addEventListener("click", function () {
      CallApi('f');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (Atras) {
  Atras.addEventListener("click", function () {
      CallApi('b');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (Izquierda) {
  Izquierda.addEventListener("click", function () {
      CallApi('l');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (Derecha) {
  Derecha.addEventListener("click", function () {
      CallApi('r');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (Detener) {
  Detener.addEventListener("click", function () {
      CallApi('s');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}
