export function announce(message) {
  const region = document.querySelector('[data-announcer]');
  if (!region) return;
  region.textContent = message;
}
