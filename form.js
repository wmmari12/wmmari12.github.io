let nombre = /^[a-zA-ZÀ-ÿ\s]{5,50}$/;
let telefono = /^\d{7,14}$/;
let mensaje = /^[a-zA-ZÀ-ÿ\s]{5,150}$/;


const valida = {
    nombre: false,
    telefono: false,
    mensaje: false
}

//funcon para validar lo ingresado en el campo nombre del formulario
function validarFormularioNombre() {
    nombreForm = document.getElementById('nombre').value;
    if (nombre.test(nombreForm)) {//si lo ingresado en el campo es correcto se muestra en verde
        document.getElementById('nombre').classList.add('input-correcto');
        valida.nombre = true;
        document.getElementById('errorNom').classList.add('mjeError');
    } else {//si lo ingresado en el campo es correcto se muestra en rojo
        document.getElementById('nombre').classList.remove('input-correcto');
        document.getElementById('nombre').classList.add('input-incorrecto');
        document.getElementById('errorNom').classList.remove('mjeError');
    }
}

function validarFormularioTelefono() {
    telForm = document.getElementById('telefono').value;
    if (telefono.test(telForm)) {
        document.getElementById('telefono').classList.add('input-correcto');
        valida.telefono = true;
        document.getElementById('errorTel').classList.add('mjeError');
    } else {
        document.getElementById('telefono').classList.remove('input-correcto');
        document.getElementById('telefono').classList.add('input-incorrecto');
        document.getElementById('errorTel').classList.remove('mjeError');
    }
}

function validarFormularioMensaje() {
    msjForm = document.getElementById('mensaje').value;
    if (mensaje.test(msjForm)) {
        document.getElementById('mensaje').classList.add('input-correcto');
        valida.mensaje = true;
        document.getElementById('errorMsj').classList.add('mjeError');

    } else {
        document.getElementById('mensaje').classList.remove('input-correcto');
        document.getElementById('mensaje').classList.add('input-incorrecto');
        document.getElementById('errorMsj').classList.remove('mjeError');
    }
}


function validar(e) {
    e.preventDefault();
    var validaform = document.getElementById('formulario');
    if (valida.nombre && valida.mensaje && valida.telefono) {
        document.getElementById('nombre').classList.remove('input-correcto');
        document.getElementById('telefono').classList.remove('input-correcto');
        document.getElementById('mensaje').classList.remove('input-correcto');
        document.getElementById('nombre').classList.remove('input-incorrecto');
        document.getElementById('telefono').classList.remove('input-incorrecto');
        document.getElementById('mensaje').classList.remove('input-incorrecto');

        mostrarDatos();
        validaform.reset();
    }
}

function mostrarDatos() {
    //let nombreForm = document.getElementById('nombre').value;
    let datoNom = document.createElement('p');
    let datoTel = document.createElement('p');
    let datoMsj = document.createElement('p');

    datoNom.textContent = "El Nombre ingresado es:" + nombreForm;
    datoTel.textContent = "El telefono es: " + telForm;
    datoMsj.textContent = "Mensaje: " + msjForm;
    document.getElementById('datos').appendChild(datoNom).appendChild(datoTel).appendChild(datoMsj);
}

