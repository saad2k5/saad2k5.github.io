// ---------- Scroll Reveal ----------
const sections = document.querySelectorAll('.section');

const reveal = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < windowHeight - 100){
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ---------- Typing Animation for Hero ----------
const heroTitle = "Hi, I'm Saad Waqas";
const heroSubtitle = "A passionate developer creating interactive web experiences.";
const heroTitleElem = document.getElementById('hero-title');
const heroSubtitleElem = document.getElementById('hero-subtitle');

function typeText(element, text, delay = 80, callback = null){
  let i = 0;
  function typeChar(){
    if(i < text.length){
      element.innerHTML += text[i];
      i++;
      setTimeout(typeChar, delay);
    } else if(callback) {
      callback();
    }
  }
  typeChar();
}

// Start typing on page load
window.addEventListener('load', () => {
  typeText(heroTitleElem, heroTitle, 100, () => {
    typeText(heroSubtitleElem, heroSubtitle, 50);
  });
});
