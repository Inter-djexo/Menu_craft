// Editor functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the editor
    initEditor();
    
    // Load templates in the sidebar
    loadTemplates();
    
    // Initialize Pexels API
    initPexelsAPI();
    
    // Set up event listeners for toolbar buttons
    setupToolbarListeners();
    
    // Set up event listeners for property panel
    setupPropertyPanel();
    
    // Check if a template ID was passed in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get('template');
    
    if (templateId) {
        loadTemplateById(templateId);
    }
});

// Initialize the editor canvas
// Initialize the editor canvas
function initEditor() {
    const canvas = document.getElementById('editor-canvas');
    
    // Make canvas elements selectable
    canvas.addEventListener('click', function(e) {
        // If clicking on the canvas itself (not an element), deselect all
        if (e.target === canvas) {
            deselectAllElements();
            hideAllPropertyGroups();
            return;
        }
        
        // If clicking on an element or its child
        let element = e.target;
        while (element && !element.classList.contains('canvas-element')) {
            element = element.parentElement;
            if (element === canvas) {
                deselectAllElements();
                hideAllPropertyGroups();
                return;
            }
        }
        
        if (element && element.classList.contains('canvas-element')) {
            selectElement(element);
        }
    });
    
    // Set initial canvas background color
    canvas.style.backgroundColor = '#ffffff';
}

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

