document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation when element enters viewport
                entry.target.classList.add('visible');
            } else {
                // Optional: Remove the visible class to reverse the animation when the element exits the viewport
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    // Collect all elements to observe
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
        document.querySelector('.text-section'),
        document.querySelector('.membership-banner'),
        ...document.querySelectorAll('.feature-item'),
        document.querySelector('.subscription-box'),
        ...document.querySelectorAll('.review-card'),
        ...document.querySelectorAll('.container p, .footer-container, .footer-bottom'),
        ...document.querySelectorAll('.left, .right, .service') // Added this line to merge the observation of these elements
    ].filter(Boolean); // Removes null values in case some elements don't exist

    // Observe all collected elements
    elementsToObserve.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      // Hide preloader after animation
      document.querySelector('.preloader').style.display = 'none';
    }, 1000); // Hide after 6 seconds (the duration of animation)
  });
  
 
  
