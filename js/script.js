// js/script.js

function filterTrophies(category) {
  const cards = document.querySelectorAll('.trophy-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
