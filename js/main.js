// Main JavaScript for the website

document.addEventListener('DOMContentLoaded', function() {
        // Mobile Navigation Toggle with improved accessibility and touch support
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const header = document.querySelector('.transparent-header');
    
        // Handle transparent header on scroll with debouncing
        if (header) {
            let scrollTimeout;
            
            // Check initial scroll position
            const updateHeaderState = () => {
                const isScrolled = window.scrollY > 100;
                header.classList.toggle('scrolled', isScrolled);
            };
    
            updateHeaderState();
    
            // Add scroll event listener with debouncing
            window.addEventListener('scroll', () => {
                if (scrollTimeout) {
                    window.cancelAnimationFrame(scrollTimeout);
                }
                scrollTimeout = window.requestAnimationFrame(updateHeaderState);
            });
        }
    
        const toggleMenu = (isOpen) => {
            hamburger.classList.toggle('active', isOpen);
            navLinks.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            
            // Update focus management when menu opens
            if (isOpen) {
                // Focus first menu item when menu opens
                const firstMenuItem = navLinks.querySelector('a');
                if (firstMenuItem) {
                    firstMenuItem.focus();
                }
            }
        };
    
        if (hamburger) {
            // Single event handler for both click and touch
            const handleMenuToggle = (e) => {
                e.preventDefault();
                const isCurrentlyOpen = hamburger.classList.contains('active');
                toggleMenu(!isCurrentlyOpen);
            };
    
            hamburger.addEventListener('click', handleMenuToggle);
            hamburger.addEventListener('touchend', handleMenuToggle);
    
            // Handle escape key to close menu
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && hamburger.classList.contains('active')) {
                    toggleMenu(false);
                    hamburger.focus(); // Return focus to hamburger button
                }
            });
        }
    
        // Close mobile menu when clicking or touching a link
        const navItems = document.querySelectorAll('.nav-links li a');
        navItems.forEach(item => {
            const handleNavClick = (e) => {
                if (hamburger?.classList.contains('active')) {
                    if (item.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        const targetId = item.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        
                        toggleMenu(false);
                        
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                            // Set focus to the target element if it's focusable, or its first focusable child
                            if (targetElement.tabIndex >= 0) {
                                targetElement.focus();
                            } else {
                                const focusableElement = targetElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                if (focusableElement) {
                                    focusableElement.focus();
                                }
                            }
                        }
                    } else {
                        // For external links, close menu and allow default navigation
                        toggleMenu(false);
                    }
                }
            };
    
            item.addEventListener('click', handleNavClick);
            item.addEventListener('touchend', handleNavClick);
        });

    // Load template previews on home page
    const templateGallery = document.querySelector('.template-gallery');
    if (templateGallery) {
        loadTemplateGallery();
    }

    // Smooth scrolling for anchor links with touch support
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Mouse click event
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
        
        // Touch event for mobile
        anchor.addEventListener('touchend', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
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

import { config } from './config.js';

// Define template categories and search queries
const templateData = [
    {
        id: 1,
        name: 'Elegant Bistro',
        category: 'Restaurant',
        query: 'restaurant food',
        description: 'Perfect for fine dining establishments'
    },
    {
        id: 2,
        name: 'Modern Cafe',
        category: 'Cafe',
        query: 'coffee cafe',
        description: 'Contemporary design for cafes and coffee shops'
    },
    {
        id: 3,
        name: 'Italian Pizzeria',
        category: 'Restaurant',
        query: 'pizza italian',
        description: 'Authentic Italian restaurant menu template'
    },
    {
        id: 4,
        name: 'Sushi Bar',
        category: 'Restaurant',
        query: 'sushi japanese',
        description: 'Elegant design for Japanese restaurants'
    },
    {
        id: 5,
        name: 'Breakfast Menu',
        category: 'Cafe',
        query: 'breakfast pancakes',
        description: 'Bright and cheerful breakfast menu design'
    },
    {
        id: 6,
        name: 'Cocktail List',
        category: 'Bar',
        query: 'cocktail bar',
        description: 'Sophisticated cocktail menu template'
    }
];

// Function to create template item with proper accessibility
function createTemplateItem(template) {
    const templateItem = document.createElement('article');
    templateItem.className = 'template-item';
    templateItem.setAttribute('role', 'listitem');
    
    const img = document.createElement('img');
    img.src = template.thumbnail;
    img.alt = `Preview of ${template.name} template`;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'template-overlay';
    overlay.innerHTML = `
        <h3>${template.name}</h3>
        <p>${template.category}</p>
        <p class="template-description">${template.description}</p>
    `;
    
    const link = document.createElement('a');
    link.href = `editor.html?template=${template.id}`;
    link.setAttribute('role', 'button');
    link.setAttribute('aria-label', `Use ${template.name} template`);
    link.appendChild(img);
    link.appendChild(overlay);
    
    templateItem.appendChild(link);
    
    return templateItem;
}

// Function to show error message
function showError(container, message) {
    container.innerHTML = `
        <div class="error" role="alert">
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            <p>${message}</p>
            <button class="btn-secondary" onclick="window.location.reload()">Try Again</button>
        </div>
    `;
}

// Function to load template gallery on home page
async function loadTemplateGallery() {
    const templateGallery = document.querySelector('.template-gallery');
    if (!templateGallery) return;

    // Show loading state
    templateGallery.innerHTML = `
        <div class="loading" role="status" aria-live="polite">
            <i class="fas fa-spinner fa-spin" aria-hidden="true"></i>
            <span>Loading templates...</span>
        </div>
    `;

    try {
        // Display only the first n templates on the home page
        const displayTemplates = templateData.slice(0, config.templates.previewCount);
        
        // Create a loading delay for better UX
        const loadingDelay = new Promise(resolve =>
            setTimeout(resolve, config.templates.loadingDelay)
        );

        // Fetch images for each template
        const fetchPromises = displayTemplates.map(async template => {
            try {
                const response = await fetch(
                    `${config.endpoints.pexels}?query=${encodeURIComponent(template.query)}&per_page=1`,
                    {
                        headers: {
                            'Authorization': config.apiKeys.pexels
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                
                return {
                    ...template,
                    thumbnail: data.photos?.[0]?.src.medium ||
                        `https://via.placeholder.com/600x400?text=${encodeURIComponent(template.name)}`
                };
            } catch (error) {
                console.warn(`Error fetching image for ${template.name}:`, error);
                return {
                    ...template,
                    thumbnail: `https://via.placeholder.com/600x400?text=${encodeURIComponent(template.name)}`
                };
            }
        });

        // Wait for all fetches and loading delay
        const [templatesWithImages] = await Promise.all([
            Promise.all(fetchPromises),
            loadingDelay
        ]);

        // Clear the gallery and add new content
        templateGallery.innerHTML = '';
        
        // Add gallery description for screen readers
        templateGallery.setAttribute('aria-label', 'Template Gallery');
        
        // Create and append template items
        templatesWithImages.forEach(template => {
            templateGallery.appendChild(createTemplateItem(template));
        });

        // Add "View More" button
        const viewMoreContainer = document.createElement('div');
        viewMoreContainer.className = 'view-more-btn';
        viewMoreContainer.innerHTML = `
            <a href="editor.html" class="btn-secondary" role="button" aria-label="View all templates">
                View More Templates
            </a>
        `;
        templateGallery.appendChild(viewMoreContainer);

    } catch (error) {
        console.error('Error loading template images:', error);
        showError(
            templateGallery,
            'We encountered an error loading the templates. Please try again later.'
        );
    }
}