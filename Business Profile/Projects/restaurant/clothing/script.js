document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");


  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("mobile-open");


      if (isOpen) {

        navLinks.style.display = "flex";
        navLinks.style.position = "absolute";
        navLinks.style.top = "75px";
        navLinks.style.left = "6%";
        navLinks.style.right = "6%";
        navLinks.style.flexDirection = "column";
        navLinks.style.gap = "20px";
        navLinks.style.padding = "25px";
        navLinks.style.background = "rgba(17,17,17,0.96)";
        navLinks.style.backdropFilter = "blur(15px)";

      } else {

        navLinks.style.display = "";
        navLinks.style.position = "";
        navLinks.style.top = "";
        navLinks.style.left = "";
        navLinks.style.right = "";
        navLinks.style.flexDirection = "";
        navLinks.style.gap = "";
        navLinks.style.padding = "";
        navLinks.style.background = "";
        navLinks.style.backdropFilter = "";

      }

    });


    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

        if (window.innerWidth <= 900) {
          navLinks.style.display = "none";
        }

      });

    });

  }


  /* =========================
     SMOOTH SCROLL
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId =
          link.getAttribute("href");


        if (!targetId || targetId === "#") {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });


  /* =========================
     IMAGE LOAD
  ========================= */

  const images =
    document.querySelectorAll("img");


  images.forEach((image) => {

    image.addEventListener("load", () => {

      image.classList.add("loaded");

    });

  });

});