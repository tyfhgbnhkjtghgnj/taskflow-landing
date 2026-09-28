'use strict';

// Mobile navigation retains native anchor behavior and keyboard access.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

// Sample tasks are intentionally kept in memory; no accounts or data collection.
const tasks = [...document.querySelectorAll('.task input')];
function updateProgress() {
  const count = tasks.filter(task => task.checked).length;
  const percent = Math.round(count / tasks.length * 100);
  document.querySelector('#completed-count').replaceChildren(
    document.createTextNode(String(count).padStart(2, '0'))
  );
  const detail = document.createElement('span');
  detail.className = 'stat-detail';
  detail.textContent = ' / nice work';
  document.querySelector('#completed-count').append(detail);
  document.querySelector('#progress-percent').textContent = `${percent}%`;
  const progress = document.querySelector('#task-progress');
  progress.value = count;
  progress.textContent = `${percent}%`;
  const messages = ['A fresh start.', 'A good start.', 'Halfway there.', 'Almost there.', 'All done. Go take that walk.'];
  document.querySelector('#progress-label').textContent = `${count} of ${tasks.length} complete. ${messages[count]}`;
}
tasks.forEach(task => task.addEventListener('change', updateProgress));
updateProgress();

// Annual price is a monthly equivalent: $8 × 12 = $96, a 20% discount.
document.querySelectorAll('[data-billing]').forEach(button => {
  button.addEventListener('click', () => {
    const yearly = button.dataset.billing === 'yearly';
    document.querySelectorAll('[data-billing]').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#pro-price').textContent = yearly ? '8' : '10';
    document.querySelector('#billing-note').textContent = yearly
      ? '$96 per person, billed yearly. Save 20%.'
      : '$10 per person, billed monthly.';
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
