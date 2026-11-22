
// Select the menu elements
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuButton.setAttribute("aria-expanded", isOpen);

});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuButton.setAttribute("aria-expanded", "false");

    });

});

// Update copyright year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();
