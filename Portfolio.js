function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
  };
document.addEventListener("DOMContentLoaded", function() {
    const prj = document.getElementById("prj1");
    prj.addEventListener('click', function() {
        window.location.href = "https://iheeb011.github.io/Cash-Register/";
    });
});

  
  
