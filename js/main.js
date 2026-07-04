/* RUconnect — interactions */
(function () {
  'use strict';

  // Sticky nav shadow
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('stuck');
    else nav.classList.remove('stuck');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // FAQ accordion
  var faqs = document.querySelectorAll('.faq');
  faqs.forEach(function (item) {
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqs.forEach(function (f) { f.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Reveal on scroll
  var revealed = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('on'); });
  }
})();
