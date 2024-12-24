// Select the navbar element
const navbar = document.getElementById("navbar");

// Function to add/remove 'scrolled' class on scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});