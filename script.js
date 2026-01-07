// Scroll reveal effect
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
