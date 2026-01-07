// TYPING EFFECT
const roles = [
  "Electrical Engineering Student",
  "C++ & Python Programmer",
  "Robotics Enthusiast",
  "Tech Explorer"
];

let index = 0;
let charIndex = 0;
let typingElement = document.querySelector('.typing');

function type() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// FADE-IN ON SCROLL
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationDelay = "0s";
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

