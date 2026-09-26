/* =====================================================
   CHHAYA AHIRWAR
   FRONTEND DEVELOPER PORTFOLIO
   Main JavaScript
===================================================== */


/* =====================================================
   GSAP
===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (event) => {

        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.15,
            ease: "power2.out"
        });

    });


    const interactiveElements = document.querySelectorAll(
        "a, button, .service-card, .project-card"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-active");
        });

    });

}

/* =====================================================
   HERO ELEMENTS
===================================================== */

const hero =
    document.querySelector(".hero");

const heroImage =
    document.querySelector(".hero-bg img") ||
    document.querySelector(".hero-image img");

const heroNavbar =
    document.querySelector(".navbar");

const heroBadge =
    document.querySelector(".hero-badge") ||
    document.querySelector(".hero-label");

const heroTitle =
    document.querySelector(".hero-title");

const heroDescription =
    document.querySelector(".hero-description");

const heroButtons =
    document.querySelector(".hero-buttons");

const heroTech =
    document.querySelector(".tech-stack");

const floatingCards =
    document.querySelectorAll(".floating-card");


/* =====================================================
   HERO INTRO ANIMATION
===================================================== */

const heroTimeline =
    gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });


if (heroNavbar) {

    heroTimeline.from(heroNavbar, {

        y: -50,

        opacity: 0,

        duration: 0.8

    });

}


if (heroBadge) {

    heroTimeline.from(heroBadge, {

        y: 30,

        opacity: 0,

        duration: 0.6

    }, "-=0.4");

}


if (heroTitle) {

    heroTimeline.from(heroTitle, {

        y: 100,

        opacity: 0,

        duration: 1.1

    }, "-=0.3");

}


if (heroDescription) {

    heroTimeline.from(heroDescription, {

        y: 30,

        opacity: 0,

        duration: 0.7

    }, "-=0.5");

}


if (heroButtons) {

    heroTimeline.from(heroButtons, {

        y: 25,

        opacity: 0,

        duration: 0.6

    }, "-=0.4");

}


if (heroTech) {

    heroTimeline.from(heroTech.children, {

        y: 20,

        opacity: 0,

        duration: 0.5,

        stagger: 0.1

    }, "-=0.3");

}


if (floatingCards.length) {

    heroTimeline.from(floatingCards, {

        scale: 0.7,

        opacity: 0,

        duration: 0.7,

        stagger: 0.15

    }, "-=0.4");

}


/* =====================================================
   HERO IMAGE SLOW MOVEMENT
===================================================== */

if (heroImage) {

    gsap.to(heroImage, {

        scale: 1.1,

        duration: 8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}


/* =====================================================
   HERO MOUSE PARALLAX
===================================================== */

if (hero && heroImage) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 15;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;


        gsap.to(heroImage, {

            x: x,

            y: y,

            duration: 1.2,

            ease: "power3.out",

            overwrite: true

        });

    });


    hero.addEventListener("mouseleave", () => {

        gsap.to(heroImage, {

            x: 0,

            y: 0,

            duration: 1.2,

            ease: "power3.out"

        });

    });

}


/* =====================================================
   FLOATING CARDS
===================================================== */

if (document.querySelector(".card-one")) {

    gsap.to(".card-one", {

        y: -18,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}


if (document.querySelector(".card-two")) {

    gsap.to(".card-two", {

        y: 18,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}


if (document.querySelector(".card-three")) {

    gsap.to(".card-three", {

        y: -15,

        duration: 2.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}




/* =====================================================
   ABOUT SECTION
===================================================== */

if (document.querySelector(".about-section")) {

    const aboutSection =
        document.querySelector(".about-section");

    const aboutNumber =
        aboutSection.querySelector(".section-number");

    const aboutTitle =
        aboutSection.querySelector("h2");

    const aboutIntro =
        aboutSection.querySelector(".about-intro");

    const aboutRight =
        aboutSection.querySelector(".about-right");

    const aboutStats =
        aboutSection.querySelectorAll(".about-stat");


    /* ABOUT NUMBER */

    if (aboutNumber) {

        gsap.from(aboutNumber, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutSection,
                start: "top 75%",
                once: true
            }
        });

    }


    /* ABOUT TITLE */

    if (aboutTitle) {

        gsap.from(aboutTitle, {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutTitle,
                start: "top 85%",
                once: true
            }
        });

    }


    /* ABOUT INTRO */

    if (aboutIntro) {

        gsap.from(aboutIntro, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutIntro,
                start: "top 90%",
                once: true
            }
        });

    }


    /* ABOUT RIGHT TEXT */

    if (aboutRight) {

        gsap.from(aboutRight, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
                trigger: aboutRight,
                start: "top 90%",
                once: true
            }
        });

    }


    /* ABOUT STATS */

    if (aboutStats.length) {

        gsap.from(aboutStats, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".about-stats",
                start: "top 85%",
                once: true
            }
        });

    }

}

        
           
          

/* =====================================================
   SERVICES SECTION
===================================================== */

if (document.querySelector(".services")) {

    const servicesNumber =
        document.querySelector(".services .section-number");

    const servicesTitle =
        document.querySelector(".services h2");

    const serviceCards =
        document.querySelectorAll(".service-card");


    if (servicesNumber) {

        gsap.from(servicesNumber, {

            x: -50,

            opacity: 0,

            duration: 0.8,

            scrollTrigger: {

                trigger: ".services",

                start: "top 75%",

                once: true

            }

        });

    }


    if (servicesTitle) {

        gsap.from(servicesTitle, {

            y: 70,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: servicesTitle,

                start: "top 80%",

                once: true

            }

        });

    }


    if (serviceCards.length) {
    gsap.from(serviceCards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
            trigger: serviceCards[0],
            start: "top 85%",
            once: true
        }
    });
}
}


