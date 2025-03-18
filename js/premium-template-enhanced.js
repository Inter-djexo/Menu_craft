// Enhanced Premium Template Generator
// This version incorporates more sophisticated design elements and dynamic content

// Create a premium template with sophisticated design
window.loadPremiumTemplate = function(cuisineType) {
    const canvas = document.getElementById('editor-canvas');
    
    // Clear the canvas
    canvas.innerHTML = '';
    
    // Get cuisine type from parameter or default to French
    cuisineType = cuisineType || 'french';
    
    // Set a premium background color
    canvas.style.backgroundColor = '#f9f7f3';
    
    // Color schemes based on cuisine
    const colorSchemes = {
        'italian': { primary: '#8B0000', secondary: '#2c2c2c', accent: '#D4AF37', bg: '#f9f7f3' },
        'japanese': { primary: '#1A1A1A', secondary: '#2c2c2c', accent: '#C0392B', bg: '#f5f5f5' },
        'french': { primary: '#2c3e50', secondary: '#2c2c2c', accent: '#c9a959', bg: '#f9f7f3' },
        'indian': { primary: '#800020', secondary: '#5D4037', accent: '#FFC107', bg: '#FFF8E7' },
        'mexican': { primary: '#006400', secondary: '#2c2c2c', accent: '#FF5722', bg: '#f9f7f3' },
        'thai': { primary: '#1B5E20', secondary: '#2c2c2c', accent: '#FF6D00', bg: '#f9f7f3' },
        'mediterranean': { primary: '#01579B', secondary: '#2c2c2c', accent: '#80DEEA', bg: '#f9f7f3' },
        'american': { primary: '#B71C1C', secondary: '#2c2c2c', accent: '#0D47A1', bg: '#f9f7f3' }
    };
    
    // Get color scheme based on cuisine or use default
    const colors = colorSchemes[cuisineType] || colorSchemes['french'];
    
    // Add a visible texture overlay
    const textureOverlay = document.createElement('div');
    textureOverlay.className = 'canvas-element background';
    textureOverlay.style.left = '0';
    textureOverlay.style.top = '0';
    textureOverlay.style.width = '800px';
    textureOverlay.style.height = '1120px';
    textureOverlay.style.zIndex = '-1';
    textureOverlay.style.opacity = '0.15'; // Increased opacity for better visibility
    
    // Use different texture patterns based on cuisine
    if (cuisineType === 'indian') {
        textureOverlay.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/paisley.png")';
        textureOverlay.style.opacity = '0.1'; // Slightly more subtle for the detailed pattern
        canvas.style.backgroundColor = '#FFF8E7'; // Warm cream background for Indian cuisine
    } else {
        textureOverlay.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")';
    }
    
    textureOverlay.style.pointerEvents = 'none'; // Ensure it doesn't interfere with element selection
    canvas.appendChild(textureOverlay);
    
    // Restaurant names based on cuisine
    const restaurantNames = {
        'italian': ['Trattoria Bella', 'Rustico Ristorante'],
        'japanese': ['Sakura Sushi', 'Zen Dining'],
        'french': ['Le Cozy Bistro', 'Café Parisienne'],
        'indian': ['SPICE ROYALE', 'MAHARAJA DINING', 'TANDOOR PALACE'],
        'mexican': ['Casa Fiesta', 'Taco Haven'],
        'thai': ['Thai Orchid', 'Siam Delight'],
        'mediterranean': ['Mediterraneo', 'Olive Grove'],
        'american': ['Diner Classic', 'Grill House']
    };
    
    // Get restaurant name based on cuisine or use default
    const restaurantName = restaurantNames[cuisineType] ? 
        restaurantNames[cuisineType][Math.floor(Math.random() * restaurantNames[cuisineType].length)] : 
        'The Cozy French';
    
    // Taglines based on cuisine
    const taglines = {
        'italian': ['Authentic Italian Flavors', 'Homely Italian Cuisine'],
        'japanese': ['Sushi Artistry', 'Zenful Dining Experience'],
        'french': ['Culinary Excellence', 'Fine French Cuisine'],
        'indian': ['Authentic Royal Indian Cuisine', 'A Journey Through Indian Flavors', 'Spices of India'],
        'mexican': ['Spicy Mexican Traditions', 'Fiesta on a Plate'],
        'thai': ['Exotic Thai Tastes', 'Spicy Thai Bliss'],
        'mediterranean': ['Mediterranean Freshness', 'Sea & Sun Flavors'],
        'american': ['Classic American Comfort', 'Grill Masters']
    };
    
    // Get tagline based on cuisine or use default
    const tagline = taglines[cuisineType] ? 
        taglines[cuisineType][Math.floor(Math.random() * taglines[cuisineType].length)] : 
        'Culinary Excellence';
    
    // Add elegant gold border
    const borderTop = document.createElement('div');
    borderTop.className = 'canvas-element';
    borderTop.style.left = '40px';
    borderTop.style.top = '40px';
    borderTop.style.width = '720px';
    borderTop.style.height = '2px';
    borderTop.style.backgroundColor = colors.accent;
    canvas.appendChild(borderTop);
    
    const borderBottom = document.createElement('div');
    borderBottom.className = 'canvas-element';
    borderBottom.style.left = '40px';
    borderBottom.style.top = '1080px';
    borderBottom.style.width = '720px';
    borderBottom.style.height = '2px';
    borderBottom.style.backgroundColor = colors.accent;
    canvas.appendChild(borderBottom);
    
    const borderLeft = document.createElement('div');
    borderLeft.className = 'canvas-element';
    borderLeft.style.left = '40px';
    borderLeft.style.top = '40px';
    borderLeft.style.width = '2px';
    borderLeft.style.height = '1040px';
    borderLeft.style.backgroundColor = colors.accent;
    canvas.appendChild(borderLeft);
    
    const borderRight = document.createElement('div');
    borderRight.className = 'canvas-element';
    borderRight.style.left = '758px';
    borderRight.style.top = '40px';
    borderRight.style.width = '2px';
    borderRight.style.height = '1040px';
    borderRight.style.backgroundColor = colors.accent;
    canvas.appendChild(borderRight);
    
    // Add corner accents
    const cornerSize = 15;
    
    // Top left corner
    const topLeftCorner = document.createElement('div');
    topLeftCorner.className = 'canvas-element';
    topLeftCorner.style.left = '35px';
    topLeftCorner.style.top = '35px';
    topLeftCorner.style.width = cornerSize + 'px';
    topLeftCorner.style.height = cornerSize + 'px';
    topLeftCorner.style.borderLeft = '3px solid ' + colors.accent;
    topLeftCorner.style.borderTop = '3px solid ' + colors.accent;
    canvas.appendChild(topLeftCorner);
    
    // Top right corner
    const topRightCorner = document.createElement('div');
    topRightCorner.className = 'canvas-element';
    topRightCorner.style.left = (760 - cornerSize) + 'px';
    topRightCorner.style.top = '35px';
    topRightCorner.style.width = cornerSize + 'px';
    topRightCorner.style.height = cornerSize + 'px';
    topRightCorner.style.borderRight = '3px solid ' + colors.accent;
    topRightCorner.style.borderTop = '3px solid ' + colors.accent;
    canvas.appendChild(topRightCorner);
    
    // Bottom left corner
    const bottomLeftCorner = document.createElement('div');
    bottomLeftCorner.className = 'canvas-element';
    bottomLeftCorner.style.left = '35px';
    bottomLeftCorner.style.top = (1080 - cornerSize) + 'px';
    bottomLeftCorner.style.width = cornerSize + 'px';
    bottomLeftCorner.style.height = cornerSize + 'px';
    bottomLeftCorner.style.borderLeft = '3px solid ' + colors.accent;
    bottomLeftCorner.style.borderBottom = '3px solid ' + colors.accent;
    canvas.appendChild(bottomLeftCorner);
    
    // Bottom right corner
    const bottomRightCorner = document.createElement('div');
    bottomRightCorner.className = 'canvas-element';
    bottomRightCorner.style.left = (760 - cornerSize) + 'px';
    bottomRightCorner.style.top = (1080 - cornerSize) + 'px';
    bottomRightCorner.style.width = cornerSize + 'px';
    bottomRightCorner.style.height = cornerSize + 'px';
    bottomRightCorner.style.borderRight = '3px solid ' + colors.accent;
    bottomRightCorner.style.borderBottom = '3px solid ' + colors.accent;
    canvas.appendChild(bottomRightCorner);
    
    // Font selection based on cuisine
    const fontPairings = {
        'italian': { heading: 'Cormorant Garamond, serif', body: 'Montserrat, sans-serif' },
        'japanese': { heading: 'Noto Serif JP, serif', body: 'Noto Sans JP, sans-serif' },
        'french': { heading: 'Playfair Display, serif', body: 'Montserrat, sans-serif' },
        'indian': { heading: 'Rozha One, serif', body: 'Poppins, sans-serif' },
        'mexican': { heading: 'Amatic SC, cursive', body: 'Montserrat, sans-serif' },
        'thai': { heading: 'Sriracha, cursive', body: 'Prompt, sans-serif' },
        'mediterranean': { heading: 'Cinzel, serif', body: 'Raleway, sans-serif' },
        'american': { heading: 'Bebas Neue, sans-serif', body: 'Roboto, sans-serif' }
    };
    
    // Get font pairing based on cuisine or use default
    const fonts = fontPairings[cuisineType] || fontPairings['french'];
    
    // Add restaurant name
    const restaurantNameElement = document.createElement('div');
    restaurantNameElement.className = 'canvas-element text';
    restaurantNameElement.style.left = '100px';
    restaurantNameElement.style.top = '100px';
    restaurantNameElement.style.width = '600px';
    restaurantNameElement.style.textAlign = 'center';
    restaurantNameElement.style.fontFamily = fonts.heading;
    restaurantNameElement.style.fontSize = '48px';
    restaurantNameElement.style.fontWeight = '700';
    restaurantNameElement.style.color = colors.primary;
    restaurantNameElement.style.letterSpacing = '2px';
    restaurantNameElement.contentEditable = "true";
    restaurantNameElement.innerHTML = restaurantName;
    restaurantNameElement.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(restaurantNameElement);
    canvas.appendChild(restaurantNameElement);
    
    // Add tagline
    const taglineElement = document.createElement('div');
    taglineElement.className = 'canvas-element text';
    taglineElement.style.left = '100px';
    taglineElement.style.top = '170px';
    taglineElement.style.width = '600px';
    taglineElement.style.textAlign = 'center';
    taglineElement.style.fontFamily = fonts.body;
    taglineElement.style.fontSize = '18px';
    taglineElement.style.fontWeight = '400';
    taglineElement.style.color = '#666666';
    taglineElement.style.letterSpacing = '3px';
    taglineElement.style.textTransform = 'uppercase';
    taglineElement.contentEditable = "true";
    taglineElement.innerHTML = tagline;
    taglineElement.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(taglineElement);
    canvas.appendChild(taglineElement);
    
    // Add decorative element
    const decorElement = document.createElement('div');
    decorElement.className = 'canvas-element';
    decorElement.style.left = '300px';
    decorElement.style.top = '210px';
    decorElement.style.width = '200px';
    decorElement.style.height = '2px';
    decorElement.style.backgroundColor = colors.accent;
    decorElement.style.opacity = '0.8';
    makeElementDraggable(decorElement);
    canvas.appendChild(decorElement);
    
    // Section titles based on cuisine
    const sectionTitles = {
        'italian': { appetizers: 'ANTIPASTI', main: 'PRIMI PIATTI', desserts: 'DOLCI' },
        'japanese': { appetizers: 'STARTERS', main: 'SUSHI & SASHIMI', desserts: 'DESSERTS' },
        'french': { appetizers: 'HORS D\'OEUVRES', main: 'PLATS PRINCIPAUX', desserts: 'DESSERTS' },
        'indian': { appetizers: 'STARTERS (SHURUVAAT)', main: 'MAIN COURSES (MUKHYA VYANJAN)', desserts: 'DESSERTS (MITHAI)', tandoor: 'TANDOOR SPECIALTIES', breads: 'BREADS (ROTIYAN)' },
        'mexican': { appetizers: 'ENTRADAS', main: 'PLATOS FUERTES', desserts: 'POSTRES' },
        'thai': { appetizers: 'STARTERS', main: 'MAIN DISHES', desserts: 'DESSERTS' },
        'mediterranean': { appetizers: 'MEZZE', main: 'MAIN DISHES', desserts: 'DESSERTS' },
        'american': { appetizers: 'STARTERS', main: 'ENTRÉES', desserts: 'DESSERTS' }
    };
    
    // Get section titles based on cuisine or use default
    const sections = sectionTitles[cuisineType] || sectionTitles['french'];
    
    // Add appetizers section
    const appetizersTitle = document.createElement('div');
    appetizersTitle.className = 'canvas-element text';
    appetizersTitle.style.left = '100px';
    appetizersTitle.style.top = '280px';
    appetizersTitle.style.width = '600px';
    appetizersTitle.style.textAlign = 'center';
    appetizersTitle.style.fontFamily = fonts.body;
    appetizersTitle.style.fontSize = '24px';
    appetizersTitle.style.fontWeight = '600';
    appetizersTitle.style.color = colors.primary;
    appetizersTitle.style.letterSpacing = '2px';
    appetizersTitle.contentEditable = "true";
    appetizersTitle.innerHTML = sections.appetizers;
    appetizersTitle.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(appetizersTitle);
    canvas.appendChild(appetizersTitle);
    
    // Menu items based on cuisine
    const menuItems = {
        'italian': {
            appetizers: [
                { name: 'Bruschetta al Pomodoro', price: '€9' },
                { name: 'Carpaccio di Manzo', price: '€12' },
                { name: 'Calamari Fritti', price: '€10' }
            ],
            main: [
                { name: 'Risotto ai Funghi', price: '€18' },
                { name: 'Spaghetti alla Carbonara', price: '€16' },
                { name: 'Osso Buco alla Milanese', price: '€24' }
            ],
            desserts: [
                { name: 'Tiramisu', price: '€8' },
                { name: 'Panna Cotta', price: '€7' },
                { name: 'Cannoli Siciliani', price: '€9' }
            ]
        },
        'french': {
            appetizers: [
                { name: 'Escargots de Bourgogne', price: '€12' },
                { name: 'Soupe à l\'Oignon', price: '€9' },
                { name: 'Foie Gras', price: '€15' }
            ],
            main: [
                { name: 'Coq au Vin', price: '€22' },
                { name: 'Boeuf Bourguignon', price: '€24' },
                { name: 'Ratatouille', price: '€18' }
            ],
            desserts: [
                { name: 'Crème Brûlée', price: '€8' },
                { name: 'Tarte Tatin', price: '€9' },
                { name: 'Mousse au Chocolat', price: '€7' }
            ]
        },
        'japanese': {
            appetizers: [
                { name: 'Edamame', price: '¥600' },
                { name: 'Gyoza', price: '¥800' },
                { name: 'Agedashi Tofu', price: '¥700' }
            ],
            main: [
                { name: 'Nigiri Selection', price: '¥2400' },
                { name: 'Salmon Sashimi', price: '¥1800' },
                { name: 'Dragon Roll', price: '¥1600' }
            ],
            desserts: [
                { name: 'Matcha Ice Cream', price: '¥600' },
                { name: 'Mochi', price: '¥700' },
                { name: 'Dorayaki', price: '¥800' }
            ]
        },
        'indian': {
            appetizers: [
                { name: 'Samosa - Crispy pastry filled with spiced potatoes and peas', price: '₹180' },
                { name: 'Paneer Tikka - Cottage cheese marinated in yogurt and spices', price: '₹250' },
                { name: 'Dahi Puri - Crisp puris filled with potatoes, yogurt and tamarind chutney', price: '₹160' },
                { name: 'Vegetable Pakora - Assorted vegetables in gram flour batter', price: '₹190' }
            ],
            main: [
                { name: 'Butter Chicken - Tandoori chicken in rich tomato gravy', price: '₹380' },
                { name: 'Rogan Josh - Aromatic lamb curry with Kashmiri spices', price: '₹420' },
                { name: 'Palak Paneer - Cottage cheese in spinach gravy', price: '₹340' },
                { name: 'Dal Makhani - Black lentils simmered overnight with spices', price: '₹290' },
                { name: 'Vegetable Biryani - Fragrant rice with vegetables and spices', price: '₹320' }
            ],
            desserts: [
                { name: 'Gulab Jamun - Deep-fried milk solids in sugar syrup', price: '₹180' },
                { name: 'Rasmalai - Cottage cheese dumplings in sweetened milk', price: '₹200' },
                { name: 'Kulfi - Traditional Indian ice cream with pistachios', price: '₹190' },
                { name: 'Gajar Halwa - Carrot pudding with nuts (seasonal)', price: '₹210' }
            ],
            breads: [
                { name: 'Naan - Leavened bread baked in tandoor', price: '₹80' },
                { name: 'Garlic Naan - Naan topped with garlic and butter', price: '₹100' },
                { name: 'Laccha Paratha - Layered whole wheat bread', price: '₹90' },
                { name: 'Missi Roti - Gram flour bread with spices', price: '₹85' }
            ],
            tandoor: [
                { name: 'Tandoori Chicken - Chicken marinated in yogurt and spices', price: '₹320' },
                { name: 'Seekh Kebab - Minced lamb skewers with herbs and spices', price: '₹350' },
                { name: 'Malai Tikka - Chicken pieces in creamy marinade', price: '₹340' },
                { name: 'Tandoori Prawns - Jumbo prawns marinated in spices', price: '₹450' }
            ]
        }
    };
    
    // Get menu items based on cuisine or use default
    const items = menuItems[cuisineType] || menuItems['french'];
    
    // Add appetizer items
    let yPos = 330;
    items.appetizers.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = fonts.body;
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = "true";
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
        itemElement.addEventListener('click', function() {
            // Ensure the element is selectable and editable
            this.focus();
        });
        makeElementDraggable(itemElement);
        canvas.appendChild(itemElement);
        yPos += 40;
    });
    
    // Add a decorative image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'canvas-element image';
    imageContainer.style.left = '250px';
    imageContainer.style.top = '450px';
    imageContainer.style.width = '300px';
    imageContainer.style.height = '200px';
    imageContainer.style.overflow = 'hidden';
    imageContainer.style.borderRadius = '4px';
    imageContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    
    // Select image based on cuisine
    const cuisineImages = {
        'italian': 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
        'french': 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
        'japanese': 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
        'indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
        'mexican': 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
        'thai': 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
        'mediterranean': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
        'american': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
    };
    
    const image = document.createElement('img');
    image.src = cuisineImages[cuisineType] || cuisineImages['french'];
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.objectFit = 'cover';
    
    imageContainer.appendChild(image);
    makeElementDraggable(imageContainer);
    canvas.appendChild(imageContainer);
    
    // Add main dishes section
    const mainTitle = document.createElement('div');
    mainTitle.className = 'canvas-element text';
    mainTitle.style.left = '100px';
    mainTitle.style.top = '680px';
    mainTitle.style.width = '600px';
    mainTitle.style.textAlign = 'center';
    mainTitle.style.fontFamily = fonts.body;
    mainTitle.style.fontSize = '24px';
    mainTitle.style.fontWeight = '600';
    mainTitle.style.color = colors.primary;
    mainTitle.style.letterSpacing = '2px';
    mainTitle.contentEditable = "true";
    mainTitle.innerHTML = sections.main;
    mainTitle.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(mainTitle);
    canvas.appendChild(mainTitle);
    
    // Add main dish items
    yPos = 730;
    items.main.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = fonts.body;
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = "true";
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
        itemElement.addEventListener('click', function() {
            // Ensure the element is selectable and editable
            this.focus();
        });
        makeElementDraggable(itemElement);
        canvas.appendChild(itemElement);
        yPos += 40;
    });
    
    // Add desserts section
    const dessertsTitle = document.createElement('div');
    dessertsTitle.className = 'canvas-element text';
    dessertsTitle.style.left = '100px';
    dessertsTitle.style.top = '880px';
    dessertsTitle.style.width = '600px';
    dessertsTitle.style.textAlign = 'center';
    dessertsTitle.style.fontFamily = fonts.body;
    dessertsTitle.style.fontSize = '24px';
    dessertsTitle.style.fontWeight = '600';
    dessertsTitle.style.color = colors.primary;
    dessertsTitle.style.letterSpacing = '2px';
    dessertsTitle.contentEditable = "true";
    dessertsTitle.innerHTML = sections.desserts;
    dessertsTitle.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(dessertsTitle);
    canvas.appendChild(dessertsTitle);
    
    // Add dessert items
    yPos = 930;
    items.desserts.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = fonts.body;
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = "true";
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
        itemElement.addEventListener('click', function() {
            // Ensure the element is selectable and editable
            this.focus();
        });
        makeElementDraggable(itemElement);
        canvas.appendChild(itemElement);
        yPos += 40;
    });
    
    // Add tandoor section for Indian cuisine
    if (cuisineType === 'indian' && items.tandoor) {
        // Create a new page for additional sections
        const pageBreak = document.createElement('div');
        pageBreak.className = 'canvas-element';
        pageBreak.style.left = '40px';
        pageBreak.style.top = '1020px';
        pageBreak.style.width = '720px';
        pageBreak.style.height = '1px';
        pageBreak.style.backgroundColor = colors.accent;
        pageBreak.style.opacity = '0.5';
        canvas.appendChild(pageBreak);
        
        // Add tandoor section title
        const tandoorTitle = document.createElement('div');
        tandoorTitle.className = 'canvas-element text';
        tandoorTitle.style.left = '100px';
        tandoorTitle.style.top = '500px';
        tandoorTitle.style.width = '600px';
        tandoorTitle.style.textAlign = 'center';
        tandoorTitle.style.fontFamily = fonts.body;
        tandoorTitle.style.fontSize = '24px';
        tandoorTitle.style.fontWeight = '600';
        tandoorTitle.style.color = colors.primary;
        tandoorTitle.style.letterSpacing = '2px';
        tandoorTitle.contentEditable = "true";
        tandoorTitle.innerHTML = sections.tandoor;
        tandoorTitle.addEventListener('click', function() {
            // Ensure the element is selectable and editable
            this.focus();
        });
        makeElementDraggable(tandoorTitle);
        canvas.appendChild(tandoorTitle);
        
        // Add tandoor items
        let tandoorYPos = 550;
        items.tandoor.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'canvas-element text';
            itemElement.style.left = '150px';
            itemElement.style.top = tandoorYPos + 'px';
            itemElement.style.width = '500px';
            itemElement.style.textAlign = 'center';
            itemElement.style.fontFamily = fonts.body;
            itemElement.style.fontSize = '16px';
            itemElement.style.fontWeight = '400';
            itemElement.style.color = '#444444';
            itemElement.contentEditable = "true";
            itemElement.innerHTML = `${item.name} .................... ${item.price}`;
            itemElement.addEventListener('click', function() {
                // Ensure the element is selectable and editable
                this.focus();
            });
            makeElementDraggable(itemElement);
            canvas.appendChild(itemElement);
            tandoorYPos += 40;
        });
        
        // Add breads section title
        const breadsTitle = document.createElement('div');
        breadsTitle.className = 'canvas-element text';
        breadsTitle.style.left = '100px';
        breadsTitle.style.top = '730px';
        breadsTitle.style.width = '600px';
        breadsTitle.style.textAlign = 'center';
        breadsTitle.style.fontFamily = fonts.body;
        breadsTitle.style.fontSize = '24px';
        breadsTitle.style.fontWeight = '600';
        breadsTitle.style.color = colors.primary;
        breadsTitle.style.letterSpacing = '2px';
        breadsTitle.contentEditable = "true";
        breadsTitle.innerHTML = sections.breads;
        breadsTitle.addEventListener('click', function() {
            // Ensure the element is selectable and editable
            this.focus();
        });
        makeElementDraggable(breadsTitle);
        canvas.appendChild(breadsTitle);
        
        // Add bread items
        let breadsYPos = 780;
        items.breads.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'canvas-element text';
            itemElement.style.left = '150px';
            itemElement.style.top = breadsYPos + 'px';
            itemElement.style.width = '500px';
            itemElement.style.textAlign = 'center';
            itemElement.style.fontFamily = fonts.body;
            itemElement.style.fontSize = '16px';
            itemElement.style.fontWeight = '400';
            itemElement.style.color = '#444444';
            itemElement.contentEditable = "true";
            itemElement.innerHTML = `${item.name} .................... ${item.price}`;
            itemElement.addEventListener('click', function() {
                // Ensure the element is selectable and editable
                this.focus();
            });
            makeElementDraggable(itemElement);
            canvas.appendChild(itemElement);
            breadsYPos += 40;
        });
        
        // Add decorative element for Indian cuisine
        if (cuisineType === 'indian') {
            // Add mandala decoration
            const mandala = document.createElement('div');
            mandala.className = 'canvas-element';
            mandala.style.left = '350px';
            mandala.style.top = '250px';
            mandala.style.width = '100px';
            mandala.style.height = '100px';
            mandala.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/2803/2803147.png")';
            mandala.style.backgroundSize = 'contain';
            mandala.style.backgroundRepeat = 'no-repeat';
            mandala.style.opacity = '0.2';
            mandala.style.zIndex = '-1';
            makeElementDraggable(mandala);
            canvas.appendChild(mandala);
        }
    }
    
    // Add footer
    const footer = document.createElement('div');
    footer.className = 'canvas-element text';
    footer.style.left = '100px';
    footer.style.top = '1050px';
    footer.style.width = '600px';
    footer.style.textAlign = 'center';
    footer.style.fontFamily = fonts.body;
    footer.style.fontSize = '12px';
    footer.style.fontWeight = '400';
    footer.style.color = '#888888';
    footer.contentEditable = "true";
    footer.innerHTML = '123 Gourmet Avenue • (555) 123-4567 • www.restaurant.com';
    footer.addEventListener('click', function() {
        // Ensure the element is selectable and editable
        this.focus();
    });
    makeElementDraggable(footer);
    canvas.appendChild(footer);
    
    // Ensure all text elements are properly editable
    setTimeout(() => {
        const textElements = canvas.querySelectorAll('.canvas-element.text');
        textElements.forEach(element => {
            // Make sure contentEditable is set
            element.contentEditable = "true";
            
            // Add click handler to focus the element
            element.addEventListener('click', function() {
                this.focus();
            });
            
            // Add double-click handler to select all text
            element.addEventListener('dblclick', function() {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(this);
                selection.removeAllRanges();
                selection.addRange(range);
            });
        });
    }, 100);
}