// Load a template by ID
function loadTemplateById(templateId) {
    // In a real app, this would fetch the template data from a server
    // For this example, we'll use predefined templates
    
    const canvas = document.getElementById('editor-canvas');
    
    // Show loading indicator
    canvas.innerHTML = '<div class="loading-template">Loading template...</div>';
    
    // Set template background
    canvas.style.backgroundColor = '#ffffff';
    
    // Template data with Pexels image queries
    const templates = {
        1: { // Elegant Bistro
            backgroundColor: '#f8f5f0',
            imageQueries: ['gourmet food', 'fine dining'],
            setup: function(images) {
                // Clear the canvas
                canvas.innerHTML = '';
                
                // Add header
                addTextElement('Elegant Bistro', 'center', '48px', 'Playfair Display, serif', '#2c3e50', 50, 50, 700, 80);
                
                // Add tagline
                addTextElement('Fine Dining Experience', 'center', '24px', 'Montserrat, sans-serif', '#7f8c8d', 50, 140, 700, 40);
                
                // Add decorative line
                addShapeElement('rectangle', '#d4af37', 300, 190, 200, 2);
                
                // Add sections
                addTextElement('APPETIZERS', 'left', '28px', 'Montserrat, sans-serif', '#2c3e50', 50, 230, 700, 40);
                addTextElement('MAIN COURSES', 'left', '28px', 'Montserrat, sans-serif', '#2c3e50', 50, 400, 700, 40);
                addTextElement('DESSERTS', 'left', '28px', 'Montserrat, sans-serif', '#2c3e50', 50, 570, 700, 40);
                
                // Add menu items
                addTextElement('Truffle Arancini .................... $12', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 280, 400, 30);
                addTextElement('Beef Carpaccio ..................... $14', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 320, 400, 30);
                addTextElement('Lobster Risotto ..................... $32', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 450, 400, 30);
                addTextElement('Filet Mignon ......................... $38', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 490, 400, 30);
                addTextElement('Chocolate Soufflé ................. $10', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 620, 400, 30);
                addTextElement('Crème Brûlée ....................... $9', 'left', '18px', 'Montserrat, sans-serif', '#34495e', 50, 660, 400, 30);
                
                // Add images if available
                if (images && images.length > 0) {
                    // Add a featured image
                    addImageElement(images[0], 550, 280, 200, 150);
                    
                    // Add another image if available
                    if (images.length > 1) {
                        addImageElement(images[1], 550, 480, 200, 150);
                    }
                }
                
                // Add footer
                addTextElement('123 Gourmet Avenue • (555) 123-4567 • www.elegantbistro.com', 'center', '14px', 'Montserrat, sans-serif', '#7f8c8d', 50, 1050, 700, 20);
            }
        },
        2: { // Modern Cafe
            backgroundColor: '#ffffff',
            imageQueries: ['coffee cafe', 'breakfast food'],
            setup: function(images) {
                // Clear the canvas
                canvas.innerHTML = '';
                
                // Add header with background
                addShapeElement('rectangle', '#3498db', 0, 0, 800, 150);
                addTextElement('MODERN CAFE', 'center', '48px', 'Oswald, sans-serif', '#ffffff', 50, 50, 700, 80);
                addTextElement('BREAKFAST & LUNCH', 'center', '20px', 'Roboto, sans-serif', '#ffffff', 50, 110, 400, 30);
                
                // Add sections
                addTextElement('BREAKFAST', 'center', '32px', 'Oswald, sans-serif', '#3498db', 50, 200, 700, 50);
                
                // Add breakfast items
                addTextElement('Avocado Toast', 'left', '20px', 'Roboto, sans-serif', '#2c3e50', 50, 260, 700, 30);
                addTextElement('Smashed avocado, poached eggs, cherry tomatoes', 'left', '16px', 'Roboto, sans-serif', '#7f8c8d', 50, 290, 400, 25);
                addTextElement('$12', 'right', '20px', 'Roboto, sans-serif', '#3498db', 700, 260, 50, 30);
                
                addTextElement('Pancake Stack', 'left', '20px', 'Roboto, sans-serif', '#2c3e50', 50, 330, 700, 30);
                addTextElement('Buttermilk pancakes, maple syrup, fresh berries', 'left', '16px', 'Roboto, sans-serif', '#7f8c8d', 50, 360, 400, 25);
                addTextElement('$10', 'right', '20px', 'Roboto, sans-serif', '#3498db', 700, 330, 50, 30);
                
                // Add lunch section
                addTextElement('LUNCH', 'center', '32px', 'Oswald, sans-serif', '#3498db', 50, 420, 700, 50);
                
                // Add lunch items
                addTextElement('Quinoa Bowl', 'left', '20px', 'Roboto, sans-serif', '#2c3e50', 50, 480, 700, 30);
                addTextElement('Mixed greens, roasted vegetables, tahini dressing', 'left', '16px', 'Roboto, sans-serif', '#7f8c8d', 50, 510, 400, 25);
                addTextElement('$14', 'right', '20px', 'Roboto, sans-serif', '#3498db', 700, 480, 50, 30);
                
                addTextElement('Chicken Sandwich', 'left', '20px', 'Roboto, sans-serif', '#2c3e50', 50, 550, 700, 30);
                addTextElement('Grilled chicken, avocado, bacon, sourdough bread', 'left', '16px', 'Roboto, sans-serif', '#7f8c8d', 50, 580, 400, 25);
                addTextElement('$16', 'right', '20px', 'Roboto, sans-serif', '#3498db', 700, 550, 50, 30);
                
                // Add images if available
                if (images && images.length > 0) {
                    // Add a featured image
                    addImageElement(images[0], 550, 260, 200, 150);
                    
                    // Add another image if available
                    if (images.length > 1) {
                        addImageElement(images[1], 550, 480, 200, 150);
                    }
                }
                
                // Add footer
                addShapeElement('rectangle', '#3498db', 0, 1000, 800, 120);
                addTextElement('OPEN DAILY 7AM - 3PM', 'center', '20px', 'Oswald, sans-serif', '#ffffff', 50, 1030, 700, 30);
                addTextElement('123 Coffee Street • (555) 987-6543 • www.moderncafe.com', 'center', '16px', 'Roboto, sans-serif', '#ffffff', 50, 1070, 400, 20);
            }
        },
        // Add more templates as needed
    };
    
    const template = templates[parseInt(templateId)];
    
    if (!template) {
        // Default empty template
        canvas.innerHTML = '';
        return;
    }
    
    // Set the background color
    canvas.style.backgroundColor = template.backgroundColor;
    
    // Pexels API key
    const apiKey = 'TUzzSvjEUXBV29vKjuGwBVr4YwmxBnJI6L07LtJScBOexfWXYXmzZj4o';
    
    // Fetch images for the template
    const fetchPromises = template.imageQueries.map(query => {
        return fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
            headers: {
                'Authorization': apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                return data.photos[0].src.medium;
            }
            return null;
        })
        .catch(error => {
            console.error(`Error fetching image for ${query}:`, error);
            return null;
        });
    });
    
    // Wait for all image fetches to complete
    Promise.all(fetchPromises)
        .then(images => {
            // Filter out any null values
            const validImages = images.filter(img => img !== null);
            
            // Set up the template with the fetched images
            template.setup(validImages);
            
            // Add Pexels attribution if images were used
            if (validImages.length > 0) {
                const attribution = document.createElement('div');
                attribution.className = 'pexels-attribution';
                attribution.style.position = 'absolute';
                attribution.style.bottom = '5px';
                attribution.style.right = '5px';
                attribution.style.fontSize = '10px';
                attribution.style.color = '#999';
                attribution.innerHTML = 'Photos provided by <a href="https://www.pexels.com" target="_blank">Pexels</a>';
                canvas.appendChild(attribution);
            }
        })
        .catch(error => {
            console.error('Error loading template images:', error);
            
            // If there's an error, still set up the template without images
            template.setup([]);
        });
}

