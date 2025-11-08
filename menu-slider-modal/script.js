const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
function toggleNav() {
    document.body.classList.toggle('show-nav');
}

// Show modal
function openModal() {
    modal.classList.add('show-modal');
}

// Hide modal
function closeModal() {
    modal.classList.remove('show-modal');
}

// Event listeners
toggle.addEventListener('click', toggleNav);
open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
window.addEventListener('click',
    e => e.target === modal ? closeModal() : false);