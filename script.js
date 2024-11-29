document.addEventListener("DOMContentLoaded", () => {
  // Płynne przewijanie
  const links = document.querySelectorAll('.navbar a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    });
  });

  // Podświetlanie aktywnej sekcji
  const sections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('is-active');
      }
    });
  });
});
