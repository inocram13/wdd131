const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        hamburger.textContent = navMenu.classList.contains("visible") ? "X" : "☰";   });
