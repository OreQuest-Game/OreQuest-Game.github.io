// JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.getElementById('main-nav');
  
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function() {
      // Toggle 'active' class on the menu icon
      menuIcon.classList.toggle('active');
      
      // Toggle 'active' class on the navigation menu
      mainNav.classList.toggle('active');
    });
  });
  
  
  