document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(link.getAttribute('href'), '_blank');
        });
    });
});