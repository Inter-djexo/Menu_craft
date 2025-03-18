// Templates functionality

// Load templates in the sidebar
function loadTemplates() {
    const templatesContainer = document.getElementById('templates-container');
    
    // Sample template data (in a real app, this might come from an API)
    const templates = [
        {
            id: 1,
            name: 'Elegant Bistro',
            thumbnail: 'assets/templates/template1.jpg'
        },
        {
            id: 2,
            name: 'Modern Cafe',
            thumbnail: 'assets/templates/template2.jpg'
        },
        {
            id: 3,
            name: 'Italian Pizzeria',
            thumbnail: 'assets/templates/template3.jpg'
        },
        {
            id: 4,
            name: 'Sushi Bar',
            thumbnail: 'assets/templates/template4.jpg'
        },
        {
            id: 5,
            name: 'Breakfast Menu',
            thumbnail: 'assets/templates/template5.jpg'
        },
        {
            id: 6,
            name: 'Cocktail List',
            thumbnail: 'assets/templates/template6.jpg'
        }
    ];
    
    templates.forEach(template => {
        const templateThumb = document.createElement('div');
        templateThumb.className = 'template-thumbnail';
        templateThumb.setAttribute('data-template-id', template.id);
        templateThumb.innerHTML = `<img src="${template.thumbnail}" alt="${template.name}" title="${template.name}">`;
        
        templateThumb.addEventListener('click', function() {
            loadTemplateById(template.id);
        });
        
        templatesContainer.appendChild(templateThumb);
    });
}

