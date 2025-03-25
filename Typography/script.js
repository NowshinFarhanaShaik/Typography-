// GSAP Animations and Effects

document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    gsap.from('.hero-content h1', { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    });
    gsap.from('.hero-content p', { 
        duration: 1.5, 
        y: 30, 
        opacity: 0, 
        delay: 0.3, 
        ease: 'power3.out' 
    });
    
    // Geometric Circles Animation
    gsap.to('.geom-circle', {
        duration: 8,
        x: 'random(-200, 200)',
        y: 'random(-200, 200)',
        scale: 'random(0.5, 1.5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

// 3D Parallax Effect
const parallaxSection = document.querySelector('.parallax-section');
const parallaxLayer = document.querySelector('.parallax-layer');

parallaxSection.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = parallaxSection;

    const xPos = (offsetX / offsetWidth) - 0.5;
    const yPos = (offsetY / offsetHeight) - 0.5;

    const moveX = xPos * 30;  // Control the depth
    const moveY = yPos * 30;

    // Move the parallax layer
    parallaxLayer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
});

// Reset the layer position when the mouse leaves
parallaxSection.addEventListener('mouseleave', () => {
    parallaxLayer.style.transform = 'translate3d(0, 0, 0)';
});


    // Cards Fade-in Effect
    gsap.utils.toArray('.card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Mockup Cards Animation
    gsap.utils.toArray('.mockup-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Footer Animation
    gsap.from('footer', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
});


// Scroll Animation Effect
const sections = document.querySelectorAll('section');

const scrollAnimation = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

// Trigger scroll event on page load and on scroll
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);


// 3D Mouse Interaction on Carousel

// GSAP Animation

// Adding Smooth Mouse Move Interaction for Tilt Effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const xPercent = (offsetX / target.clientWidth) * 100;
        const yPercent = (offsetY / target.clientHeight) * 100;

        // Apply dynamic tilt
        item.style.transform = `rotateX(${(yPercent - 50) / 4}deg) rotateY(${(xPercent - 50) / 4}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        // Reset tilt
        item.style.transform = 'rotateX(0) rotateY(0)';
    });
});


// 🔥 3D Shape Morphing on Click
const shapes = document.querySelectorAll('.shape');
const classes = ['morph-cube', 'morph-sphere', 'morph-pyramid', 'morph-torus'];

shapes.forEach((shape) => {
    shape.classList.add(classes[Math.floor(Math.random() * classes.length)]);

    shape.addEventListener('click', () => {
        const currentClass = shape.classList[1];
        const nextIndex = (classes.indexOf(currentClass) + 1) % classes.length;
        shape.classList.remove(currentClass);
        shape.classList.add(classes[nextIndex]);
    });
});



