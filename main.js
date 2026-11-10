/* Tab routing, keyboard navigation, image fallbacks, and blog photo decks. */

(function () {
  'use strict';

  function markMissingImage(img, container, className) {
    var mark = function () { container.classList.add(className); };
    img.addEventListener('error', mark);
    if (img.complete && img.naturalWidth === 0) mark();
  }

  var frame = document.getElementById('avatar-frame');
  var avatar = document.getElementById('avatar');
  if (frame && avatar) markMissingImage(avatar, frame, 'no-photo');

  /* ---------- arrow-only photo decks ---------- */

  Array.prototype.forEach.call(document.querySelectorAll('[data-photo-deck]'), function (deck) {
    var slides = Array.prototype.slice.call(deck.querySelectorAll('[data-slide]'));
    var previous = deck.querySelector('[data-gallery-prev]');
    var next = deck.querySelector('[data-gallery-next]');
    var currentLabel = deck.querySelector('[data-gallery-current]');
    var totalLabel = deck.querySelector('[data-gallery-total]');
    var index = 0;

    if (!slides.length) return;
    if (totalLabel) totalLabel.textContent = String(slides.length);

    function render() {
      slides.forEach(function (slide, slideIndex) {
        slide.hidden = slideIndex !== index;
      });
      if (currentLabel) currentLabel.textContent = String(index + 1);
    }

    function move(step) {
      index = (index + step + slides.length) % slides.length;
      render();
    }

    if (slides.length < 2) {
      if (previous) previous.hidden = true;
      if (next) next.hidden = true;
    } else {
      deck.setAttribute('tabindex', '0');
      if (previous) previous.addEventListener('click', function () { move(-1); });
      if (next) next.addEventListener('click', function () { move(1); });

      deck.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
      });
    }

    render();
  });

  /* ---------- tab routing ---------- */

  var tablist = document.getElementById('tabs');
  if (!tablist) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  var DEFAULT = 'about';
  var BASE_TITLE = 'David Song';

  function nameFromHash() {
    var name = (window.location.hash || '').replace(/^#\/?/, '');
    return document.getElementById('panel-' + name) ? name : DEFAULT;
  }

  function activate(name) {
    tabs.forEach(function (tab) {
      var isActive = tab.id === 'tab-' + name;
      var panel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');

      if (!panel) return;
      panel.classList.toggle('is-active', isActive);

      if (isActive) {
        document.title = name === DEFAULT
          ? BASE_TITLE + ' - Full-Stack Software Engineer'
          : BASE_TITLE + ' / ' + tab.textContent.trim();
      }
    });
  }

  function indexOfSelected() {
    for (var i = 0; i < tabs.length; i += 1) {
      if (tabs[i].getAttribute('aria-selected') === 'true') return i;
    }
    return 0;
  }

  tablist.addEventListener('keydown', function (event) {
    var current = indexOfSelected();
    var nextIndex;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (current + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (current - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    window.location.hash = tabs[nextIndex].getAttribute('href');
    tabs[nextIndex].focus();
  });

  window.addEventListener('hashchange', function () {
    activate(nameFromHash());
    if (window.scrollY > 0) window.scrollTo(0, 0);
  });

  activate(nameFromHash());
})();
