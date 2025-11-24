document.addEventListener('DOMContentLoaded', function () {
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

if (!toggle || !menu) return;

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    toggle.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('show');
    toggle.classList.remove('active');
    });
});
});