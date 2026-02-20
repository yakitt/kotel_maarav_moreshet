document.querySelectorAll('.qcard').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const element = document.getElementById(target);

    element.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
