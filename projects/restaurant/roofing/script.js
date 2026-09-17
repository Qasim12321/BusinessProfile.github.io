const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* SCROLL ANIMATIONS */

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
        threshold: .12
    }
);


document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


/* FAQ */

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;
        const answer = item.querySelector(".faq-answer");

        document.querySelectorAll(".faq-item").forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });


        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/* ESTIMATE FORM */

const estimateForm =
    document.getElementById("estimateForm");

const toast =
    document.getElementById("toast");

estimateForm.addEventListener("submit", event => {

    event.preventDefault();

    toast.classList.add("show");

    estimateForm.reset();

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

});