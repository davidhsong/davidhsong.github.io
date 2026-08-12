/* Tab routing, keyboard nav, and the profile photo fallback. */

(function () {
  'use strict';

  /* ---------- photos that may not be in assets/ yet ----------
     Flags the container so CSS can swap in a placeholder. Means a photo
     appears just by dropping the file in, with no HTML to edit. */

  function whenMissing(img, container, className) {
    var mark = function () { container.classList.add(className); };
    img.addEventListener('error', mark);
    // The error may already have fired before this script ran.
    if (img.complete && img.naturalWidth === 0) mark();
  }

  var frame = document.getElementById('avatar-frame');
  var avatar = document.getElementById('avatar');
  if (frame && avatar) whenMissing(avatar, frame, 'no-photo');

  Array.prototype.forEach.call(document.querySelectorAll('.shot'), function (shot) {
    var img = shot.querySelector('img');
    if (img) whenMissing(img, shot, 'missing');
  });

  /* ---------- tabs ---------- */

  var tablist = document.getElementById('tabs');
  if (!tablist) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  var DEFAULT = 'about';
  var BASE_TITLE = 'David Song';

  // Empty or unknown hashes fall back to About.
  function nameFromHash() {
    var name = (window.location.hash || '').replace(/^#\/?/, '');
    return document.getElementById('panel-' + name) ? name : DEFAULT;
  }

  function activate(name) {
    tabs.forEach(function (tab) {
      var isActive = tab.id === 'tab-' + name;

      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      // Roving tabindex: only the selected tab sits in the tab order.
      tab.setAttribute('tabindex', isActive ? '0' : '-1');

      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (!panel) return;

      if (isActive) {
        panel.classList.add('is-active');
        document.title = name === DEFAULT
          ? BASE_TITLE
          : BASE_TITLE + ' / ' + tab.textContent.trim();
      } else {
        panel.classList.remove('is-active');
      }
    });
  }

  function indexOfSelected() {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute('aria-selected') === 'true') return i;
    }
    return 0;
  }

  tablist.addEventListener('keydown', function (event) {
    var current = indexOfSelected();
    var next;

    switch (event.key) {
      case 'ArrowRight': next = (current + 1) % tabs.length; break;
      case 'ArrowLeft':  next = (current - 1 + tabs.length) % tabs.length; break;
      case 'Home':       next = 0; break;
      case 'End':        next = tabs.length - 1; break;
      default: return;
    }

    event.preventDefault();
    window.location.hash = tabs[next].getAttribute('href');
    tabs[next].focus();
  });

  window.addEventListener('hashchange', function () {
    activate(nameFromHash());
    if (window.scrollY > 0) window.scrollTo(0, 0);
  });

  activate(nameFromHash());
})();