// Add a text element to the canvas
function addTextElement(text, align, fontSize, fontFamily, color, left, top, width, height) {
    const canvas = document.getElementById('editor-canvas');
    const textElement = document.createElement('div');
    
    textElement.className = 'canvas-element text';
    textElement.style.left = `${left}px`;
    textElement.style.top = `${top}px`;
    textElement.style.width = `${width}px`;
    textElement.style.height = `${height}px`;
    textElement.style.fontSize = fontSize;
    textElement.style.fontFamily = fontFamily;
    textElement.style.color = color;
    textElement.style.textAlign = align;
    textElement.contentEditable = true;
    textElement.innerHTML = text;
    
    // Add resize handles
    addResizeHandles(textElement);
    
    // Make element draggable
    makeElementDraggable(textElement);
    
    canvas.appendChild(textElement);
    return textElement;
}

// Add a shape element to the canvas
function addShapeElement(type, color, left, top, width, height) {
    const canvas = document.getElementById('editor-canvas');
    const shapeElement = document.createElement('div');
    
    shapeElement.className = 'canvas-element shape';
    shapeElement.setAttribute('data-shape-type', type);
    shapeElement.style.left = `${left}px`;
    shapeElement.style.top = `${top}px`;
    shapeElement.style.width = `${width}px`;
    shapeElement.style.height = `${height}px`;
    shapeElement.style.backgroundColor = color;
    
    // Set shape-specific styles
    if (type === 'circle') {
        shapeElement.style.borderRadius = '50%';
    } else if (type === 'rectangle') {
        shapeElement.style.borderRadius = '0';
    }
    
    // Add resize handles
    addResizeHandles(shapeElement);
    
    // Make element draggable
    makeElementDraggable(shapeElement);
    
    canvas.appendChild(shapeElement);
    return shapeElement;
}

// Add an image element to the canvas
function addImageElement(src, left, top, width, height) {
    const canvas = document.getElementById('editor-canvas');
    const imageContainer = document.createElement('div');
    
    imageContainer.className = 'canvas-element image';
    imageContainer.style.left = `${left}px`;
    imageContainer.style.top = `${top}px`;
    imageContainer.style.width = `${width}px`;
    imageContainer.style.height = `${height}px`;
    
    const image = document.createElement('img');
    image.src = src;
    image.alt = 'Menu image';
    
    imageContainer.appendChild(image);
    
    // Add resize handles
    addResizeHandles(imageContainer);
    
    // Make element draggable
    makeElementDraggable(imageContainer);
    
    canvas.appendChild(imageContainer);
    return imageContainer;
}

// Add resize handles to an element
function addResizeHandles(element) {
    const handles = [
        'top-left', 'top-center', 'top-right',
        'left-center', 'right-center',
        'bottom-left', 'bottom-center', 'bottom-right'
    ];
    
    handles.forEach(position => {
        const handle = document.createElement('div');
        handle.className = `resize-handle ${position}`;
        
        // Add touch support for mobile devices
        handle.addEventListener('mousedown', function(e) {
            e.stopPropagation();
            startResize(element, position, e);
        });
        
        handle.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            const touch = e.touches[0];
            startResize(element, position, touch);
        });
        
        element.appendChild(handle);
    });
}

