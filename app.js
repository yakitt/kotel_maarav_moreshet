document.querySelectorAll('.qcard').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const element = document.getElementById(target);

    element.scrollIntoView({
      behavior: 'smooth'
    });

    element.style.boxShadow = "0 0 20px #7ee0ff";
    setTimeout(() => {
      element.style.boxShadow = "none";
    }, 800);
  });
});