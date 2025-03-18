// Main JavaScript for the website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Load template previews on home page
    const templateGallery = document.querySelector('.template-gallery');
    if (templateGallery) {
        loadTemplateGallery();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .template-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Function to load template gallery on home page
function loadTemplateGallery() {
    const templateGallery = document.querySelector('.template-gallery');
    
    // Sample template data (in a real app, this might come from an API)
    const templates = [
        {
            id: 1,
            name: 'Elegant Bistro',
            category: 'Restaurant',
            thumbnail: 'assets/templates/template1.jpg'
        },
        {
            id: 2,
            name: 'Modern Cafe',
            category: 'Cafe',
            thumbnail: 'assets/templates/template2.jpg'
        },
        {
            id: 3,
            name: 'Italian Pizzeria',
            category: 'Restaurant',
            thumbnail: 'assets/templates/template3.jpg'
        },
        {
            id: 4,
            name: 'Sushi Bar',
            category: 'Restaurant',
            thumbnail: 'assets/templates/template4.jpg'
        },
        {
            id: 5,
            name: 'Breakfast Menu',
            category: 'Cafe',
            thumbnail: 'assets/templates/template5.jpg'
        },
        {
            id: 6,
            name: 'Cocktail List',
            category: 'Bar',
            thumbnail: 'assets/templates/template6.jpg'
        }
    ];

    // Display only the first 3 templates on the home page
    const displayTemplates = templates.slice(0, 3);
    
    displayTemplates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `
            <img src="${template.thumbnail}" alt="${template.name}">
            <div class="template-overlay">
                <h3>${template.name}</h3>
                <p>${template.category}</p>
            </div>
        `;
        
        // Add click event to open the template in the editor
        templateItem.addEventListener('click', () => {
            window.location.href = `editor.html?template=${template.id}`;
        });
        
        templateGallery.appendChild(templateItem);
    });
}