// Select an element
function selectElement(element) {
    // Deselect all elements first
    deselectAllElements();
    
    // Select the clicked element
    element.classList.add('selected');
    
    // Show the appropriate property panel
    showPropertyPanel(element);
}

// Deselect all elements
function deselectAllElements() {
    const elements = document.querySelectorAll('.canvas-element');
    elements.forEach(el => {
        el.classList.remove('selected');
    });
}

// Hide all property groups
function hideAllPropertyGroups() {
    const propertyGroups = document.querySelectorAll('.property-group');
    propertyGroups.forEach(group => {
        group.classList.add('hidden');
    });
}

// Show the appropriate property panel for the selected element
function showPropertyPanel(element) {
    hideAllPropertyGroups();
    
    if (element.classList.contains('text')) {
        const textProperties = document.getElementById('text-properties');
        textProperties.classList.remove('hidden');
        
        // Update text property controls to match the selected element
        document.getElementById('font-family').value = element.style.fontFamily.split(',')[0].replace(/['"]/g, '');
        document.getElementById('font-size').value = parseInt(element.style.fontSize);
        document.getElementById('text-color').value = rgbToHex(element.style.color);
        
        // Update text style buttons
        const boldBtn = document.getElementById('bold-btn');
        const italicBtn = document.getElementById('italic-btn');
        const underlineBtn = document.getElementById('underline-btn');
        
        boldBtn.classList.toggle('active', element.style.fontWeight === 'bold' || parseInt(element.style.fontWeight) >= 700);
        italicBtn.classList.toggle('active', element.style.fontStyle === 'italic');
        underlineBtn.classList.toggle('active', element.style.textDecoration === 'underline');
        
        // Update text alignment buttons
                // Update text alignment buttons
                const alignLeftBtn = document.getElementById('align-left');
                const alignCenterBtn = document.getElementById('align-center');
                const alignRightBtn = document.getElementById('align-right');
                
                alignLeftBtn.classList.toggle('active', element.style.textAlign === 'left');
                alignCenterBtn.classList.toggle('active', element.style.textAlign === 'center');
                alignRightBtn.classList.toggle('active', element.style.textAlign === 'right');
                
            } else if (element.classList.contains('shape')) {
                const shapeProperties = document.getElementById('shape-properties');
                shapeProperties.classList.remove('hidden');
                
                // Update shape property controls
                document.getElementById('shape-color').value = rgbToHex(element.style.backgroundColor);
                document.getElementById('border-color').value = rgbToHex(element.style.borderColor || '#000000');
                document.getElementById('border-width').value = parseInt(element.style.borderWidth) || 0;
                document.getElementById('shape-opacity').value = element.style.opacity || 1;
                
            } else if (element.classList.contains('image')) {
                const imageProperties = document.getElementById('image-properties');
                imageProperties.classList.remove('hidden');
                
                // Update image property controls
                document.getElementById('image-opacity').value = element.style.opacity || 1;
                document.getElementById('image-filter').value = element.style.filter ? element.style.filter.split('(')[0] : 'none';
            }
        }
        
        // Setup toolbar listeners
        function setupToolbarListeners() {
            // Generate new template button
            const generateBtn = document.getElementById('generate-btn');
            if (generateBtn) {
                generateBtn.addEventListener('click', function() {
                    generateRandomTemplate();
                });
            }
            
            // Undo button
            const undoBtn = document.getElementById('undo-btn');
            if (undoBtn) {
                undoBtn.addEventListener('click', function() {
                    // Implement undo functionality
                    alert('Undo functionality would be implemented here');
                });
            }
            
            // Redo button
            const redoBtn = document.getElementById('redo-btn');
            if (redoBtn) {
                redoBtn.addEventListener('click', function() {
                    // Implement redo functionality
                    alert('Redo functionality would be implemented here');
                });
            }
            
            // Save button
            const saveBtn = document.getElementById('save-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', function() {
                    saveDesign();
                });
            }
            
            // Export buttons
            const exportPngBtn = document.getElementById('export-png');
            if (exportPngBtn) {
                exportPngBtn.addEventListener('click', function() {
                    exportAsPNG();
                });
            }
            
            const exportPdfBtn = document.getElementById('export-pdf');
            if (exportPdfBtn) {
                exportPdfBtn.addEventListener('click', function() {
                    exportAsPDF();
                });
            }
            
            // Make elements in the sidebar draggable
            const elementItems = document.querySelectorAll('.element-item');
            elementItems.forEach(item => {
                item.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', item.getAttribute('data-type'));
                });
            });
            
            // Setup canvas as drop target
            const canvas = document.getElementById('editor-canvas');
            canvas.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            
            canvas.addEventListener('drop', function(e) {
                e.preventDefault();
                const type = e.dataTransfer.getData('text/plain');
                
                // Calculate position relative to canvas
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Add the appropriate element type
                if (type === 'text') {
                    const textElement = addTextElement('Double click to edit', 'left', '16px', 'Arial, sans-serif', '#000000', x, y, 200, 30);
                    selectElement(textElement);
                } else if (type === 'shape') {
                    const shapeElement = addShapeElement('rectangle', '#e0e0e0', x, y, 100, 100);
                    selectElement(shapeElement);
                } else if (type === 'image') {
                    // Open image selection dialog
                    openImageSelectionDialog(x, y);
                }
            });
            
            // Background color picker
            const bgColorPicker = document.getElementById('bg-color-picker');
            if (bgColorPicker) {
                bgColorPicker.addEventListener('input', function() {
                    canvas.style.backgroundColor = this.value;
                });
            }
        }
        
        // Setup property panel listeners
        function setupPropertyPanel() {
            // Text properties
            const fontFamily = document.getElementById('font-family');
            if (fontFamily) {
                fontFamily.addEventListener('change', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.fontFamily = this.value;
                    }
                });
            }
            
            const fontSize = document.getElementById('font-size');
            if (fontSize) {
                fontSize.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.fontSize = `${this.value}px`;
                    }
                });
            }
            
            const textColor = document.getElementById('text-color');
            if (textColor) {
                textColor.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.color = this.value;
                    }
                });
            }
            
            // Text style buttons
            const boldBtn = document.getElementById('bold-btn');
            if (boldBtn) {
                boldBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        if (selectedElement.style.fontWeight === 'bold' || parseInt(selectedElement.style.fontWeight) >= 700) {
                            selectedElement.style.fontWeight = 'normal';
                            this.classList.remove('active');
                        } else {
                            selectedElement.style.fontWeight = 'bold';
                            this.classList.add('active');
                        }
                    }
                });
            }
            
            const italicBtn = document.getElementById('italic-btn');
            if (italicBtn) {
                italicBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        if (selectedElement.style.fontStyle === 'italic') {
                            selectedElement.style.fontStyle = 'normal';
                            this.classList.remove('active');
                        } else {
                            selectedElement.style.fontStyle = 'italic';
                            this.classList.add('active');
                        }
                    }
                });
            }
            
            const underlineBtn = document.getElementById('underline-btn');
            if (underlineBtn) {
                underlineBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        if (selectedElement.style.textDecoration === 'underline') {
                            selectedElement.style.textDecoration = 'none';
                            this.classList.remove('active');
                        } else {
                            selectedElement.style.textDecoration = 'underline';
                            this.classList.add('active');
                        }
                    }
                });
            }
            
            // Text alignment buttons
            const alignLeftBtn = document.getElementById('align-left');
            if (alignLeftBtn) {
                alignLeftBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.textAlign = 'left';
                        document.querySelectorAll('.text-align-buttons button').forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            }
            
            const alignCenterBtn = document.getElementById('align-center');
            if (alignCenterBtn) {
                alignCenterBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.textAlign = 'center';
                        document.querySelectorAll('.text-align-buttons button').forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            }
            
            const alignRightBtn = document.getElementById('align-right');
            if (alignRightBtn) {
                alignRightBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('text')) {
                        selectedElement.style.textAlign = 'right';
                        document.querySelectorAll('.text-align-buttons button').forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            }
            
            // Shape properties
            const shapeColor = document.getElementById('shape-color');
            if (shapeColor) {
                shapeColor.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('shape')) {
                        selectedElement.style.backgroundColor = this.value;
                    }
                });
            }
            
            const borderColor = document.getElementById('border-color');
            if (borderColor) {
                borderColor.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('shape')) {
                        selectedElement.style.borderColor = this.value;
                    }
                });
            }
            
            const borderWidth = document.getElementById('border-width');
            if (borderWidth) {
                borderWidth.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('shape')) {
                        selectedElement.style.borderStyle = parseInt(this.value) > 0 ? 'solid' : 'none';
                        selectedElement.style.borderWidth = `${this.value}px`;
                    }
                });
            }
            
            const shapeOpacity = document.getElementById('shape-opacity');
            if (shapeOpacity) {
                shapeOpacity.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('shape')) {
                        selectedElement.style.opacity = this.value;
                    }
                });
            }
            
            // Image properties
            const imageOpacity = document.getElementById('image-opacity');
            if (imageOpacity) {
                imageOpacity.addEventListener('input', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('image')) {
                        selectedElement.style.opacity = this.value;
                    }
                });
            }
            
            const imageFilter = document.getElementById('image-filter');
            if (imageFilter) {
                imageFilter.addEventListener('change', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement && selectedElement.classList.contains('image')) {
                        const filterValue = this.value;
                        if (filterValue === 'none') {
                            selectedElement.style.filter = 'none';
                        } else if (filterValue === 'grayscale') {
                            selectedElement.style.filter = 'grayscale(100%)';
                        } else if (filterValue === 'sepia') {
                            selectedElement.style.filter = 'sepia(100%)';
                        } else if (filterValue === 'blur') {
                            selectedElement.style.filter = 'blur(2px)';
                        }
                    }
                });
            }
            
            // Delete element button
            const deleteElementBtn = document.getElementById('delete-element');
            if (deleteElementBtn) {
                deleteElementBtn.addEventListener('click', function() {
                    const selectedElement = document.querySelector('.canvas-element.selected');
                    if (selectedElement) {
                        selectedElement.remove();
                        hideAllPropertyGroups();
                    }
                });
            }
        }
        
        // Generate a random template
        function generateRandomTemplate() {
            // Get a random template ID between 1 and 6
            const randomId = Math.floor(Math.random() * 6) + 1;
            loadTemplateById(randomId);
        }
        
        // Save the current design
        function saveDesign() {
            // In a real app, this would save the design to a server or local storage
            alert('Design saved successfully!');
        }
        
        // Convert RGB color to HEX
        function rgbToHex(rgb) {
            // If rgb is already a hex color or undefined, return it or default to black
            if (!rgb || rgb.startsWith('#')) {
                return rgb || '#000000';
            }
            
            // Extract RGB values
            const rgbValues = rgb.match(/\d+/g);
            if (!rgbValues || rgbValues.length < 3) {
                return '#000000';
            }
            
            // Convert to hex
            return '#' + rgbValues.map(x => {
                const hex = parseInt(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        }
        
        // Make an element draggable
        function makeElementDraggable(element) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            
            // Add mouse event listeners
            element.addEventListener('mousedown', dragMouseDown);
            
            // Add touch event listeners for mobile devices
            element.addEventListener('touchstart', dragTouchStart, { passive: false });
            
            function dragMouseDown(e) {
                e.preventDefault();
                
                // Select the element
                selectElement(element);
                
                // Get the mouse cursor position at startup
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                document.addEventListener('mousemove', elementDrag);
                document.addEventListener('mouseup', closeDragElement);
            }
            
            function dragTouchStart(e) {
                e.preventDefault(); // Prevent scrolling when touching draggable elements
                
                // Select the element
                selectElement(element);
                
                // Get the touch position at startup
                const touch = e.touches[0];
                pos3 = touch.clientX;
                pos4 = touch.clientY;
                
                document.addEventListener('touchmove', elementTouchDrag, { passive: false });
                document.addEventListener('touchend', closeTouchDragElement);
            }
            
            function elementDrag(e) {
                e.preventDefault();
                
                // Calculate the new cursor position
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                // Set the element's new position
                element.style.top = (element.offsetTop - pos2) + "px";
                element.style.left = (element.offsetLeft - pos1) + "px";
            }
            
            function elementTouchDrag(e) {
                e.preventDefault();
                
                // Calculate the new touch position
                const touch = e.touches[0];
                pos1 = pos3 - touch.clientX;
                pos2 = pos4 - touch.clientY;
                pos3 = touch.clientX;
                pos4 = touch.clientY;
                
                // Set the element's new position
                element.style.top = (element.offsetTop - pos2) + "px";
                element.style.left = (element.offsetLeft - pos1) + "px";
            }
            
            function closeDragElement() {
                // Stop moving when mouse button is released
                document.removeEventListener('mousemove', elementDrag);
                document.removeEventListener('mouseup', closeDragElement);
            }
            
            function closeTouchDragElement() {
                // Stop moving when touch ends
                document.removeEventListener('touchmove', elementTouchDrag);
                document.removeEventListener('touchend', closeTouchDragElement);
            }
        }
        
        // Start resizing an element
        // Start resizing an element
function startResize(element, position, e) {
    e.preventDefault();
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);
    const startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10);
    const startLeft = parseInt(document.defaultView.getComputedStyle(element).left, 10);
    const startTop = parseInt(document.defaultView.getComputedStyle(element).top, 10);
    
    // Add mouse event listeners
    document.addEventListener('mousemove', resizeElement);
    document.addEventListener('mouseup', stopResize);
    
    // Add touch event listeners for mobile devices
    document.addEventListener('touchmove', resizeTouchElement, { passive: false });
    document.addEventListener('touchend', stopTouchResize);
    
    function resizeElement(e) {
        handleResize(e.clientX, e.clientY);
    }
    
    function resizeTouchElement(e) {
        e.preventDefault(); // Prevent scrolling during resize
        const touch = e.touches[0];
        handleResize(touch.clientX, touch.clientY);
    }
    
    function handleResize(clientX, clientY) {
        // Handle corner resizing
        if (position === 'bottom-right') {
            const width = startWidth + clientX - startX;
            const height = startHeight + clientY - startY;
            
            if (width > 20) {
                element.style.width = width + 'px';
            }
            
            if (height > 20) {
                element.style.height = height + 'px';
            }
        } else if (position === 'bottom-left') {
            const width = startWidth - (clientX - startX);
            const height = startHeight + clientY - startY;
            const left = startLeft + (clientX - startX);
            
            if (width > 20) {
                element.style.width = width + 'px';
                element.style.left = left + 'px';
            }
            
            if (height > 20) {
                element.style.height = height + 'px';
            }
        } else if (position === 'top-right') {
            const width = startWidth + clientX - startX;
            const height = startHeight - (clientY - startY);
            const top = startTop + (clientY - startY);
            
            if (width > 20) {
                element.style.width = width + 'px';
            }
            
            if (height > 20) {
                element.style.height = height + 'px';
                element.style.top = top + 'px';
            }
        } else if (position === 'top-left') {
            const width = startWidth - (clientX - startX);
            const height = startHeight - (clientY - startY);
            const left = startLeft + (clientX - startX);
            const top = startTop + (clientY - startY);
            
            if (width > 20) {
                element.style.width = width + 'px';
                element.style.left = left + 'px';
            }
            
            if (height > 20) {
                element.style.height = height + 'px';
                element.style.top = top + 'px';
            }
        }
        // Handle edge resizing
        else if (position === 'top-center') {
            const height = startHeight - (clientY - startY);
            const top = startTop + (clientY - startY);
            
            if (height > 20) {
                element.style.height = height + 'px';
                element.style.top = top + 'px';
            }
        } else if (position === 'bottom-center') {
            const height = startHeight + clientY - startY;
            
            if (height > 20) {
                element.style.height = height + 'px';
            }
        } else if (position === 'left-center') {
            const width = startWidth - (clientX - startX);
            const left = startLeft + (clientX - startX);
            
            if (width > 20) {
                element.style.width = width + 'px';
                element.style.left = left + 'px';
            }
        } else if (position === 'right-center') {
            const width = startWidth + clientX - startX;
            
            if (width > 20) {
                element.style.width = width + 'px';
            }
        }
    }
    
    function stopResize() {
        document.removeEventListener('mousemove', resizeElement);
        document.removeEventListener('mouseup', stopResize);
    }
    
    function stopTouchResize() {
        document.removeEventListener('touchmove', resizeTouchElement);
        document.removeEventListener('touchend', stopTouchResize);
    }
}

