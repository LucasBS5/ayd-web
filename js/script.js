document.addEventListener('DOMContentLoaded', () => {
//---------------SLIDER PRINCIPAL---------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;

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

//---------------SLIDES AUTOMÁTICAS DE MARCAS---------------

const slide = document.getElementById("slide");
const clone = slide.innerHTML; 
slide.innerHTML += clone;


//---------------LEER MÁS/MOSTRAR MENOS (MOBILE)---------------

function toggleComentario(boton) {
  if (window.innerWidth > 650) return;

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

window.toggleComentario = toggleComentario;

//EL CONTENIDO QUE SE OCULTA EN MOBILE, SE MUESTRA SIEMPRE EN DESKTOP
window.addEventListener('resize', () => {
  if (window.innerWidth > 650) {
    document.querySelectorAll('.contenido-oculto').forEach(el => {
      el.style.display = 'block';
    });
  }
});

//---------------MENU DESPLEGABLE (MOBILE)---------------

const menuBtn = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');

function openMenu() {
    navBar.style.display = 'flex';
    navBar.style.opacity = '0';
    void navBar.offsetWidth; // Forzar reflow para que tome la opacidad inicial
    navBar.classList.add('active');
    navBar.style.opacity = '1';
}

function closeMenu() {
    navBar.style.opacity = '0';
    setTimeout(() => {
        navBar.classList.remove('active');
        navBar.style.display = 'none';
    }, 300); // mismo tiempo que la transición en CSS
}

function toggleMenu() {
    if (window.innerWidth <= 650) {
        if (navBar.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }
}

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
        navBar.classList.remove('active');
        navBar.style.display = '';
        navBar.style.opacity = '';
    }
});
});