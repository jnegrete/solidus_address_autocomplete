(function() {
  if (typeof window.CompatibleCustomEvent === 'function') return false;

  function CompatibleCustomEvent(event, params) {
    var newParams = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, newParams.bubbles, newParams.cancelable, newParams.detail);
    return evt;
  }
  CompatibleCustomEvent.prototype = window.Event.prototype;
  window.CompatibleCustomEvent = CompatibleCustomEvent;
})();
