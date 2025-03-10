document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

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
        ...document.querySelectorAll('.left, .right, .service')
    ].filter(Boolean); 

    elementsToObserve.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      document.querySelector('.preloader').style.display = 'none';
    }, 6000); 
  });
  
 
  

  function openModal() {
    document.getElementById('membershipModal').style.display = 'flex';
  }
  function closeModal() {
    document.getElementById('membershipModal').style.display = 'none';
  }
  window.onclick = function (event) {
    const modal = document.getElementById('membershipModal');
    if (event.target === modal) {
      closeModal();
    }
  };
  
  
