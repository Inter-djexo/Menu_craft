// Drag and Drop functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize drag and drop for elements in the sidebar
    initDragAndDrop();
    
    // Add a global click handler to ensure text elements are editable
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.canvas-element.text');
        if (target) {
            // Ensure the element is editable
            target.contentEditable = "true";
            
            // If it's not already focused, focus it
            if (document.activeElement !== target) {
                target.focus();
            }
        }
    });
});

// Initialize drag and drop functionality
function initDragAndDrop() {
    // Make elements in the sidebar draggable
        const elementItems = document.querySelectorAll('.element-item');
        elementItems.forEach(item => {
            item.setAttribute('draggable', 'true');
            
            // Standard drag and drop for desktop
            item.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', item.getAttribute('data-type'));
                e.dataTransfer.effectAllowed = 'copy';
                // Add visual feedback
                setTimeout(() => item.classList.add('being-dragged'), 0);
            });
            
            item.addEventListener('dragend', function() {
                item.classList.remove('being-dragged');
            });
        
        // Touch support for mobile devices
        item.addEventListener('touchstart', function(e) {
            // Mark this item as being touched (for the touchend handler)
            item.setAttribute('data-touched', 'true');
            item.classList.add('being-dragged');
        }, { passive: true });
        
        item.addEventListener('touchend', function(e) {
            // Only proceed if this item was the one being touched
            if (item.getAttribute('data-touched') === 'true') {
                const touch = e.changedTouches[0];
                const elementType = item.getAttribute('data-type');
                
                // Get the canvas element
                const canvas = document.getElementById('editor-canvas');
                if (canvas) {
                    // Check if touch ended over the canvas
                    const rect = canvas.getBoundingClientRect();
                    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
                        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
                        
                        // Calculate position relative to canvas
                        const x = touch.clientX - rect.left;
                        const y = touch.clientY - rect.top;
                        
                        // Add the appropriate element type
                        if (elementType === 'text') {
                            const textElement = addTextElement('Double click to edit', 'left', '16px', 'Arial, sans-serif', '#000000', x, y, 200, 30);
                            selectElement(textElement);
                        } else if (elementType === 'shape') {
                            const shapeElement = addShapeElement('rectangle', '#e0e0e0', x, y, 100, 100);
                            selectElement(shapeElement);
                        } else if (elementType === 'image') {
                            openImageSelectionDialog(x, y);
                        }
                    }
                }
                
                // Reset the touch state
                item.removeAttribute('data-touched');
                item.classList.remove('being-dragged');
            }
        });
    });
    
    // Make images in the Pexels grid draggable
    const pexelsImages = document.querySelectorAll('.pexels-image');
    pexelsImages.forEach(item => {
        item.setAttribute('draggable', 'true');
        
        // Standard drag and drop for desktop
        item.addEventListener('dragstart', function(e) {
            const imgSrc = item.querySelector('img').src;
            e.dataTransfer.setData('application/json', JSON.stringify({
                type: 'pexels-image',
                src: imgSrc
            }));
            e.dataTransfer.effectAllowed = 'copy';
        });
        
        // Touch support for mobile devices
        item.addEventListener('touchstart', function(e) {
            // Mark this item as being touched (for the touchend handler)
            item.setAttribute('data-touched', 'true');
            item.classList.add('being-dragged');
        }, { passive: true });
        
        item.addEventListener('touchend', function(e) {
            // Only proceed if this item was the one being touched
            if (item.getAttribute('data-touched') === 'true') {
                const touch = e.changedTouches[0];
                const imgSrc = item.querySelector('img').src;
                
                // Get the canvas element
                const canvas = document.getElementById('editor-canvas');
                if (canvas) {
                    // Check if touch ended over the canvas
                    const rect = canvas.getBoundingClientRect();
                    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
                        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
                        
                        // Calculate position relative to canvas
                        const x = touch.clientX - rect.left;
                        const y = touch.clientY - rect.top;
                        
                        // Add the image element
                        const imageElement = addImageElement(imgSrc, x, y, 300, 200);
                        selectElement(imageElement);
                    }
                }
                
                // Reset the touch state
                item.removeAttribute('data-touched');
                item.classList.remove('being-dragged');
            }
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
    
        // Make canvas elements draggable with improved performance
        document.addEventListener('mousedown', handleCanvasElementMouseDown);
        document.addEventListener('touchstart', handleCanvasElementTouchStart, { passive: false });
        
        // Add CSS for touch dragging visual feedback
        const style = document.createElement('style');
        style.textContent = `
            .being-dragged {
                opacity: 0.8;
                transform: scale(1.02);
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                transition: all 0.2s ease;
                cursor: grabbing !important;
            }
            
            .canvas-element {
                transition: all 0.2s ease;
                will-change: transform, left, top;
                position: absolute;
                cursor: grab;
                user-select: none;
            }
            
            .canvas-element.dragging {
                cursor: grabbing;
                opacity: 0.9;
            }
            
            .canvas-element.image {
                touch-action: none;
            }
            
            .canvas-element.text {
                cursor: text;
                min-height: 20px;
                padding: 4px;
                border: 1px solid transparent;
                background-color: rgba(255, 255, 255, 0.01);
            }
            
            .canvas-element.text:hover {
                border: 1px dashed #ccc;
                background-color: rgba(255, 255, 255, 0.05);
            }
            
            .canvas-element.text:focus {
                outline: none;
                border: 1px solid #4a6bff;
                box-shadow: 0 0 8px rgba(74, 107, 255, 0.4);
                background-color: rgba(255, 255, 255, 0.1);
            }
            
            .canvas-element.selected {
                z-index: 10 !important;
                outline: 2px solid #4a6bff;
                outline-offset: 2px;
            }

            .canvas-element.at-boundary {
                animation: bounce 0.3s ease;
            }

            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(0.98); }
            }

            @media (prefers-reduced-motion: reduce) {
                .canvas-element,
                .being-dragged {
                    transition: none;
                    animation: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Helper function for dragging elements with bounds checking
    function startDragging(target, e) {
        const canvas = document.getElementById('editor-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(target.style.left) || 0;
        const startTop = parseInt(target.style.top) || 0;
        
        // Store the maximum bounds
        const maxLeft = canvasRect.width - targetRect.width;
        const maxTop = canvasRect.height - targetRect.height;
        
        let rafId = null;
        let currentX = startX;
        let currentY = startY;
        let isDragging = true;
        
        function moveElement() {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            // Constrain the element within the canvas bounds
            const newLeft = Math.max(0, Math.min(maxLeft, startLeft + deltaX));
            const newTop = Math.max(0, Math.min(maxTop, startTop + deltaY));
            
            // Add boundary feedback
            const isAtBoundary = newLeft === 0 || newLeft === maxLeft ||
                               newTop === 0 || newTop === maxTop;
            
            if (isAtBoundary && !target.classList.contains('at-boundary')) {
                target.classList.add('at-boundary');
                // Remove the class after animation completes
                setTimeout(() => {
                    if (target && target.classList) {
                        target.classList.remove('at-boundary');
                    }
                }, 300);
            }

            if (!target.classList.contains('dragging')) {
                target.classList.add('dragging');
            }
            
            target.style.left = `${newLeft}px`;
            target.style.top = `${newTop}px`;
            target.style.zIndex = '1000';
            
            rafId = null;
        }
        
        function handleMouseMove(moveEvent) {
            if (!isDragging) return;
            
            currentX = moveEvent.clientX;
            currentY = moveEvent.clientY;
            
            // Check if mouse is still within the canvas bounds (with some padding)
            const isWithinBounds =
                currentX >= canvasRect.left - 50 &&
                currentX <= canvasRect.right + 50 &&
                currentY >= canvasRect.top - 50 &&
                currentY <= canvasRect.bottom + 50;
            
            if (isWithinBounds && !rafId) {
                rafId = requestAnimationFrame(moveElement);
            }
        }
        
        function handleMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            if (rafId) cancelAnimationFrame(rafId);
            
            // Clean up classes
            target.classList.remove('dragging');
            target.classList.remove('at-boundary');
            
            // Ensure final position is within bounds
            const finalLeft = parseInt(target.style.left);
            const finalTop = parseInt(target.style.top);
            
            if (finalLeft < 0 || finalLeft > maxLeft ||
                finalTop < 0 || finalTop > maxTop) {
                // If somehow ended up outside bounds, snap back to valid position
                target.style.left = `${Math.max(0, Math.min(maxLeft, finalLeft))}px`;
                target.style.top = `${Math.max(0, Math.min(maxTop, finalTop))}px`;
                
                // Visual feedback for snapping
                target.classList.add('at-boundary');
                setTimeout(() => {
                    if (target && target.classList) {
                        target.classList.remove('at-boundary');
                    }
                }, 300);
            }
            
            // Reset z-index after drag ends
            setTimeout(() => {
                if (target && target.parentElement) {
                    target.style.zIndex = target.classList.contains('selected') ? '10' : 'auto';
                }
            }, 0);
        }
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    // Handle mouse down on canvas elements for improved dragging
    function handleCanvasElementMouseDown(e) {
        const target = e.target.closest('.canvas-element');
        if (!target) return;

        let dragStarted = false;
        let initialX = e.clientX;
        let initialY = e.clientY;

        // For text elements
        if (target.classList.contains('text')) {
            // Always ensure contentEditable is set
            target.contentEditable = "true";

            // Set up tracking for distinguishing between click and drag
            const mouseMoveHandler = (moveEvent) => {
                // If moved more than 5 pixels, consider it a drag attempt
                if (Math.abs(moveEvent.clientX - initialX) > 5 ||
                    Math.abs(moveEvent.clientY - initialY) > 5) {
                    dragStarted = true;
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    
                    // If we're dragging, prevent text editing
                    if (window.getSelection().toString() === '') {
                        // Only start drag if no text is selected
                        e.preventDefault();
                        target.blur(); // Remove focus from text element
                        selectElement(target);
                        startDragging(target, e);
                    }
                }
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                
                if (!dragStarted) {
                    // It was a click, not a drag
                    target.focus();
                    if (e.detail === 2) {
                        // Double click - select all text
                        const selection = window.getSelection();
                        const range = document.createRange();
                        range.selectNodeContents(target);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
            return;
        }
        
        // For non-text elements, start dragging immediately
        e.preventDefault();
        selectElement(target);
        startDragging(target, e);
    }
    
    // Helper function for touch dragging
    function startTouchDragging(target, touch) {
        const canvas = document.getElementById('editor-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const startX = touch.clientX;
        const startY = touch.clientY;
        const startLeft = parseInt(target.style.left) || 0;
        const startTop = parseInt(target.style.top) || 0;
        
        // Store the maximum bounds
        const maxLeft = canvasRect.width - targetRect.width;
        const maxTop = canvasRect.height - targetRect.height;
        
        let rafId = null;
        let currentX = startX;
        let currentY = startY;
        let isDragging = true;
        let lastValidX = startLeft;
        let lastValidY = startTop;
        
        function moveElement() {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            // Constrain the element within the canvas bounds
            const newLeft = Math.max(0, Math.min(maxLeft, startLeft + deltaX));
            const newTop = Math.max(0, Math.min(maxTop, startTop + deltaY));
            
            // Store last valid position
            if (newLeft >= 0 && newLeft <= maxLeft) lastValidX = newLeft;
            if (newTop >= 0 && newTop <= maxTop) lastValidY = newTop;
            
            target.style.left = `${newLeft}px`;
            target.style.top = `${newTop}px`;
            target.style.zIndex = '1000'; // Ensure element stays on top while dragging
            
            rafId = null;
        }
        
        function handleTouchMove(e) {
            e.preventDefault(); // Prevent scrolling while dragging
            if (!isDragging) return;
            
            const touch = e.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;
            
            // Check if touch is still within the canvas bounds (with some padding)
            const isWithinBounds =
                currentX >= canvasRect.left - 50 &&
                currentX <= canvasRect.right + 50 &&
                currentY >= canvasRect.top - 50 &&
                currentY <= canvasRect.bottom + 50;
            
            if (isWithinBounds && !rafId) {
                rafId = requestAnimationFrame(moveElement);
            } else if (!isWithinBounds) {
                // If outside bounds, snap back to last valid position
                target.style.left = `${lastValidX}px`;
                target.style.top = `${lastValidY}px`;
            }
        }
        
        function handleTouchEnd() {
            isDragging = false;
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('touchcancel', handleTouchEnd);
            if (rafId) cancelAnimationFrame(rafId);
            
            // Reset z-index after drag ends
            setTimeout(() => {
                if (target && target.parentElement) {
                    target.style.zIndex = target.classList.contains('selected') ? '10' : 'auto';
                }
            }, 0);
            
            // Ensure final position is within bounds
            const finalLeft = parseInt(target.style.left);
            const finalTop = parseInt(target.style.top);
            
            if (finalLeft < 0 || finalLeft > maxLeft ||
                finalTop < 0 || finalTop > maxTop) {
                // If somehow ended up outside bounds, snap back
                target.style.left = `${Math.max(0, Math.min(maxLeft, lastValidX))}px`;
                target.style.top = `${Math.max(0, Math.min(maxTop, lastValidY))}px`;
            }
        }
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    }
    
    // Handle touch start on canvas elements for improved mobile dragging
    function handleCanvasElementTouchStart(e) {
        const target = e.target.closest('.canvas-element');
        if (!target) return;
        
        let dragStarted = false;
        const touch = e.touches[0];
        const initialX = touch.clientX;
        const initialY = touch.clientY;
        
        // For text elements
        if (target.classList.contains('text')) {
            target.contentEditable = "true";
            
            // Set up a timer to detect long press for text editing
            let longPressTimer = setTimeout(() => {
                if (!dragStarted) {
                    // Focus the text element to enable editing
                    target.focus();
                    // Create a selection range to show the cursor
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(target);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }, 500); // 500ms long press
            
            // Set up tracking for distinguishing between tap and drag
            const touchMoveHandler = (moveEvent) => {
                // If moved more than 5 pixels, consider it a drag attempt
                if (Math.abs(moveEvent.touches[0].clientX - initialX) > 5 ||
                    Math.abs(moveEvent.touches[0].clientY - initialY) > 5) {
                    dragStarted = true;
                    clearTimeout(longPressTimer);
                    document.removeEventListener('touchmove', touchMoveHandler);
                    
                    // Start dragging
                    target.blur(); // Remove focus from text element
                    selectElement(target);
                    startTouchDragging(target, touch);
                }
            };
            
            const touchEndHandler = () => {
                clearTimeout(longPressTimer);
                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
                
                if (!dragStarted) {
                    // It was a tap, not a drag
                    target.focus();
                }
            };
            
            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
            return;
        }
        
        // For non-text elements, start dragging immediately
        selectElement(target);
        startTouchDragging(target, touch);
}