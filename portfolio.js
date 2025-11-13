// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !msg) {
        status.style.color = "red";
        status.textContent = "Please fill out all fields.";
        return;
    }

    status.style.color = "green";
    status.textContent = "Message sent! (This is a demo)";
});
