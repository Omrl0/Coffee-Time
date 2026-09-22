/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================
   MENU FILTER
========================= */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuItems = document.querySelectorAll(".menu-item");

function showCategory(category) {

    menuItems.forEach(item => {

        if (item.dataset.category === category) {
            item.style.display = "grid";

            requestAnimationFrame(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            });

        } else {
            item.style.display = "none";
        }

    });
}


menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(button => {
            button.classList.remove("active");
        });

        tab.classList.add("active");

        showCategory(tab.dataset.category);

    });

});


/* Show hot coffee on initial load */

showCategory("hot");


/* =========================
   LANGUAGE SWITCH
========================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

function updateLanguage() {

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(element => {

        element.textContent =
            element.dataset[currentLanguage];

    });

    if (currentLanguage === "ar") {

        document.body.classList.add("rtl");

        document.documentElement.lang = "ar";

        languageBtn.textContent = "EN";

    } else {

        document.body.classList.remove("rtl");

        document.documentElement.lang = "en";

        languageBtn.textContent = "AR";
    }
}


languageBtn.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "en"
            ? "ar"
            : "en";

    updateLanguage();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   SMOOTH REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".drink-card, .menu-item, .review, .gallery-item, .info-card"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
