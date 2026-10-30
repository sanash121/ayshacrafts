(function () {
  'use strict';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Lightbox for the works
  var dlg = document.getElementById('lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    var img = document.getElementById('lb-img');
    var title = document.getElementById('lb-title');
    var text = document.getElementById('lb-text');

    document.querySelectorAll('.work').forEach(function (btn) {
      btn.addEventListener('click', function () {
        img.src = btn.dataset.src;
        img.alt = btn.dataset.alt || '';
        title.textContent = btn.dataset.title || '';
        text.textContent = btn.dataset.text || '';
        dlg.showModal();
      });
    });

    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById('hello-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = form.dataset.email;
      var name = form.elements.name.value.trim();
      var msg = form.elements.message.value.trim();
      var subject = encodeURIComponent('Hello from ' + name);
      var body = encodeURIComponent(msg + '\n\n' + name);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
})();
