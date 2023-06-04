let nombre = /^[a-zA-ZÀ-ÿ\s]{5,50}$/;//expresión regular que permite ingresar letras y debe tener minimo 5 y máximo 50 caracteres
let telefono = /^\d{7,14}$/;//expresión regular que permite ingresar solo numeros con minimo de 7 y maximo de 14 numeros
let mensaje = /^[a-zA-ZÀ-ÿ0-9.,-_!¡?¿$%&/(){}<>\s]{5,150}$/;//expresión regular que permite ingresar letras, numeros y algunos caracteres especiales con minimo de 5 y maximo de 150 caracteres


const valida = {
    nombre: false,
    telefono: false,
    mensaje: false
}

//función para validar lo ingresado en el campo nombre del formulario
//con test, validamos la expresión regular definida en nombre (definida al principio del código)
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
//función para validar el teléfono ingresado en el Formulario.
//con test, validamos la expresión regular definida en teléfono (definida al principio del código)
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
//función para validar el mensaje ingresado en el Formulario.
//con test, validamos la expresión regular definida en mensaje (definida al principio del código)
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

//Función para validar el formulario cuando hacen clic en el botón ENVIAR
function validar(e) {
    e.preventDefault();
    //Llamo a las 3 funciones que validan los campos al enviar
    validarFormularioNombre();
    validarFormularioTelefono();
    validarFormularioMensaje();
    var validaform = document.getElementById('formulario');
       //Si los 3 campos tienen valores válidos, muestro los datos, limpio el formulario 
    if (valida.nombre && valida.mensaje && valida.telefono) {
        document.getElementById('nombre').classList.remove('input-correcto');
        document.getElementById('telefono').classList.remove('input-correcto');
        document.getElementById('mensaje').classList.remove('input-correcto');
        document.getElementById('nombre').classList.remove('input-incorrecto');
        document.getElementById('telefono').classList.remove('input-incorrecto');
        document.getElementById('mensaje').classList.remove('input-incorrecto');

        mostrarDatos();
        validaform.reset();
        //seteo en falso para que luego de mostrarse los datos y limpiarse el form, valide de nuevo cada campo.
        valida.nombre=false;
        valida.telefono=false;
        valida.mensaje=false;
    }
    return false;
}

//Función para mostrar los datos ingresados en el formulario
function mostrarDatos() {

    document.getElementById('h3Datos').classList.remove('h3Datos');
    document.getElementById('h3Datos').classList.add('subtitle');
    document.getElementById('datos').classList.remove('datos');
    document.getElementById('datos').classList.add('mostrarDatos');

    let datoNom = document.createElement('p');
    let datoTel = document.createElement('p');
    let datoMsj = document.createElement('p');
    let div = document.createElement('div');
    let hr = document.createElement('hr');

    datoNom.innerHTML = "El Nombre ingresado es: <strong>" + nombreForm+"</strong>";
    datoTel.innerHTML = "El telefono es: <strong>" + telForm+"</strong>";
    datoMsj.innerHTML = "Mensaje: " + msjForm;
    hr.textContent="";
    div.innerHTML = "<div class='mostrarDatos'> " +  document.getElementById('datos').appendChild(datoNom).appendChild(datoTel).appendChild(datoMsj).appendChild(hr) ;
}

