/**
 * js/scripts.js - Temple Album scripts
 * Handles dynamic footer content and responsive hamburger navigation
 */

// ========================
// Footer Dynamic Content
// ========================

/**
 * Initialize footer with current year and last modified date
 */
function initializeFooter() {
  const yearElement = document.getElementById('copyright-year');
  const modifiedElement = document.getElementById('last-modified');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (modifiedElement) {
    modifiedElement.textContent = document.lastModified;
  }
}

// ========================
// Hamburger Menu
// ========================

/**
 * Initialize hamburger menu for mobile navigation
 * Creates a hamburger button and toggles navigation visibility
 */
function initializeHamburgerMenu() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  if (!header || !nav) return;

  // Create hamburger button
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.className = 'hamburger-btn';
  hamburgerBtn.innerHTML = '☰'; // Hamburger symbol

  // Insert hamburger button before nav
  header.insertBefore(hamburgerBtn, nav);

  // Toggle menu on hamburger click
  hamburgerBtn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    hamburgerBtn.innerHTML = isOpen ? '✕' : '☰'; // Switch to X when open
  });

  // Close menu when a navigation link is clicked
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.innerHTML = '☰'; // Reset to hamburger
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) {
      nav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.innerHTML = '☰';
    }
  });
}

// ========================
// Initialize on DOM Ready
// ========================

document.addEventListener('DOMContentLoaded', function () {
  initializeFooter();
  initializeHamburgerMenu();
});
