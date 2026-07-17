// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }

});

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.getElementById("typing");

const typingWords = [

    "Cloud & DevOps Engineer",

    "AWS Engineer",

    "Linux Administrator",

    "Terraform Enthusiast",

    "Docker & Jenkins"

];

let word = 0;

let letter = 0;

let deleting = false;

function typingAnimation() {

    if (!typingElement) return;

    const current = typingWords[word];

    if (!deleting) {

        typingElement.textContent = current.substring(0, letter++);

        if (letter > current.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;

        }

    } else {

        typingElement.textContent = current.substring(0, letter--);

        if (letter < 0) {

            deleting = false;

            word++;

            if (word >= typingWords.length) word = 0;

        }

    }

    setTimeout(typingAnimation, deleting ? 60 : 120);

}

typingAnimation();

// =========================
// STICKY NAVBAR
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// =========================
// ACTIVE MENU
// =========================

const navItems = document.querySelectorAll(".nav-links a");

const pageSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// SCROLL REVEAL
// =========================

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".skill-card,.project-card,.info-card,.stat-card,.timeline-item,.contact-card"

).forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".nav-links");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================
// SCROLL TO TOP
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    topButton.style.display =

        window.scrollY > 400 ? "flex" : "none";

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =========================
// FLOATING ICONS
// =========================

document.querySelectorAll(".floating-icon").forEach(icon => {

    icon.style.animation = "floating 5s ease-in-out infinite";

});

// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}