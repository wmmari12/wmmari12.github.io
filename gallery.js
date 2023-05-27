/* let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/images-esmaltado/foto2.jpeg';

imgArray[1] = new Image();
imgArray[1].src = './images/images-esmaltado/foto3.jpeg';

imgArray[2] = new Image();
imgArray[2].src = './images/images-esmaltado/foto4.jpeg';

imgArray[3] = new Image();
imgArray[3].src = './images/images-esmaltado/foto5.jpeg';


function nextImage(){
  var img = document.getElementById("mainImage");
  for(var i = 0; i < imgArray.length;i++){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[0].src;
              break;
          }
          document.getElementById("mainImage").src = imgArray[i+1].src;
          break;
      }
  }
}

function previousImage(){
  var img = document.getElementById("mainImage");
  for(var i = imgArray.length-1; i >=0 ;i--){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[4].src;
              break;
          }
          document.getElementById("mainImage").src = imgArray[i-1].src;
          break;
      }
  }
}*/


var imagenes = ["./images/images-esmaltado/foto1.jpeg",
    "./images/images-esmaltado/foto2.jpeg",
    "./images/images-esmaltado/foto3.jpeg",
    "./images/images-esmaltado/foto4.jpeg",
    "./images/images-esmaltado/foto5.jpeg"];
var indice = 0;


function imagenInicial() {
    var img = document.createElement('img')
    img.src = imagenes[indice];
    document.getElementById('imagen').appendChild(img);
}

function sigImagen() {
    var img = document.getElementById('imagen').getElementsByTagName('img')[0]
    indice++;
    indice = indice % imagenes.length;
    img.src = imagenes[indice];
    
}

function antImagen() {
    var img = document.getElementById('imagen').getElementsByTagName('img')[0];
    indice--;
    if (indice < 0) {
      indice = imagenes.length - 1;
    }
    img.src = imagenes[indice];
}

