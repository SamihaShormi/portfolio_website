const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Change icon
  if(body.classList.contains('dark-mode')){
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});
