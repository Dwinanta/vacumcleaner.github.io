 // Toggle navbar
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close navbar when clicking outside
 document.addEventListener('click', (e) => {
     if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
         navLinks.classList.remove('active');
     }
 });

// Scroll to Top Functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Section Animation on Scroll
const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
});

sections.forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Toggle the active class
        faqItem.classList.toggle('active');
    });
});
