// DARK THEME 
const themeToggleBtn = document.getElementById('theme-icon'); 
const body = document.body;


const lightIconPath = './src/assets/img/darklight/light.png';
const darkIconPath = './src/assets/img/darklight/dark.png';


if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleBtn.src = darkIconPath;
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');


  themeToggleBtn.src = isDark ? darkIconPath : lightIconPath;


  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// SCROLL
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    navbar.classList.add('hide-nav');
  } else {
    navbar.classList.remove('hide-nav');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        lastScrollTop = window.pageYOffset;
      }, 100);
    }
  });
});


//_____________________________________________________________