// Open image selection dialog
function openImageSelectionDialog(x, y) {
    // Create a modal dialog for image selection
    const modal = document.createElement('div');
    modal.className = 'image-selection-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Select an Image</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="search-container">
                    <input type="text" id="modal-image-search" placeholder="Search for images...">
                    <button id="modal-search-btn">Search</button>
                </div>
                <div id="modal-images-container" class="images-grid">
                    <div class="loading">Loading images...</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    const searchBtn = modal.querySelector('#modal-search-btn');
    const searchInput = modal.querySelector('#modal-image-search');
    const imagesContainer = modal.querySelector('#modal-images-container');
    
    // Load initial images
    fetchPexelsImages('food menu', imagesContainer, (imageUrl) => {
        modal.remove();
        const imageElement = addImageElement(imageUrl, x, y, 300, 200);
        selectElement(imageElement);
    });
    
    // Add search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchPexelsImages(query, imagesContainer, (imageUrl) => {
                modal.remove();
                const imageElement = addImageElement(imageUrl, x, y, 300, 200);
                selectElement(imageElement);
            });
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                fetchPexelsImages(query, imagesContainer, (imageUrl) => {
                    modal.remove();
                    const imageElement = addImageElement(imageUrl, x, y, 300, 200);
                    selectElement(imageElement);
                });
            }
        }
    });
    
    // Add CSS for the modal
    const style = document.createElement('style');
    style.textContent = `
        .image-selection-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            border-radius: 5px;
            width: 80%;
            max-width: 800px;
            max-height: 80vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #eee;
        }
        .modal-header h3 {
            margin: 0;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        .modal-body {
            padding: 15px;
            overflow-y: auto;
        }
        .search-container {
            display: flex;
            margin-bottom: 15px;
        }
        .search-container input {
            flex: 1;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px 0 0 4px;
        }
        .search-container button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
        }
        .images-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
        }
        .image-item {
            cursor: pointer;
            border-radius: 4px;
            overflow: hidden;
            transition: transform 0.2s;
        }
        .image-item:hover {
            transform: scale(1.05);
        }
        .image-item img {
            width: 100%;
            height: 100px;
            object-fit: cover;
        }
        .loading, .error, .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 20px;
        }
    `;
    document.head.appendChild(style);
}

