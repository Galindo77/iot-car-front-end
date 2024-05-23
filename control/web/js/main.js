//alert("WELCOME");
let adelante=document.getElementById("Adelante");
let atras=document.getElementById("Atras");
let derecha=document.getElementById("Derecha");
let izquierda=document.getElementById("Izquierda"); 
let detener=document.getElementById("Detener");
let mensaje=document.getElementById("Mensaje");
 function callApi(estatus){
    // Hacer una petición para un usuario con ID especifico
axios.get('http://3.142.153.159/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+ estatus)
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);
  mensaje.innerHTML="Respuesta: <strong>"+ response.data + "</strong>";
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
 }
adelante.addEventListener("click",function(){
callApi('f');});
atras.addEventListener("click",function(){
callApi('b');});
derecha.addEventListener("click",function(){
callApi('r');});  
izquierda.addEventListener("click",function(){
callApi('l');});
detener.addEventListener("click",function(){
callApi('s');});
