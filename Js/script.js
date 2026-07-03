// ==============================
// Quntra JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Navigation Link Active Effect
    // -----------------------------
    const navLinks = document.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {

            // Ignore empty links
            if (this.getAttribute("href") === "") {
                event.preventDefault();
                alert("This page is coming soon.");
            }

            navLinks.forEach(item => item.classList.remove("active"));

            this.classList.add("active");
        });
    });

    // -----------------------------
    // Card Click Animation
    // -----------------------------
    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {

        card.addEventListener("click", function (e) {

            if (this.getAttribute("href") === "") {
                e.preventDefault();
            }

            this.style.transform = "scale(0.92)";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

        });

    });

    // -----------------------------
    // Fade Sections on Scroll
    // -----------------------------
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.6s ease";

        observer.observe(section);

    });

    // -----------------------------
    // Back To Top Button
    // -----------------------------
    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.width = "45px";
    topBtn.style.height = "45px";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "50%";
    topBtn.style.cursor = "pointer";
    topBtn.style.fontSize = "20px";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "999";
    topBtn.style.transition = "0.3s";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // -----------------------------
    // Dynamic Copyright Year
    // -----------------------------
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            `&copy; ${new Date().getFullYear()} Quntra. All rights reserved.`;
    }

    // -----------------------------
    // Welcome Message
    // -----------------------------
    console.log("Welcome to Quntra");

});