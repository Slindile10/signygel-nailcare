const nails = document.querySelectorAll('.nail');

nails.forEach((nail) => {
  nail.addEventListener('click', () => {
    nail.classList.toggle('open');
  });
});
