// Create a premium template with sophisticated design
function loadPremiumTemplate() {
    const canvas = document.getElementById('editor-canvas');
    
    // Clear the canvas
    canvas.innerHTML = '';
    
    // Set a premium background color
    canvas.style.backgroundColor = '#f9f7f3';
    
    // Add a subtle texture overlay
    const textureOverlay = document.createElement('div');
    textureOverlay.className = 'canvas-element background';
    textureOverlay.style.left = '0';
    textureOverlay.style.top = '0';
    textureOverlay.style.width = '800px';
    textureOverlay.style.height = '1120px';
    textureOverlay.style.zIndex = '-1';
    textureOverlay.style.opacity = '0.05';
    textureOverlay.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/cream-paper.png")';
    canvas.appendChild(textureOverlay);
    
    // Add elegant gold border
    const borderTop = document.createElement('div');
    borderTop.className = 'canvas-element';
    borderTop.style.left = '40px';
    borderTop.style.top = '40px';
    borderTop.style.width = '720px';
    borderTop.style.height = '2px';
    borderTop.style.backgroundColor = '#c9a959';
    canvas.appendChild(borderTop);
    
    const borderBottom = document.createElement('div');
    borderBottom.className = 'canvas-element';
    borderBottom.style.left = '40px';
    borderBottom.style.top = '1080px';
    borderBottom.style.width = '720px';
    borderBottom.style.height = '2px';
    borderBottom.style.backgroundColor = '#c9a959';
    canvas.appendChild(borderBottom);
    
    const borderLeft = document.createElement('div');
    borderLeft.className = 'canvas-element';
    borderLeft.style.left = '40px';
    borderLeft.style.top = '40px';
    borderLeft.style.width = '2px';
    borderLeft.style.height = '1040px';
    borderLeft.style.backgroundColor = '#c9a959';
    canvas.appendChild(borderLeft);
    
    const borderRight = document.createElement('div');
    borderRight.className = 'canvas-element';
    borderRight.style.left = '758px';
    borderRight.style.top = '40px';
    borderRight.style.width = '2px';
    borderRight.style.height = '1040px';
    borderRight.style.backgroundColor = '#c9a959';
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
    topLeftCorner.style.borderLeft = '3px solid #c9a959';
    topLeftCorner.style.borderTop = '3px solid #c9a959';
    canvas.appendChild(topLeftCorner);
    
    // Top right corner
    const topRightCorner = document.createElement('div');
    topRightCorner.className = 'canvas-element';
    topRightCorner.style.left = (760 - cornerSize) + 'px';
    topRightCorner.style.top = '35px';
    topRightCorner.style.width = cornerSize + 'px';
    topRightCorner.style.height = cornerSize + 'px';
    topRightCorner.style.borderRight = '3px solid #c9a959';
    topRightCorner.style.borderTop = '3px solid #c9a959';
    canvas.appendChild(topRightCorner);
    
    // Bottom left corner
    const bottomLeftCorner = document.createElement('div');
    bottomLeftCorner.className = 'canvas-element';
    bottomLeftCorner.style.left = '35px';
    bottomLeftCorner.style.top = (1080 - cornerSize) + 'px';
    bottomLeftCorner.style.width = cornerSize + 'px';
    bottomLeftCorner.style.height = cornerSize + 'px';
    bottomLeftCorner.style.borderLeft = '3px solid #c9a959';
    bottomLeftCorner.style.borderBottom = '3px solid #c9a959';
    canvas.appendChild(bottomLeftCorner);
    
    // Bottom right corner
    const bottomRightCorner = document.createElement('div');
    bottomRightCorner.className = 'canvas-element';
    bottomRightCorner.style.left = (760 - cornerSize) + 'px';
    bottomRightCorner.style.top = (1080 - cornerSize) + 'px';
    bottomRightCorner.style.width = cornerSize + 'px';
    bottomRightCorner.style.height = cornerSize + 'px';
    bottomRightCorner.style.borderRight = '3px solid #c9a959';
    bottomRightCorner.style.borderBottom = '3px solid #c9a959';
    canvas.appendChild(bottomRightCorner);
    
    // Add restaurant name
    const restaurantName = document.createElement('div');
    restaurantName.className = 'canvas-element text';
    restaurantName.style.left = '100px';
    restaurantName.style.top = '100px';
    restaurantName.style.width = '600px';
    restaurantName.style.textAlign = 'center';
    restaurantName.style.fontFamily = 'Playfair Display, serif';
    restaurantName.style.fontSize = '48px';
    restaurantName.style.fontWeight = '700';
    restaurantName.style.color = '#2c2c2c';
    restaurantName.style.letterSpacing = '2px';
    restaurantName.contentEditable = true;
    restaurantName.innerHTML = 'The Cozy French';
    makeElementDraggable(restaurantName);
    canvas.appendChild(restaurantName);
    
    // Add tagline
    const tagline = document.createElement('div');
    tagline.className = 'canvas-element text';
    tagline.style.left = '100px';
    tagline.style.top = '170px';
    tagline.style.width = '600px';
    tagline.style.textAlign = 'center';
    tagline.style.fontFamily = 'Montserrat, sans-serif';
    tagline.style.fontSize = '18px';
    tagline.style.fontWeight = '400';
    tagline.style.color = '#666666';
    tagline.style.letterSpacing = '3px';
    tagline.style.textTransform = 'uppercase';
    tagline.contentEditable = true;
    tagline.innerHTML = 'Culinary Excellence';
    makeElementDraggable(tagline);
    canvas.appendChild(tagline);
    
    // Add decorative element
    const decorElement = document.createElement('div');
    decorElement.className = 'canvas-element';
    decorElement.style.left = '300px';
    decorElement.style.top = '210px';
    decorElement.style.width = '200px';
    decorElement.style.height = '30px';
    decorElement.style.backgroundColor = '#c9a959';
    decorElement.style.opacity = '0.8';
    makeElementDraggable(decorElement);
    canvas.appendChild(decorElement);
    
    // Add appetizers section
    const appetizersTitle = document.createElement('div');
    appetizersTitle.className = 'canvas-element text';
    appetizersTitle.style.left = '100px';
    appetizersTitle.style.top = '280px';
    appetizersTitle.style.width = '600px';
    appetizersTitle.style.textAlign = 'center';
    appetizersTitle.style.fontFamily = 'Montserrat, sans-serif';
    appetizersTitle.style.fontSize = '24px';
    appetizersTitle.style.fontWeight = '600';
    appetizersTitle.style.color = '#2c2c2c';
    appetizersTitle.style.letterSpacing = '2px';
    appetizersTitle.contentEditable = true;
    appetizersTitle.innerHTML = 'APPETIZERS';
    makeElementDraggable(appetizersTitle);
    canvas.appendChild(appetizersTitle);
    
    // Add appetizer items
    const appetizerItems = [
        { name: 'Truffle Arancini', price: '$9' },
        { name: 'Beef Carpaccio', price: '$13' },
        { name: 'Bruschetta', price: '$8' }
    ];
    
    let yPos = 330;
    appetizerItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = 'Montserrat, sans-serif';
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = true;
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
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
    
    const image = document.createElement('img');
    image.src = 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg';
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.objectFit = 'cover';
    
    imageContainer.appendChild(image);
    makeElementDraggable(imageContainer);
    canvas.appendChild(imageContainer);
    
    // Add beverages section
    const beveragesTitle = document.createElement('div');
    beveragesTitle.className = 'canvas-element text';
    beveragesTitle.style.left = '100px';
    beveragesTitle.style.top = '680px';
    beveragesTitle.style.width = '600px';
    beveragesTitle.style.textAlign = 'center';
    beveragesTitle.style.fontFamily = 'Montserrat, sans-serif';
    beveragesTitle.style.fontSize = '24px';
    beveragesTitle.style.fontWeight = '600';
    beveragesTitle.style.color = '#2c2c2c';
    beveragesTitle.style.letterSpacing = '2px';
    beveragesTitle.contentEditable = true;
    beveragesTitle.innerHTML = 'BEVERAGES';
    makeElementDraggable(beveragesTitle);
    canvas.appendChild(beveragesTitle);
    
    // Add beverage items
    const beverageItems = [
        { name: 'House Wine', price: '$8' },
        { name: 'Craft Beer', price: '$6' },
        { name: 'Signature Cocktail', price: '$13' }
    ];
    
    yPos = 730;
    beverageItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = 'Montserrat, sans-serif';
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = true;
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
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
    dessertsTitle.style.fontFamily = 'Montserrat, sans-serif';
    dessertsTitle.style.fontSize = '24px';
    dessertsTitle.style.fontWeight = '600';
    dessertsTitle.style.color = '#2c2c2c';
    dessertsTitle.style.letterSpacing = '2px';
    dessertsTitle.contentEditable = true;
    dessertsTitle.innerHTML = 'DESSERTS';
    makeElementDraggable(dessertsTitle);
    canvas.appendChild(dessertsTitle);
    
    // Add dessert items
    const dessertItems = [
        { name: 'Chocolate Soufflé', price: '$10' },
        { name: 'Crème Brûlée', price: '$8' },
        { name: 'Tiramisu', price: '$9' }
    ];
    
    yPos = 930;
    dessertItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'canvas-element text';
        itemElement.style.left = '150px';
        itemElement.style.top = yPos + 'px';
        itemElement.style.width = '500px';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontFamily = 'Montserrat, sans-serif';
        itemElement.style.fontSize = '16px';
        itemElement.style.fontWeight = '400';
        itemElement.style.color = '#444444';
        itemElement.contentEditable = true;
        itemElement.innerHTML = `${item.name} .................... ${item.price}`;
        makeElementDraggable(itemElement);
        canvas.appendChild(itemElement);
        yPos += 40;
    });
    
    // Add footer
    const footer = document.createElement('div');
    footer.className = 'canvas-element text';
    footer.style.left = '100px';
    footer.style.top = '1050px';
    footer.style.width = '600px';
    footer.style.textAlign = 'center';
    footer.style.fontFamily = 'Montserrat, sans-serif';
    footer.style.fontSize = '12px';
    footer.style.fontWeight = '400';
    footer.style.color = '#888888';
    footer.contentEditable = true;
    footer.innerHTML = '123 Gourmet Avenue • (555) 123-4567 • www.restaurant.com';
    makeElementDraggable(footer);
    canvas.appendChild(footer);
}

// Update the loadTemplateById function to include the premium template
function loadTemplateById(templateId) {
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
        loadPremiumTemplate();
    } else {
        generateRandomTemplate();
    }
}