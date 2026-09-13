// Fill in dynamic footer information
document.getElementById('copyright-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle menu when hamburger button is clicked
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    // Change button text between ☰ and ✕
    menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close menu when a navigation link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});
