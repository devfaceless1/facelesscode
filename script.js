document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // віднімаємо висоту хедера (50px)
        behavior: "smooth"
      });
    }
  });
});

const header = document.querySelector('.header-wrapper');
const targetBlock = document.querySelector('#myprojects');

window.addEventListener('scroll', () => {
    const blockTop = targetBlock.getBoundingClientRect().top;
    
    if(blockTop <= 80) { // коли верх блоку дійде до висоти хедера
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
