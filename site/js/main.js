/**
 * LT.Solutions - Shared page JavaScript
 * Scroll reveal, header scroll behaviour, and mobile menu toggle.
 */

(function () {
  'use strict';

  // Scroll reveal animation
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  // Header scroll behaviour
  var header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // Mobile menu toggle
  var navToggle = document.querySelector('.nav__toggle');
  var navMenu = document.querySelector('.nav__menu');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.contains('nav__menu--open');
      navMenu.classList.toggle('nav__menu--open');
      navToggle.setAttribute('aria-expanded', !isOpen);
    });
  }

  // Close mobile menu when a nav link is clicked
  if (navMenu) {
    navMenu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('nav__menu--open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
})();
