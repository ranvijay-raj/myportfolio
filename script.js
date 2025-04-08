let premm = gsap.matchMedia();
let pretl = gsap.timeline()
premm.add("(min-width: 800px)", () => {
    pretl.from(".circle", {
      y: -500,
      duration: 1.5,
      ease: "bounce.out",
    })
    pretl.to(".circle",{
      x: "46vw",
      duration: 1.5,
      rotate: 360,
      ease: "power2.inOut"
    })
    pretl.to(".circle",{
      scale: 23
    })
    pretl.to(".loader",{
      opacity: 0,
      onComplete: ()=>{
        document.querySelector(".loader").style.display = "none"
      }
    })
});
const scroll = new FeatherScroll();
let links = document.querySelector(".links")
let intro = document.getElementById("intro")
let alter = document.getElementsByClassName("alter")
let changemode = (el)=>{
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        el.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" onclick="changemode(this)" width="30" height="30" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>`;
      } else {
        el.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" onclick="changemode(this)" width="30" height="30" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
              </svg>`;
    }
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
}
let visibility = (el)=>{
    links.classList.toggle("show")
    if (el.id == "hamburger") {
        el.style.visibility = "hidden"
    } else {
        document.getElementById("hamburger").style.visibility = "visible"
    }
}
let taketo = (destination)=>{
    links.classList.remove("show")
    document.getElementById("hamburger").style.visibility = "visible"
    scroll.scrollTo(destination);
}
let preTextAnimation = ()=>{
    let splittedText = intro.textContent.split("")
    let clutter = ""
    splittedText.forEach((letter)=>{
        clutter += `<span>${letter}</span>`
    })
    intro.innerHTML = clutter
}
const aboutAnimate = (target, start = "top 90%") => {
    gsap.from(target, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        scroller: "body",
        start: start
      },
    });
  };
preTextAnimation()
if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
    let arr = Array.from(alter)
    arr.forEach((elem)=>{
        elem.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" onclick="changemode(this)" width="30" height="30" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>`
    })
}
pretl.from("header", {
    y: -50,
    opacity: 0,
    duration: 1
})
pretl.from("#hero img",{
    opacity: 0,
    duration: 0.4
})
pretl.from("#intro span", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.1
})
pretl.from(".texts #span",{
    opacity: 0,
    duration: 1
})
aboutAnimate("#about h2");
aboutAnimate("#about img");
aboutAnimate("#about p");
gsap.utils.toArray(".card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top 60%"
      },
    });
});
let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
    gsap.to(".cardContainer", {
        transform: "translateX(-100%)",
        scrollTrigger: {
            trigger: "#projects",
            scroller: "body",
            scrub: 2,
            pin: true,
            start: "top 0%",
            end: "top -100%"
        }
    })
});

mm.add("(max-width: 800px)", () => {
    // ✅ Mobile & Tablet Animation
    gsap.to(".cardContainer", {
        transform: "translateX(-315%)",
        scrollTrigger: {
            trigger: "#projects",
            scroller: "body",
            scrub: 2,
            pin: true,
            start: "top 0%",
            end: "top -100%"
        }
    })
});
gsap.from(".input-wrapper", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%"
    }
  });

  // Button press effect
  document.querySelector(".submit-btn").addEventListener("mousedown", () => {
    gsap.to(".submit-btn", { scale: 0.95, duration: 0.1 });
  });

  document.querySelector(".submit-btn").addEventListener("mouseup", () => {
    gsap.to(".submit-btn", { scale: 1, duration: 0.1 });
  });
