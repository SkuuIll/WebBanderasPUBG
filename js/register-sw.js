(function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', function onLoad() {
    navigator.serviceWorker.register('./sw.js').catch(function onError(error) {
      console.warn('Service Worker registration failed:', error);
    });
  }, { once: true });
})();
