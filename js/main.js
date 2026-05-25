(function () {
  'use strict';

  // ── Language toggle ──────────────────────────────────────────────
  let currentLang = localStorage.getItem('lang') || 'de';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-de]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (!text) return;
      if (el.tagName === 'INPUT' || el.tagName === 'OPTION') {
        el.textContent = text;
      } else if (el.tagName === 'TEXTAREA') {
        // leave placeholder alone
      } else {
        el.textContent = text;
      }
    });

    // Update select option text
    document.querySelectorAll('select option[data-de]').forEach(function (opt) {
      var text = opt.getAttribute('data-' + lang);
      if (text) opt.textContent = text;
    });

    // Update page title
    if (lang === 'en') {
      document.title = 'lokalonline — Websites for Vienna\'s small businesses';
    } else {
      document.title = 'lokalonline — Websites für Wiener Kleinunternehmen';
    }

    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

    // Update form placeholders
    var placeholders = {
      de: { name: 'Maria Mustermann', business: 'Café Wien', email: 'maria@example.at', phone: '+43 660 000 00 00', message: 'Erzählen Sie uns kurz von Ihrem Betrieb...' },
      en: { name: 'Maria Sample', business: 'Café Vienna', email: 'maria@example.at', phone: '+43 660 000 00 00', message: 'Tell us briefly about your business...' }
    };
    var p = placeholders[lang];
    setPlaceholder('name', p.name);
    setPlaceholder('business', p.business);
    setPlaceholder('email', p.email);
    setPlaceholder('phone', p.phone);
    setPlaceholder('message', p.message);
  }

  function setPlaceholder(id, text) {
    var el = document.getElementById(id);
    if (el) el.placeholder = text;
  }

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(currentLang === 'de' ? 'en' : 'de');
    });
  }

  // Apply saved language on load (skip if 'de' since HTML already defaults to German)
  if (currentLang === 'en') applyLang('en');

  // ── Mobile nav burger ─────────────────────────────────────────────
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('navMobile');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Pricing toggle ────────────────────────────────────────────────
  var billingToggle = document.getElementById('billingToggle');

  function updatePrices(yearly) {
    document.querySelectorAll('.price-amount').forEach(function (el) {
      var monthly = parseFloat(el.getAttribute('data-monthly'));
      var yearlyVal = parseFloat(el.getAttribute('data-yearly'));
      if (yearly) {
        el.textContent = '€' + yearlyVal.toFixed(2).replace('.00', '');
      } else {
        el.textContent = '€' + monthly;
      }
    });

    var perLabels = document.querySelectorAll('.price-per');
    perLabels.forEach(function (el) {
      var deText = yearly ? '/Monat*' : '/Monat';
      var enText = yearly ? '/month*' : '/month';
      el.setAttribute('data-de', deText);
      el.setAttribute('data-en', enText);
      el.textContent = currentLang === 'en' ? enText : deText;
    });
  }

  if (billingToggle) {
    billingToggle.addEventListener('change', function () {
      updatePrices(this.checked);
    });
  }

  // ── Contact form ──────────────────────────────────────────────────
  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action');
      // If still using placeholder, prevent submission and show notice
      if (action && action.includes('REPLACE_ME')) {
        e.preventDefault();
        if (successMsg) {
          successMsg.querySelector('span').textContent =
            currentLang === 'en'
              ? '⚠ Form not yet configured. Please contact us directly.'
              : '⚠ Formular noch nicht konfiguriert. Bitte kontaktieren Sie uns direkt.';
          successMsg.classList.add('show');
        }
        return;
      }

      e.preventDefault();
      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (successMsg) successMsg.classList.add('show');
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(function () {
          alert(
            currentLang === 'en'
              ? 'Something went wrong. Please try again or contact us directly.'
              : 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
          );
        });
    });
  }

  // ── Footer year ───────────────────────────────────────────────────
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Smooth scroll for nav links ───────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Nav shadow on scroll ──────────────────────────────────────────
  var navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        navWrapper.style.boxShadow = '0 2px 20px rgba(30,58,95,0.1)';
      } else {
        navWrapper.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();
