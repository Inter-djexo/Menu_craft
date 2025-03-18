// Drag and Drop functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize drag and drop for elements in the sidebar
    initDragAndDrop();
});

// Initialize drag and drop functionality
function initDragAndDrop() {
    // Make elements in the sidebar draggable
    const elementItems = document.querySelectorAll('.element-item');
    elementItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', item.getAttribute('data-type'));
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
    
    // Make images in the Pexels grid draggable
    const pexelsImages = document.querySelectorAll('.pexels-image');
    pexelsImages.forEach(item => {
        item.setAttribute('draggable', 'true');
        
        item.addEventListener('dragstart', function(e) {
            const imgSrc = item.querySelector('img').src;
            e.dataTransfer.setData('application/json', JSON.stringify({
                type: 'pexels-image',
                src: imgSrc
            }));
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
    
    // Setup canvas as drop target
    const canvas = document.getElementById('editor-canvas');
    
    canvas.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });
    
    canvas.addEventListener('drop', function(e) {
        e.preventDefault();
        
        // Calculate position relative to canvas
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if the dragged item is a Pexels image
        try {
            const jsonData = JSON.parse(e.dataTransfer.getData('application/json'));
            if (jsonData && jsonData.type === 'pexels-image') {
                const imageElement = addImageElement(jsonData.src, x, y, 300, 200);
                selectElement(imageElement);
                return;
            }
        } catch (error) {
            // Not JSON data, continue with regular element types
        }
        
        // Handle regular element types
        const type = e.dataTransfer.getData('text/plain');
        
        if (type === 'text') {
            const textElement = addTextElement('Double click to edit', 'left', '16px', 'Arial, sans-serif', '#000000', x, y, 200, 30);
            selectElement(textElement);
        } else if (type === 'shape') {
            const shapeElement = addShapeElement('rectangle', '#e0e0e0', x, y, 100, 100);
            selectElement(shapeElement);
        } else if (type === 'image') {
            openImageSelectionDialog(x, y);
        }
    });
}