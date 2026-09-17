/* =================================
   MOBILE MENU
================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* =================================
   CLOSE MOBILE MENU
================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =================================
   PROJECT DEMO MODAL
================================= */

const demoModal = document.getElementById("demoModal");
const demoTitle = document.getElementById("demoTitle");


function showDemo(event, projectName) {

    event.preventDefault();

    if (demoTitle) {
        demoTitle.textContent = projectName;
    }

    if (demoModal) {
        demoModal.classList.add("active");
    }

}


function closeDemo() {

    if (demoModal) {
        demoModal.classList.remove("active");
    }

}


/* =================================
   CLOSE MODAL OUTSIDE BOX
================================= */

if (demoModal) {

    demoModal.addEventListener("click", (event) => {

        if (event.target === demoModal) {

            closeDemo();

        }

    });

}


/* =================================
   ESC KEY
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeDemo();

    }

});


/* =================================
   SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
    ".team-card, .service-card, .project-card, .contact-box"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =================================
   CURRENT YEAR
================================= */

const yearText =
    document.querySelector("footer p");

if (yearText) {

    const currentYear =
        new Date().getFullYear();

    yearText.textContent =
        `© ${currentYear} Hadi & Qasim. Built with purpose.`;

}