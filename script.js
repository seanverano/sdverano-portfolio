// Cursor Animation
function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX, // Changed from e.x to e.clientX
      y: e.clientY, // Changed from e.y to e.clientY
      duration: 0.1
    });
  });
}
cursor();

// Hero Section Animation

gsap.to("#page", {
  scrollTrigger: {
    trigger: `.heroImg`,
    start: `top 10%`,
    end: `bottom top`,
    pin: true,
    scrub: 0.5
  }
});

gsap.to(".heroImg", {
  opacity: 0,
  scale: 0, 
  scrollTrigger: {
    trigger: `.name`,
    start: `top top`,
    end: `bottom top`,
    scrub: .25
  }
});

gsap.to(".name", {
  opacity: 1,
  color: "#FF482A",
  visibility: 'visible',
  duration: 1,
  scrollTrigger: {
    trigger: `.heroImg`,
    start: `center center`,
    end: `+=200`,
    scrub: true,
    onEnter: () => {
      document.querySelector("#home .name").style.animationPlayState = "running";
    },
    onLeaveBack: () => {
      document.querySelector("#home .name").style.animationPlayState = "paused";
    }
  }
});

gsap.to(".hidden", {
  opacity: 1,
  visibility: 'visible',
  scrollTrigger: {
    trigger: `.name`,
    start: `bottom center`,
    end: `+=200`,
    scrub: 0.25
  }
});

// Moving Text Animation
document.addEventListener("DOMContentLoaded", () => {
  function animateMovingText() {
    const movingText = document.querySelector(".moving-text");
    const cursor = document.querySelector(".cursor");

    movingText.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        innerHTML: "<i class='fa-solid fa-volume-high'></i>",
        fontSize: "25px",
        background: "#E8E8E8",
        margin: "20px",
      });

      gsap.to(movingText, {
        background: "#0C0C0C",
        color: "#E8E8E8",
        duration: 0.5,
      });
    });

    movingText.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        innerHTML: "",
        background: "#0C0C0C",
        margin: 0,
      });

      gsap.to(movingText, {
        background: "#E8E8E8",
        color: "#0C0C0C",
        duration: 0.5,
      });
    });
  }
  animateMovingText();
});

// About Section Text Animation
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    const text = new SplitType(char, { types: 'chars' });

    gsap.fromTo(
        text.chars, 
        { color: bg },
        { 
            color: fg, 
            duration: 0.3,
            stagger: 0.05,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse',
            }
        }
    );
});

// Initialize Lenis Library
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// About Section Text Animation
gsap.registerPlugin(ScrollTrigger);
const navbar = document.querySelector('.main-nav');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onEnter: () => gsap.to(navbar, { opacity: 0, visibility: "hidden", duration: 0.5 }),
    onLeaveBack: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
  }
});

const words = document.querySelectorAll('.word');
words.forEach((word, index) => {
  tl.to(word, {
    color: "#E8E8E8",
    duration: 0.3,
    stagger: 0.05,
    ease: "power1.out"
  }, index * 0.05);
});

// Navbar Visibility Control
ScrollTrigger.create({
  trigger: "#projects",
  start: "top bottom",
  end: "bottom bottom",
  onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
});

ScrollTrigger.create({
  trigger: "#project-section",
  start: "top bottom",
  onEnter: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 }),
  onLeave: () => gsap.to(navbar, { opacity: 1, visibility: "visible", duration: 0.5 })
});

// Zoom Text Animation in Projects Section
gsap.fromTo(".zoom-text",
  {
    scale: 3,
    opacity: 1
  },
  {
    scale: .75,
    duration: 1,
    scrollTrigger: {
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    }
  }
);

// Project Section Interaction Animation
document.addEventListener("DOMContentLoaded", () => {
  function animateSection(sectionId) {
    const section = document.querySelector(sectionId);
    const cursor = document.querySelector(".cursor");

    section.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        innerHTML: "<i class='fa-solid fa-volume-high'></i>",
        fontSize: "25px",
        background: "#E8E8E8",
        margin: "20px",
      });

      gsap.to(section, {
        background: "#0C0C0C",
        color: "#E8E8E8",
        duration: 0.5,
      });
    });

    section.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        innerHTML: "",
        background: "#0C0C0C",
        margin: 0,
      });

      gsap.to(section, {
        background: "#E8E8E8",
        color: "#0C0C0C",
        duration: 0.5,
      });
    });
  }
  animateSection("#projects-section");
});

// Image Zoom and Hero Section Scaling
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

// Contact Title Blur and Fade Animation
document.addEventListener("DOMContentLoaded", () => {
  const contactTitle = document.querySelector(".contact-title");

  gsap.set(contactTitle, {
    filter: "blur(10px)",
    opacity: 0
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: contactTitle,
      start: "top top",
      end: "+=900",
      scrub: true,
      pin: false
    }
  })
    .to(contactTitle, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 5
    });
});

console.clear();
