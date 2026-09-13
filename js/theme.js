(function applyStoredTheme() {
  try {
    var stored = localStorage.getItem('flagforge_theme');
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    var isLight = stored === 'light' || (!stored && prefersLight);
    if (isLight) document.documentElement.classList.add('light');
  } catch (error) {
    // A blocked storage API should not stop the editor from loading.
  }
})();
