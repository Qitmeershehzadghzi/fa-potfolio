// JavaScript for adding some dynamic functionality like smooth scroll or animations can be added here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth Scroll for anchor links
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
