//Project by Kevin Delgado Rojas @ Alura Latam

let intentos =1;
let listaNumSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para el boton
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroUsuario));
    //console.log(numeroUsuario);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(numeroSecreto == numeroUsuario);
    //console.log(intentos);
    if (numeroUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Se habilita el boton
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;  

    console.log(numeroGenerado);
    console.log(listaNumSorteados);
    //Si ya sorteamos todos número
    if (listaNumSorteados.length == numeroMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumSorteados.includes(numeroGenerado)) { //.includes recorre el array para saber si ya esta el numero
            return generarNumeroSecreto();
        } else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    mensajeInicial();
    //Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Iniciarlizar numero de intentos
    intentos = 1;
    // Deshabilitar el boton de nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function mensajeInicial(){
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMax}`);
}

//Function main
let numeroSecreto = generarNumeroSecreto();
mensajeInicial();

