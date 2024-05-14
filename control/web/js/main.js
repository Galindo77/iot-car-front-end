//alert("WELCOME");
let adelante=document.getElementById("adelante");
let atras=document.getElementById("atras");
let derecha=document.getElementById("derecha");
let izquierda=document.getElementById("izquierda"); 
let detener=document.getElementById("detener");
let mensaje=document.getElementById("mensaje");
 function callApi(estatus){
    // Hacer una petición para un usuario con ID especifico
axios.get('http://13.58.107.99/iot-car-control/back-end/apis/getRegistro.php?valorEstatus='+ estatus)
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
