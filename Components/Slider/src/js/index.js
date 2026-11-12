const container = document.getElementById('difficultySlider');
const options = container.querySelectorAll('.slider-option');
let selectedDifficulty = 'Easy';
options.forEach((option, index) => {
  option.addEventListener('click', () => {
    selectedDifficulty = option.getAttribute('data-value');
    container.style.setProperty('--active-index', index);
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
}); 