// Fetch images from Pexels API
function fetchPexelsImages(query, container, onSelect) {
    // Clear previous images
    container.innerHTML = '<div class="loading">Loading images...</div>';
    
    // Pexels API key
    const apiKey = 'TUzzSvjEUXBV29vKjuGwBVr4YwmxBnJI6L07LtJScBOexfWXYXmzZj4o';
    
    // Fetch images based on search query
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=20`, {
        headers: {
            'Authorization': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.photos.length === 0) {
            container.innerHTML = '<div class="no-results">No images found. Try a different search term.</div>';
        } else {
            // Clear container
            container.innerHTML = '';
            
            // Add each photo to the container
            data.photos.forEach(photo => {
                const imageItem = document.createElement('div');
                imageItem.className = 'image-item';
                
                const img = document.createElement('img');
                img.src = photo.src.medium;
                img.alt = photo.photographer;
                
                imageItem.appendChild(img);
                
                // Add click event to select the image
                imageItem.addEventListener('click', () => {
                    onSelect(photo.src.medium);
                });
                
                container.appendChild(imageItem);
            });
            
            // Add attribution
            const attribution = document.createElement('div');
            attribution.className = 'pexels-attribution';
            attribution.innerHTML = 'Photos provided by <a href="https://www.pexels.com" target="_blank">Pexels</a>';
            container.appendChild(attribution);
        }
    })
    .catch(error => {
        console.error('Error fetching Pexels images:', error);
        container.innerHTML = '<div class="error">Error loading images. Please try again later.</div>';
    });
}