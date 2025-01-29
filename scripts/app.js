document.addEventListener('DOMContentLoaded', () => {
    // Dynamic name animation
    const names = ['Venkatesh K', 'DevOps Specialist', 'Java Developer', 'AWS Expert'];
    let nameIndex = 0;
    const nameElement = document.querySelector('.dynamic-name');
    setInterval(() => {
        nameElement.textContent = names[nameIndex];
        nameIndex = (nameIndex + 1) % names.length;
    }, 3000);


    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Typing effect
    const typed = new Typed('.typing', {
        strings: ['Software Engineer', 'DevOps Specialist', 'Cloud Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    // Tabbed Skills Section
document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabIndex = tab.dataset.tab;
        
        // Remove active from all tabs
        document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
        // Add active to current tab
        tab.classList.add('active');
        
        // Hide all skill contents
        document.querySelectorAll('.skill-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show current skill content
        document.querySelectorAll('.skill-content')[tabIndex].classList.add('active');
    });
});

   // Add subtle animations on contact card hover
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('i'), { scale: 1.2, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('i'), { scale: 1, duration: 0.3 });
    });
});
});