// Generate a random template
// Generate a truly random template with unique combinations
function generateRandomTemplate() {
    const canvas = document.getElementById('editor-canvas');
    
    // Clear the canvas
    canvas.innerHTML = '';
    
    // Generate random background color or pattern
    const backgroundStyles = [
        { backgroundColor: '#f8f5f0' },
        { backgroundColor: '#ffffff' },
        { backgroundColor: '#f0f5f8' },
        { backgroundColor: '#f5f0f8' },
        { backgroundColor: '#f0f8f5' },
        { backgroundImage: 'linear-gradient(to right, #f6f6f6, #e9e9e9)' },
        { backgroundImage: 'linear-gradient(45deg, #f8f8f8 25%, #f0f0f0 25%, #f0f0f0 50%, #f8f8f8 50%, #f8f8f8 75%, #f0f0f0 75%, #f0f0f0)' }
    ];
    
    const randomBackground = backgroundStyles[Math.floor(Math.random() * backgroundStyles.length)];
    Object.keys(randomBackground).forEach(key => {
        canvas.style[key] = randomBackground[key];
    });
    
    // Random fonts for headings and body text
    const headingFonts = ['Playfair Display, serif', 'Oswald, sans-serif', 'Montserrat, sans-serif', 'Roboto Slab, serif', 'Merriweather, serif'];
    const bodyFonts = ['Montserrat, sans-serif', 'Roboto, sans-serif', 'Open Sans, sans-serif', 'Lato, sans-serif', 'Raleway, sans-serif'];
    
    const randomHeadingFont = headingFonts[Math.floor(Math.random() * headingFonts.length)];
    const randomBodyFont = bodyFonts[Math.floor(Math.random() * bodyFonts.length)];
    
    // Random color schemes
    const colorSchemes = [
        { primary: '#2c3e50', secondary: '#7f8c8d', accent: '#d4af37' },
        { primary: '#3498db', secondary: '#2c3e50', accent: '#e74c3c' },
        { primary: '#27ae60', secondary: '#2c3e50', accent: '#f1c40f' },
        { primary: '#8e44ad', secondary: '#2c3e50', accent: '#1abc9c' },
        { primary: '#c0392b', secondary: '#2c3e50', accent: '#f39c12' }
    ];
    
    const randomColorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    
    // Random restaurant types and names
    const restaurantTypes = ['Bistro', 'Café', 'Restaurant', 'Eatery', 'Kitchen', 'Grill', 'Brasserie', 'Diner'];
    const restaurantAdjectives = ['Elegant', 'Modern', 'Rustic', 'Urban', 'Cozy', 'Artisan', 'Gourmet', 'Classic'];
    const cuisineTypes = ['Italian', 'French', 'Asian', 'Mediterranean', 'American', 'Mexican', 'Fusion', 'Seafood'];
    
    const randomType = restaurantTypes[Math.floor(Math.random() * restaurantTypes.length)];
    const randomAdjective = restaurantAdjectives[Math.floor(Math.random() * restaurantAdjectives.length)];
    const randomCuisine = cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)];
    
    // Generate a random restaurant name
    let restaurantName;
    const nameType = Math.floor(Math.random() * 3);
    if (nameType === 0) {
        restaurantName = `${randomAdjective} ${randomType}`;
    } else if (nameType === 1) {
        restaurantName = `The ${randomAdjective} ${randomCuisine}`;
    } else {
        restaurantName = `${randomCuisine} ${randomType}`;
    }
    
    // Random layout types
    const layoutTypes = ['centered', 'left-aligned', 'modern-grid', 'classic', 'minimalist'];
    const randomLayout = layoutTypes[Math.floor(Math.random() * layoutTypes.length)];
    
    // Generate menu sections
    const menuSections = ['APPETIZERS', 'STARTERS', 'MAIN COURSES', 'ENTRÉES', 'DESSERTS', 'SIDES', 'BEVERAGES', 'SPECIALS'];
    const selectedSections = [];
    
    // Select 2-4 random sections
    const numSections = Math.floor(Math.random() * 3) + 2;
    while (selectedSections.length < numSections) {
        const randomSection = menuSections[Math.floor(Math.random() * menuSections.length)];
        if (!selectedSections.includes(randomSection)) {
            selectedSections.push(randomSection);
        }
    }
    
    // Menu items for each section
    const appetizers = [
        { name: 'Truffle Arancini', price: Math.floor(Math.random() * 6) + 8 },
        { name: 'Beef Carpaccio', price: Math.floor(Math.random() * 6) + 10 },
        { name: 'Bruschetta', price: Math.floor(Math.random() * 4) + 6 },
        { name: 'Calamari', price: Math.floor(Math.random() * 5) + 9 }
    ];
    
    const mains = [
        { name: 'Lobster Risotto', price: Math.floor(Math.random() * 10) + 25 },
        { name: 'Filet Mignon', price: Math.floor(Math.random() * 12) + 30 },
        { name: 'Grilled Salmon', price: Math.floor(Math.random() * 8) + 22 },
        { name: 'Vegetable Pasta', price: Math.floor(Math.random() * 6) + 18 }
    ];
    
    const desserts = [
        { name: 'Chocolate Soufflé', price: Math.floor(Math.random() * 4) + 8 },
        { name: 'Crème Brûlée', price: Math.floor(Math.random() * 3) + 7 },
        { name: 'Tiramisu', price: Math.floor(Math.random() * 3) + 8 },
        { name: 'Cheesecake', price: Math.floor(Math.random() * 4) + 7 }
    ];
    
    const beverages = [
        { name: 'House Wine', price: Math.floor(Math.random() * 4) + 7 },
        { name: 'Craft Beer', price: Math.floor(Math.random() * 3) + 6 },
        { name: 'Signature Cocktail', price: Math.floor(Math.random() * 5) + 10 },
        { name: 'Sparkling Water', price: Math.floor(Math.random() * 2) + 3 }
    ];
    
    const menuItems = {
        'APPETIZERS': appetizers,
        'STARTERS': appetizers,
        'MAIN COURSES': mains,
        'ENTRÉES': mains,
        'DESSERTS': desserts,
        'BEVERAGES': beverages,
        'SPECIALS': [...mains.slice(0, 2), ...appetizers.slice(0, 1)],
        'SIDES': [
            { name: 'Truffle Fries', price: Math.floor(Math.random() * 3) + 5 },
            { name: 'Roasted Vegetables', price: Math.floor(Math.random() * 3) + 6 },
            { name: 'Garlic Bread', price: Math.floor(Math.random() * 2) + 4 }
        ]
    };
    
    // Now build the template based on the random layout
    switch (randomLayout) {
        case 'centered':
            // Add header
            addTextElement(restaurantName, 'center', '48px', randomHeadingFont, randomColorScheme.primary, 50, 50, 700, 80);
            
            // Add tagline
            const taglines = ['Fine Dining Experience', 'Taste the Difference', `${randomCuisine} Cuisine`, 'Culinary Excellence'];
            const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
            addTextElement(randomTagline, 'center', '24px', randomBodyFont, randomColorScheme.secondary, 50, 140, 700, 40);
            
            // Add decorative line
            addShapeElement('rectangle', randomColorScheme.accent, 300, 190, 200, 2);
            
            // Add sections
            let yPosition = 230;
            selectedSections.forEach(section => {
                addTextElement(section, 'center', '28px', randomHeadingFont, randomColorScheme.primary, 50, yPosition, 700, 40);
                yPosition += 60;
                
                // Add menu items for this section
                const items = menuItems[section];
                items.slice(0, 3).forEach(item => {
                    addTextElement(`${item.name} .................... $${item.price}`, 'center', '18px', randomBodyFont, randomColorScheme.secondary, 50, yPosition, 700, 30);
                    yPosition += 40;
                });
                
                yPosition += 30; // Space between sections
            });
            
            // Add footer
            addTextElement('123 Gourmet Avenue • (555) 123-4567 • www.restaurant.com', 'center', '14px', randomBodyFont, randomColorScheme.secondary, 50, 1050, 700, 20);
            break;
            
        case 'left-aligned':
            // Add header
            addTextElement(restaurantName, 'left', '48px', randomHeadingFont, randomColorScheme.primary, 50, 50, 700, 80);
            
            // Add tagline
            const leftTaglines = ['Fine Dining Experience', 'Taste the Difference', `${randomCuisine} Cuisine`, 'Culinary Excellence'];
            const randomLeftTagline = leftTaglines[Math.floor(Math.random() * leftTaglines.length)];
            addTextElement(randomLeftTagline, 'left', '24px', randomBodyFont, randomColorScheme.secondary, 50, 140, 700, 40);
            
            // Add decorative line
            addShapeElement('rectangle', randomColorScheme.accent, 50, 190, 200, 2);
            
            // Add sections
            let leftYPosition = 230;
            selectedSections.forEach(section => {
                addTextElement(section, 'left', '28px', randomHeadingFont, randomColorScheme.primary, 50, leftYPosition, 700, 40);
                leftYPosition += 60;
                
                // Add menu items for this section
                const items = menuItems[section];
                items.slice(0, 3).forEach(item => {
                    addTextElement(`${item.name} .................... $${item.price}`, 'left', '18px', randomBodyFont, randomColorScheme.secondary, 50, leftYPosition, 700, 30);
                    leftYPosition += 40;
                });
                
                leftYPosition += 30; // Space between sections
            });
            
            // Add footer
            addTextElement('123 Gourmet Avenue • (555) 123-4567 • www.restaurant.com', 'left', '14px', randomBodyFont, randomColorScheme.secondary, 50, 1050, 700, 20);
            break;
            
        case 'modern-grid':
            // Add header with background
            addShapeElement('rectangle', randomColorScheme.primary, 0, 0, 800, 150);
            addTextElement(restaurantName.toUpperCase(), 'center', '48px', randomHeadingFont, '#ffffff', 50, 50, 700, 80);
            
            // Add tagline
            const modernTaglines = ['FINE DINING', 'ESTABLISHED 2025', `${randomCuisine.toUpperCase()} CUISINE`, 'CULINARY EXCELLENCE'];
            const randomModernTagline = modernTaglines[Math.floor(Math.random() * modernTaglines.length)];
            addTextElement(randomModernTagline, 'center', '20px', randomBodyFont, '#ffffff', 50, 110, 700, 30);
            
            // Add sections in a grid layout
            let gridYPosition = 200;
            let leftColumn = true;
            
            selectedSections.forEach(section => {
                const xPosition = leftColumn ? 50 : 420;
                addTextElement(section, 'center', '28px', randomHeadingFont, randomColorScheme.primary, xPosition, gridYPosition, 330, 40);
                gridYPosition += 50;
                
                // Add menu items for this section
                const items = menuItems[section];
                items.slice(0, 2).forEach(item => {
                    addTextElement(item.name, 'left', '18px', randomBodyFont, randomColorScheme.secondary, xPosition, gridYPosition, 250, 30);
                    addTextElement(`$${item.price}`, 'right', '18px', randomBodyFont, randomColorScheme.accent, xPosition + 250, gridYPosition, 80, 30);
                    gridYPosition += 40;
                });
                
                gridYPosition += 30; // Space between sections
                
                // Switch columns after each section
                leftColumn = !leftColumn;
                if (!leftColumn) {
                    gridYPosition = 200; // Reset Y position for right column
                }
            });
            
            // Add footer
            addShapeElement('rectangle', randomColorScheme.primary, 0, 1000, 800, 120);
            addTextElement('OPEN DAILY 7AM - 10PM', 'center', '20px', randomHeadingFont, '#ffffff', 50, 1030, 700, 30);
            addTextElement('123 Gourmet Avenue • (555) 123-4567 • www.restaurant.com', 'center', '16px', randomBodyFont, '#ffffff', 50, 1070, 700, 20);
            break;
            
        case 'classic':
            // Add decorative border
            addShapeElement('rectangle', randomColorScheme.accent, 20, 20, 760, 1080);
            addShapeElement('rectangle', canvas.style.backgroundColor, 30, 30, 740, 1060);
            
            // Add header
            addTextElement(restaurantName, 'center', '42px', randomHeadingFont, randomColorScheme.primary, 50, 70, 700, 70);
            
            // Add tagline
            const classicTaglines = ['Est. 2025', 'Fine Dining', `${randomCuisine} Specialties`, 'Traditional Recipes'];
            const randomClassicTagline = classicTaglines[Math.floor(Math.random() * classicTaglines.length)];
            addTextElement(randomClassicTagline, 'center', '22px', randomBodyFont, randomColorScheme.secondary, 50, 150, 700, 30);
            
            // Add decorative divider
            addShapeElement('rectangle', randomColorScheme.accent, 250, 200, 300, 1);
            
            // Add sections
            let classicYPosition = 240;

            selectedSections.forEach(section => {

                addTextElement(section, 'center', '26px', randomHeadingFont, randomColorScheme.primary, 50, classicYPosition, 700, 40);

                classicYPosition += 50;

                

                // Add menu items for this section

                const items = menuItems[section];

                items.slice(0, 3).forEach(item => {

                    addTextElement(`${item.name}`, 'center', '18px', randomBodyFont, randomColorScheme.secondary, 50, classicYPosition, 700, 30);

                    classicYPosition += 30;

                    addTextElement(`$${item.price}`, 'center', '16px', randomBodyFont, randomColorScheme.accent, 50, classicYPosition, 700, 20);

                    classicYPosition += 40;

                });

                

                // Add decorative divider between sections

                if (selectedSections.indexOf(section) < selectedSections.length - 1) {

                    addShapeElement('rectangle', randomColorScheme.accent, 300, classicYPosition, 200, 1);

                    classicYPosition += 30;

                }

            });

            

            // Add footer

            addTextElement('123 Gourmet Avenue • (555) 123-4567', 'center', '14px', randomBodyFont, randomColorScheme.secondary, 50, 1000, 700, 20);

            break;
    }
}



