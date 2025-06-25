/*---------------SLIDER PRINCIPAL---------------*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/*---------------SLIDES AUTOMÁTICAS - MARCAS---------------*/

const slide = document.getElementById("slide");
const clone = slide.innerHTML; 
slide.innerHTML += clone;


/*---------------LEER MÁS/MOSTRAR MENOS (MOBILE)---------------*/

function toggleComentario(boton) {
  const contenedor = boton.closest('.content-box-2');
  const oculto = contenedor.querySelector('.contenido-oculto');

  if (oculto.style.display === 'block') {
    oculto.style.display = 'none';
    boton.textContent = 'Leer más';
  } else {
    oculto.style.display = 'block';
    boton.textContent = 'Mostrar menos';
  }
}