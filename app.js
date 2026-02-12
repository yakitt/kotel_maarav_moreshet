// app.js

// 1) Клик по карточке-вопросу -> плавно к нужному ответу + подсветка
document.querySelectorAll('.qcard').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    highlight(el);
  });
});

// 2) Кнопка "следующая" внутри ответов
document.querySelectorAll('button[data-next]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-next');
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    highlight(el);
  });
});

function highlight(el){
  el.classList.add('glow');
  setTimeout(() => el.classList.remove('glow'), 900);
}

// CSS для подсветки добавим динамически, чтобы не искать в style.css
const style = document.createElement('style');
style.textContent = `
  .glow{
    outline: 2px solid rgba(255,255,255,.45);
    box-shadow: 0 0 0 6px rgba(255,255,255,.08), 0 18px 50px rgba(0,0,0,.40);
    transform: translateY(-2px);
    transition: .2s ease;
  }
`;
document.head.appendChild(style);
