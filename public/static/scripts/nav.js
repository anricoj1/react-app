const navToggle = () => {
    const toggler = document.querySelector('.toggler');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');


    toggler.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('active-nav');

        // animate links 
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })
    });
}

navToggle();