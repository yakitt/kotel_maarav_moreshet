// app.js
document.querySelectorAll('.qcard').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    glow(el);
  });
});

document.querySelectorAll('button[data-next]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-next');
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    glow(el);
  });
});

function glow(el){
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
