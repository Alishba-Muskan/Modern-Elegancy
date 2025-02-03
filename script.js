document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    const elementsToObserve = [
        ...document.querySelectorAll('.product-card'),
        document.querySelector('.text-content'),
        document.querySelector('.image-content'),
        document.querySelector('.left'),
        document.querySelector('.right'),
        ...document.querySelectorAll('.container3 .service'),
        document.querySelector('.slider1'),
        ...document.querySelectorAll('.slide-track1 img'),
        document.querySelector('.container1'),
        document.querySelector('.image-section'),
        document.querySelector('.text-section')
    ].filter(Boolean);

    elementsToObserve.forEach(element => observer.observe(element));
});
