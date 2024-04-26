document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/') + 1);

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === filename) {
            link.classList.add('active');
        }
    });
});
