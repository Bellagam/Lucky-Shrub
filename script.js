// Get the mobile menu button and navigation links
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('nav ul');

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
  // Toggle the "show" class on the navigation links
  navLinks.classList.toggle('show');
});