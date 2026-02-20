// app.js
document.querySelectorAll('.qcard').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const element = document.getElementById(target);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    highlight(element);
  });
});

document.querySelectorAll('button[data-next]').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-next');
    const element = document.getElementById(target);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    highlight(element);
  });
});

function highlight(el){
  el.classList.add('glow');
  setTimeout(() => el.classList.remove('glow'), 900);
}

const style = document.createElement('style');
style.textContent = `
  .glow{
    outline: 2px solid rgba(255,255,255,.45);
    box-shadow: 0 0 0 6px rgba(255,255,255,.10), 0 16px 44px rgba(0,0,0,.45);
    transform: translateY(-2px);
    transition: .2s ease;
  }
`;
document.head.appendChild(style);