// Function to add a stylish background image to the menu template

function addBackgroundImage(canvas) {

    // Food-related background images from Pexels

    const backgroundImages = [

        {

            url: 'https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg',

            description: 'Elegant table setting with blurred background'

        },

        {

            url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',

            description: 'Close-up of food with bokeh effect'

        },

        {

            url: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',

            description: 'Pasta dish with shallow depth of field'

        },

        {

            url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',

            description: 'Elegant restaurant interior with soft lighting'

        },

        {

            url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',

            description: 'Wine glasses in a row'

        },

        {

            url: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg',

            description: 'Rustic wooden table with spices'

        },

        {

            url: 'https://images.pexels.com/photos/5175606/pexels-photo-5175606.jpeg',

            description: 'Elegant restaurant setting with soft focus'

        }

    ];

    

    // Choose a random background image

    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    

    // Determine the style of background integration based on the layout

    const bgStyles = [

        // Full background with overlay

        () => {

            // Create a container for the background

            const bgContainer = document.createElement('div');

            bgContainer.className = 'canvas-element background';

            bgContainer.style.left = '0';

            bgContainer.style.top = '0';

            bgContainer.style.width = '800px';

            bgContainer.style.height = '1120px';

            bgContainer.style.zIndex = '-1'; // Place behind all other elements

            bgContainer.style.backgroundImage = `url(${randomBg.url})`;

            bgContainer.style.backgroundSize = 'cover';

            bgContainer.style.backgroundPosition = 'center';

            bgContainer.style.opacity = '0.15'; // Very subtle background

            

            canvas.appendChild(bgContainer);

            

            // Add attribution for Pexels

            const attribution = document.createElement('div');

            attribution.className = 'canvas-element text';

            attribution.style.left = '10px';

            attribution.style.top = '1100px';

            attribution.style.width = '300px';

            attribution.style.height = '20px';

            attribution.style.fontSize = '8px';

            attribution.style.color = '#999999';

            attribution.style.zIndex = '1';

            attribution.contentEditable = true;

            attribution.innerHTML = 'Background image from Pexels';

            

            // Make element draggable

            makeElementDraggable(attribution);

            

            canvas.appendChild(attribution);

        },

        

        // Side panel image

        () => {

            // Create a side panel for the image

            const sidePanel = document.createElement('div');

            sidePanel.className = 'canvas-element background';

            sidePanel.style.left = '600px';

            sidePanel.style.top = '0';

            sidePanel.style.width = '200px';

            sidePanel.style.height = '1120px';

            sidePanel.style.zIndex = '-1'; // Place behind all other elements

            sidePanel.style.backgroundImage = `url(${randomBg.url})`;

            sidePanel.style.backgroundSize = 'cover';

            sidePanel.style.backgroundPosition = 'center';

            sidePanel.style.opacity = '0.8';

            

            canvas.appendChild(sidePanel);

            

            // Add attribution for Pexels

            const attribution = document.createElement('div');

            attribution.className = 'canvas-element text';

            attribution.style.left = '610px';

            attribution.style.top = '1100px';

            attribution.style.width = '180px';

            attribution.style.height = '20px';

            attribution.style.fontSize = '8px';

            attribution.style.color = '#ffffff';

            attribution.style.zIndex = '1';

            attribution.contentEditable = true;

            attribution.innerHTML = 'Image from Pexels';

            

            // Make element draggable

            makeElementDraggable(attribution);

            

            canvas.appendChild(attribution);

        },

        

        // Top banner image

        () => {

            // Create a top banner for the image

            const topBanner = document.createElement('div');

            topBanner.className = 'canvas-element background';

            topBanner.style.left = '0';

            topBanner.style.top = '0';

            topBanner.style.width = '800px';

            topBanner.style.height = '200px';

            topBanner.style.zIndex = '-1'; // Place behind all other elements

            topBanner.style.backgroundImage = `url(${randomBg.url})`;

            topBanner.style.backgroundSize = 'cover';

            topBanner.style.backgroundPosition = 'center';

            topBanner.style.opacity = '0.9';

            

            canvas.appendChild(topBanner);

            

            // Add a gradient overlay to make text more readable

            const overlay = document.createElement('div');

            overlay.className = 'canvas-element';

            overlay.style.left = '0';

            overlay.style.top = '0';

            overlay.style.width = '800px';

            overlay.style.height = '200px';

            overlay.style.zIndex = '-1'; // Place behind all other elements but above the image

            overlay.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)';

            

            canvas.appendChild(overlay);

            

            // Add attribution for Pexels

            const attribution = document.createElement('div');

            attribution.className = 'canvas-element text';

            attribution.style.left = '10px';

            attribution.style.top = '180px';

            attribution.style.width = '150px';

            attribution.style.height = '20px';

            attribution.style.fontSize = '8px';

            attribution.style.color = '#ffffff';

            attribution.style.zIndex = '1';

            attribution.contentEditable = true;

            attribution.innerHTML = 'Image from Pexels';

            

            // Make element draggable

            makeElementDraggable(attribution);

            

            canvas.appendChild(attribution);

        },

        

        // Bottom banner image

        () => {

            // Create a bottom banner for the image

            const bottomBanner = document.createElement('div');

            bottomBanner.className = 'canvas-element background';

            bottomBanner.style.left = '0';

            bottomBanner.style.top = '920px';

            bottomBanner.style.width = '800px';

            bottomBanner.style.height = '200px';

            bottomBanner.style.zIndex = '-1'; // Place behind all other elements

            bottomBanner.style.backgroundImage = `url(${randomBg.url})`;

            bottomBanner.style.backgroundSize = 'cover';

            bottomBanner.style.backgroundPosition = 'center';

            bottomBanner.style.opacity = '0.9';

            

            canvas.appendChild(bottomBanner);

            

            // Add a gradient overlay to make text more readable

            const overlay = document.createElement('div');

            overlay.className = 'canvas-element';

            overlay.style.left = '0';

            overlay.style.top = '920px';

            overlay.style.width = '800px';

            overlay.style.height = '200px';

            overlay.style.zIndex = '-1'; // Place behind all other elements but above the image

            overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)';

            

            canvas.appendChild(overlay);

            

            // Add attribution for Pexels

            const attribution = document.createElement('div');

            attribution.className = 'canvas-element text';

            attribution.style.left = '10px';

            attribution.style.top = '1100px';

            attribution.style.width = '150px';

            attribution.style.height = '20px';

            attribution.style.fontSize = '8px';

            attribution.style.color = '#ffffff';

            attribution.style.zIndex = '1';

            attribution.contentEditable = true;

            attribution.innerHTML = 'Image from Pexels';

            

            // Make element draggable

            makeElementDraggable(attribution);

            

            canvas.appendChild(attribution);

        },

        

        // Circular image in the corner

        () => {

            // Create a circular image container

            const circleContainer = document.createElement('div');

            circleContainer.className = 'canvas-element';

            circleContainer.style.left = '600px';

            circleContainer.style.top = '50px';

            circleContainer.style.width = '150px';

            circleContainer.style.height = '150px';

            circleContainer.style.borderRadius = '50%';

            circleContainer.style.overflow = 'hidden';

            circleContainer.style.zIndex = '1';

            circleContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

            

            // Add the image inside the circle

            const circleImage = document.createElement('img');

            circleImage.src = randomBg.url;

            circleImage.alt = randomBg.description;

            circleImage.style.width = '100%';

            circleImage.style.height = '100%';

            circleImage.style.objectFit = 'cover';

            

            circleContainer.appendChild(circleImage);

            

            // Make element draggable

            makeElementDraggable(circleContainer);

            

            canvas.appendChild(circleContainer);

            

            // Add attribution for Pexels

            const attribution = document.createElement('div');

            attribution.className = 'canvas-element text';

            attribution.style.left = '600px';

            attribution.style.top = '210px';

            attribution.style.width = '150px';

            attribution.style.height = '20px';

            attribution.style.fontSize = '8px';

            attribution.style.color = '#999999';

            attribution.style.textAlign = 'center';

            attribution.style.zIndex = '1';

            attribution.contentEditable = true;

            attribution.innerHTML = 'Image from Pexels';

            

            // Make element draggable

            makeElementDraggable(attribution);

            

            canvas.appendChild(attribution);

        }

    ];

    

    // Choose a random background style

    const randomStyle = bgStyles[Math.floor(Math.random() * bgStyles.length)];

    randomStyle();

}


// Modify the generateRandomTemplate function to include background images

// Add this line at the end of the generateRandomTemplate function, just before the closing brace:


    // Add a stylish background image

    addBackgroundImage(canvas);

