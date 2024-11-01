// Responsive Navigation Toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
  const navList = document.querySelector('.responsive-nav ul');
  navList.classList.toggle('show');
});

// Smooth Scroll for Internal Links (Enhanced with JavaScript if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Prevent default behavior
    e.preventDefault();

    // Get the target section
    const target = document.querySelector(this.getAttribute('href'));

    // Scroll to the target section smoothly
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
