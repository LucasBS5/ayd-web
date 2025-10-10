document.addEventListener('DOMContentLoaded', () => {

// ---------------MENU DESPLEGABLE (MOBILE)---------------

const menuBtn = document.getElementById('menu');
const navBar = document.getElementById('nav');

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