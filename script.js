document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const headerText = document.querySelector('h1');
    const tagline = document.querySelector('.tagline');

    // Animate elements with a slight delay between them
    setTimeout(() => {
        logo.classList.add('visible');
    }, 500);

    setTimeout(() => {
        headerText.classList.add('visible');
    }, 1000);

    setTimeout(() => {
        tagline.classList.add('visible');
    }, 1500);
});
