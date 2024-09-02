document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in effect when scrolling into view
    const sections = document.querySelectorAll('section, footer');
    const options = {
        threshold: 0.1
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });

    // Bounce effect on hover for images
    const images = document.querySelectorAll('.product-item img, .treat-item img, .header-image');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.classList.add('bounce');
        });

        image.addEventListener('animationend', () => {
            image.classList.remove('bounce');
        });
    });
});


