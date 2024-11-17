document.addEventListener("DOMContentLoaded",()=>{
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".navigation");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.textContent = navMenu.classList.contains("show") ? "X" : "☰";
    });
});
