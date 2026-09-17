const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


const reservationForm =
    document.getElementById("reservationForm");

const toast =
    document.getElementById("toast");

reservationForm.addEventListener("submit", event => {

    event.preventDefault();

    toast.classList.add("show");

    reservationForm.reset();

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
});