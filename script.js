// =====================================
// MAIS FRIO - SCRIPT PREMIUM
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // GERADOR DE PARTÍCULAS DE AR FRIO
    // =====================================

    const particlesContainer = document.getElementById("particles");

    if (particlesContainer) {

        for (let i = 0; i < 80; i++) {

            const particle = document.createElement("span");

            particle.classList.add("particle");

            const size = Math.random() * 8 + 2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.left = `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${Math.random() * 15 + 10}s`;

            particle.style.animationDelay =
                `${Math.random() * 10}s`;

            particle.style.opacity =
                `${Math.random() * 0.6 + 0.1}`;

            particlesContainer.appendChild(particle);
        }

    }

    // =====================================
    // CONTADORES ANIMADOS
    // =====================================

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = +counter.getAttribute("data-target");

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    };

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // =====================================
    // ANIMAÇÃO AO ROLAR
    // =====================================

    const revealElements = document.querySelectorAll(
        ".card, .module-card, .diff-item, .testimonial, .step, .stat-card"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {

        el.classList.add("hidden");

        revealObserver.observe(el);

    });

    // =====================================
    // HEADER DINÂMICO
    // =====================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background =
                "rgba(255,255,255,0.95)";

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.08)";

            header.style.padding =
                "14px 8%";

        } else {

            header.style.background =
                "rgba(255,255,255,0.80)";

            header.style.boxShadow =
                "none";

            header.style.padding =
                "20px 8%";

        }

    });

    // =====================================
    // EFEITO PARALLAX HERO
    // =====================================

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const scroll = window.pageYOffset;

        if (hero) {

            hero.style.transform =
                `translateY(${scroll * 0.08}px)`;

        }

    });

    // =====================================
    // BRILHO NOS CARDS
    // =====================================

    const cards = document.querySelectorAll(
        ".card, .module-card, .diff-item"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(79,195,247,.25),
                rgba(255,255,255,.95) 45%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background =
                "rgba(255,255,255,.95)";

        });

    });

    // =====================================
    // SCROLL SUAVE LINKS MENU
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});

// =====================================
// ESTILOS DINÂMICOS DAS PARTÍCULAS
// =====================================

const particleStyle = document.createElement("style");

particleStyle.innerHTML = `

.particle{

    position:absolute;
    bottom:-50px;

    border-radius:50%;

    background:
    radial-gradient(
    circle,
    rgba(79,195,247,.9),
    rgba(79,195,247,.1)
    );

    animation:floatAir linear infinite;
}

@keyframes floatAir{

    from{

        transform:
        translateY(0)
        translateX(0);

    }

    to{

        transform:
        translateY(-120vh)
        translateX(150px);

    }

}

.hidden{

    opacity:0;
    transform:
    translateY(40px);

    transition:
    all .8s ease;
}

.show{

    opacity:1;
    transform:
    translateY(0);

}

`;

document.head.appendChild(particleStyle);