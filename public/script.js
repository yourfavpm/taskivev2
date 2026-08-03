// ===== Scroll progress bar =====
(function(){
  const bar = document.getElementById('scroll-progress');
  if(!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  });
})();

// ===== Reveal on scroll =====
(function(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        const icon = e.target.querySelector('.icon');
        if(icon) icon.classList.add('drawn');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// ===== Draw icons that are already in view on load (e.g. hero) =====
window.addEventListener('load', () => {
  document.querySelectorAll('.icon.draw-on-load').forEach(i => i.classList.add('drawn'));
});

// ===== Section dot-nav (homepage) =====
(function(){
  const dotnav = document.querySelector('.dotnav');
  if(!dotnav) return;
  const links = dotnav.querySelectorAll('a');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
  window.addEventListener('scroll', () => {
    let current = 0;
    sections.forEach((sec, i) => {
      if(sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.4) current = i;
    });
    links.forEach((l,i) => l.classList.toggle('active', i === current));
  });
})();

// ===== Main nav active link (homepage sections) =====
(function(){
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  if(!navLinks.length) return;
  const sections = Array.from(navLinks).map(l => {
    const href = l.getAttribute('href');
    const hash = href.includes('#') ? '#' + href.split('#')[1] : href;
    try { return document.querySelector(hash); } catch(e) { return null; }
  });
  window.addEventListener('scroll', () => {
    let current = -1;
    sections.forEach((sec, i) => {
      if(sec && sec.getBoundingClientRect().top <= 140) current = i;
    });
    navLinks.forEach((l,i) => l.classList.toggle('active', i === current));
  });
})();

// ===== Case study TOC active state =====
(function(){
  const tocLinks = document.querySelectorAll('.cs-toc a');
  if(!tocLinks.length) return;
  const sections = Array.from(tocLinks).map(l => {
    const href = l.getAttribute('href');
    const hash = href.includes('#') ? '#' + href.split('#')[1] : href;
    try { return document.querySelector(hash); } catch(e) { return null; }
  });
  window.addEventListener('scroll', () => {
    let current = 0;
    sections.forEach((sec, i) => {
      if(sec && sec.getBoundingClientRect().top <= 160) current = i;
    });
    tocLinks.forEach((l,i) => l.classList.toggle('active', i === current));
  });
})();

// ===== Testimonial carousel (keeps existing dark-card style, adds rotation) =====
(function(){
  const wrap = document.querySelector('.testimonial-wrap');
  if(!wrap) return;
  const slides = wrap.querySelectorAll('.t-slide');
  const dots = wrap.querySelectorAll('.t-dots button');
  let i = 0, timer;

  function show(n){
    slides.forEach((s,idx) => s.classList.toggle('active', idx===n));
    dots.forEach((d,idx) => d.classList.toggle('active', idx===n));
    i = n;
  }
  function next(){ show((i+1) % slides.length); }
  function prev(){ show((i-1+slides.length) % slides.length); }
  function restart(){ clearInterval(timer); timer = setInterval(next, 6000); }

  dots.forEach((d,idx) => d.addEventListener('click', () => { show(idx); restart(); }));
  const nextBtn = wrap.querySelector('.t-next');
  const prevBtn = wrap.querySelector('.t-prev');
  if(nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });
  if(prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });

  show(0);
  restart();
})();