/* =====================================================
   PROJECTS SECTION
===================================================== */

if (document.querySelector(".projects")) {

    const projectsNumber =
        document.querySelector(".projects .section-number");

    const projectsTitle =
        document.querySelector(".projects h2");

    const projectCards =
        document.querySelectorAll(".project-card");


    if (projectsNumber) {

        gsap.from(projectsNumber, {

            x: -50,

            opacity: 0,

            duration: 0.8,

            scrollTrigger: {

                trigger: ".projects",

                start: "top 75%",

                once: true

            }

        });

    }


    if (projectsTitle) {

        gsap.from(projectsTitle, {

            y: 70,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: projectsTitle,

                start: "top 80%",

                once: true

            }

        });

    }


    if (projectCards.length) {

        gsap.from(projectCards, {

            y: 60,

            opacity: 1,

            duration: 0.9,

            stagger: 0.2,

            ease: "power3.out",

            scrollTrigger: {

                trigger: ".project-list",

                start: "top 85%",

                once: true

            }

        });

    }

}


/* =====================================================
   CONTACT SECTION
===================================================== */

if (document.querySelector(".contact")) {

    const contactTitle =
        document.querySelector(".contact h2");

    const contactButton =
        document.querySelector(".contact-button");


    if (contactTitle) {

        gsap.from(contactTitle, {

            y: 80,

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: contactTitle,

                start: "top 85%",

                once: true

            }

        });

    }


    if (contactButton) {

        gsap.from(contactButton, {

            y: 30,

            opacity: 0,

            duration: 0.8,

            ease: "power3.out",

            scrollTrigger: {

                trigger: contactButton,

                start: "top 90%",

                once: true

            }

        });

    }

}


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticButtons =
    document.querySelectorAll(
        ".hero-buttons a, " +
        ".contact-button, " +
        ".navbar-button, " +
        ".nav-button"
    );


magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect =
            button.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left -
            rect.width / 2;


        const y =
            event.clientY -
            rect.top -
            rect.height / 2;


        gsap.to(button, {

            x: x * 0.18,

            y: y * 0.18,

            duration: 0.4,

            ease: "power3.out"

        });

    });


    button.addEventListener("mouseleave", () => {

        gsap.to(button, {

            x: 0,

            y: 0,

            duration: 0.7,

            ease: "elastic.out(1, 0.3)"

        });

    });

});


/* =====================================================
   PROJECT FULLSCREEN VIEW
===================================================== */

/*
   IMPORTANT:

   The old project hover/cursor reveal has been removed.

   Projects now open their complete project image
   when the user clicks:

   "Click to see project"
*/


const projectModal =
    document.getElementById("projectModal");

const projectModalImage =
    document.getElementById("projectModalImage");

const closeProject =
    document.getElementById("closeProject");

const projectViewButtons =
    document.querySelectorAll(".project-view-btn");


/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = {

    smartnotes:
        "Images/Smartnotes1.png",

    weather:
        "Images/weather2.png",

    ecommerce:
        "Images/Portfolio.png"

};


/* =====================================================
   OPEN PROJECT
===================================================== */

projectViewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const projectName =
            button.dataset.project;


        const image =
            projectImages[projectName];


        if (!image) {

            console.error(
                "Project image not found:",
                projectName
            );

            return;

        }


        if (!projectModal || !projectModalImage) {

            console.error(
                "Project modal elements not found."
            );

            return;

        }


        /* Set image */

        projectModalImage.src = image;


        /* Show modal */

        projectModal.classList.add("active");


        /* Prevent background scrolling */

        document.body.style.overflow = "hidden";


        /* Animate project image */

        gsap.fromTo(

            projectModalImage,

            {
                scale: 0.85,
                opacity: 0
            },

            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            }

        );

    });

});


/* =====================================================
   CLOSE PROJECT FUNCTION
===================================================== */

function closeProjectModal() {

    if (!projectModal) return;


    gsap.to(projectModalImage, {

        scale: 0.9,

        opacity: 0,

        duration: 0.25,

        ease: "power2.in",

        onComplete: () => {

            projectModal.classList.remove("active");

            document.body.style.overflow = "";

            if (projectModalImage) {

                projectModalImage.src = "";

            }

        }

    });

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (closeProject) {

    closeProject.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =====================================================
   CLOSE BY CLICKING OUTSIDE IMAGE
===================================================== */

if (projectModal) {

    projectModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === projectModal
            ) {

                closeProjectModal();

            }

        }
    );

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =====================================================
   SAFETY
   SERVICES & PROJECTS ALWAYS VISIBLE
===================================================== */

gsap.set(".service-card", {

    autoAlpha: 1

});


gsap.set(".project-card", {

    autoAlpha: 1

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


if (
    sections.length &&
    navLinks.length
) {

    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";


            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach((link) => {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.classList.add("active");

                }

            });

        }
    );

}


/* =====================================================
   REFRESH SCROLLTRIGGER
===================================================== */

window.addEventListener(
    "load",
    () => {

        ScrollTrigger.refresh();

    }
);



let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu-links a"
    );


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICK */

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuToggle.classList.remove("active");

    });

});