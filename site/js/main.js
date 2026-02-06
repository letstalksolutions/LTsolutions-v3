/**
 * LT.Solutions - Shared page JavaScript
 * Scroll reveal, header scroll behaviour, mobile menu toggle,
 * carousel navigation, waitlist forms, and contact form.
 */

(function () {
  'use strict';

  // ── Scroll reveal animation ───────────────────────────────────────

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

  // ── Header scroll behaviour ───────────────────────────────────────

  var header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });

  // ── Mobile menu toggle ────────────────────────────────────────────

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

  // ── Insights carousel navigation ─────────────────────────────────

  var carouselTrack = document.querySelector('.insights-carousel__track');

  if (carouselTrack) {
    document.querySelectorAll('.insights-carousel__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = btn.getAttribute('data-dir');
        var card = carouselTrack.querySelector('.insights-card');
        if (!card) return;
        var cardWidth = card.offsetWidth;
        var gap = parseInt(getComputedStyle(carouselTrack).gap, 10) || 24;
        var scrollAmount = cardWidth + gap;
        carouselTrack.scrollBy({
          left: dir === 'next' ? scrollAmount : -scrollAmount,
          behavior: 'smooth'
        });
      });
    });
  }

  // ── Waitlist form handling ────────────────────────────────────────

  document.querySelectorAll('.waitlist-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var self = this;
      var emailInput = self.querySelector('input[type="email"]');
      var email = emailInput.value;
      var button = self.querySelector('button');
      var originalText = button.textContent;

      button.textContent = 'Sending...';
      button.disabled = true;

      fetch(self.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Submission failed');
        }
        button.textContent = "You're in! \u2713";
        button.style.background = 'var(--color-trust-green)';
        emailInput.value = '';

        setTimeout(function () {
          button.textContent = originalText;
          button.style.background = '';
          button.disabled = false;
        }, 3000);
      })
      .catch(function () {
        button.textContent = 'Error - try again';
        button.style.background = '#ef4444';

        setTimeout(function () {
          button.textContent = originalText;
          button.style.background = '';
          button.disabled = false;
        }, 2000);
      });
    });
  });

  // ── Contact form handling ─────────────────────────────────────────

  var contactForm = document.getElementById('contact-form');
  var contactButton = document.getElementById('contact-submit');
  var contactStatus = document.getElementById('contact-status');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var originalText = contactButton.textContent;
      contactButton.textContent = 'Sending...';
      contactButton.disabled = true;
      contactStatus.className = 'hidden';
      contactStatus.textContent = '';

      var data = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Submission failed');
        }
        contactStatus.textContent = "Thank you! We'll be in touch shortly.";
        contactStatus.className = 'mt-4';
        contactStatus.style.color = 'var(--color-trust-green)';
        contactForm.reset();
        contactButton.textContent = originalText;
        contactButton.disabled = false;
      })
      .catch(function () {
        contactStatus.textContent = 'Something went wrong. Please try again or email us directly.';
        contactStatus.className = 'mt-4';
        contactStatus.style.color = 'var(--color-error)';
        contactButton.textContent = originalText;
        contactButton.disabled = false;
      });
    });
  }

})();
