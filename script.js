function select(elt) {
  let el = document.querySelectorAll(elt);
  return el.length === 1 ? el[0] : el;
}
// selecting elements
const img = select(".img");
const nav_container = select(".nav-container");
const welcome_text = select("h1");
const body = document.body;

window.addEventListener("scroll", () => {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  if (scroll > 50) {
    gsap.to(img, {
      scale: 0.9,
      top: -40
    });
    gsap.to(welcome_text, {
      opacity: 0,
      y: -100
    });
  } else {
    gsap.to(img, {
      scale: 1,
      top: 0
    });
    gsap.to(welcome_text, {
      opacity: 1,
      y: 0
    });
  }
});

// implementing IntersectionObserver
const options = {
  threshold: 0.6
};
const observer = new IntersectionObserver(callback, options);
function callback(entries, observer) {
  entries.forEach((entry) => {
    let photo = entry.target.querySelector("div");
    let p = entry.target.querySelector("p");
    if (entry.isIntersecting) {
      gsap.to(photo, {
        height: 400,
        top: "+=50"
      });
      gsap.to(p, {
        scale: 1,
        opacity: 1,
        top: "+=30",
        delay: 0.3
      });
    } else {
      gsap.to(photo, {
        height: 0,
        top: "-=50",
        delay: 0.3
      });
      gsap.to(p, {
        scale: 0.8,
        top: "-=30",
        opacity: 0
      });
    }
  });
}
[...select(".section")].forEach((section) => observer.observe(section));