// Update the loadTemplateById function to include the premium template
window.loadTemplateById = function(templateId) {
    // Clear any active template
    const templates = document.querySelectorAll('.template-thumbnail');
    templates.forEach(template => template.classList.remove('active'));
    
    // Mark the selected template as active
    const selectedTemplate = document.querySelector(`.template-thumbnail[data-template-id="${templateId}"]`);
    if (selectedTemplate) {
        selectedTemplate.classList.add('active');
    }
    
    // Load the specific template
    if (templateId === 7) {
        // Show cuisine selector for premium template
        const cuisineSelect = document.createElement('div');
        cuisineSelect.className = 'cuisine-selector';
        cuisineSelect.style.position = 'fixed';
        cuisineSelect.style.top = '50%';
        cuisineSelect.style.left = '50%';
        cuisineSelect.style.transform = 'translate(-50%, -50%)';
        cuisineSelect.style.backgroundColor = '#fff';
        cuisineSelect.style.padding = '20px';
        cuisineSelect.style.borderRadius = '8px';
        cuisineSelect.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        cuisineSelect.style.zIndex = '1000';
        
        cuisineSelect.innerHTML = `
            <h3 style="margin-top: 0; color: #2c3e50;">Select Cuisine Type</h3>
            <select id="cuisine-type" style="width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px;">
                <option value="french">French</option>
                <option value="italian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="indian">Indian</option>
                <option value="mexican">Mexican</option>
                <option value="thai">Thai</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="american">American</option>
            </select>
            <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                <button id="cancel-cuisine" style="padding: 8px 15px; background: #e0e0e0; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button id="apply-cuisine" style="padding: 8px 15px; background: #4a6bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Apply</button>
            </div>
        `;
        
        document.body.appendChild(cuisineSelect);
        
        document.getElementById('cancel-cuisine').addEventListener('click', function() {
            document.body.removeChild(cuisineSelect);
        });
        
        document.getElementById('apply-cuisine').addEventListener('click', function() {
            const cuisineType = document.getElementById('cuisine-type').value;
            document.body.removeChild(cuisineSelect);
            window.loadPremiumTemplate(cuisineType);
        });
    } else {
        generateRandomTemplate();
    }
};