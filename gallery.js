var imagenes = ["./images/images-esmaltado/foto6.jpeg",
"./images/images-esmaltado/foto7.jpeg",
"./images/images-esmaltado/foto8.jpeg",
"./images/images-esmaltado/foto9.jpeg",
"./images/images-esmaltado/foto10.jpeg",
"./images/images-esmaltado/foto12.jpeg",
"./images/images-esmaltado/foto13.jpeg",
"./images/images-esmaltado/foto14.jpeg"];
var indice = 0;


function imagenInicial() {
    var img = document.createElement('img')
    img.src = imagenes[indice];
    document.getElementById('imagen').appendChild(img);
}

function nextImagen() {
    var img = document.getElementById('imagen').getElementsByTagName('img')[0]
    indice++;
    indice = indice % imagenes.length;
    img.src = imagenes[indice];
    
}

function prevImagen() {
    var img = document.getElementById('imagen').getElementsByTagName('img')[0];
    indice--;
    if (indice < 0) {
      indice = imagenes.length - 1;
    }
    img.src = imagenes[indice];
}

