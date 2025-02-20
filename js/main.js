document.addEventListener('DOMContentLoaded', function() {
    const contactContainer = document.querySelector('.contact-container');
    
    const submitButton = document.querySelector('.submit-btn');
    
    const inputFields = document.querySelectorAll('input, textarea');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      contactContainer.style.backgroundColor = randomColor;
    })
})