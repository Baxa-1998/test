export const splitTextToSpans = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;
  const text = element.textContent;
  const chars = text.split('').map(char => `<span class="char">${char}</span>`).join('');
  element.innerHTML = chars;
};