(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.dataset.theme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.dataset.theme = 'dark';
  }

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = sectionLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const updateActive = () => {
    const y = window.scrollY + 140;
    let current = null;
    sections.forEach(section => {
      if (section.offsetTop <= y) current = section;
    });
    sectionLinks.forEach(link => {
      link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();