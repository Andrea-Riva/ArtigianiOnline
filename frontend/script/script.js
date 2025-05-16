// Animazioni hamburger menu e registrazione/login

const container = document.querySelector('.container');
const registerButton = document.querySelector('.register-btn');
const loginButton = document.querySelector('.login-btn');

registerButton.addEventListener('click', () => {
    container.classList.add('active');
});


loginButton.addEventListener('click', () => {
  container.classList.remove('active');
});



document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  menuIcon.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      // Optional: Toggle menu icon between hamburger and close
      const menuIconElement = menuIcon.querySelector('i');
      menuIconElement.classList.toggle('fa-bars');
      menuIconElement.classList.toggle('fa-times');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!menuIcon.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('active');
          const menuIconElement = menuIcon.querySelector('i');
          menuIconElement.classList.remove('fa-times');
          menuIconElement.classList.add('fa-bars');
      }
  });
});