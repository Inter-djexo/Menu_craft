// Export functionality

/**
 * Export the canvas as PNG with enhanced quality
 * Uses html2canvas with improved settings for better image quality
 */
function exportAsPNG() {
    const canvas = document.getElementById('editor-canvas');
    
    // Show loading indicator
    showExportLoading('Generating PNG...');
    
    // Use html2canvas with improved settings
    html2canvas(canvas, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for external images
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: function(clonedDoc) {
            // Pre-processing of the cloned document
            const clonedCanvas = clonedDoc.getElementById('editor-canvas');
            if (clonedCanvas) {
                // Remove all resize handles from the clone
                const resizeHandles = clonedCanvas.querySelectorAll('.resize-handle');
                resizeHandles.forEach(handle => {
                    handle.remove();
                });
                
                // Remove selection highlights and improve element appearance
                const elements = clonedCanvas.querySelectorAll('.canvas-element');
                elements.forEach(el => {
                    el.style.boxShadow = 'none'; // Remove selection highlights
                    el.style.border = 'none'; // Remove any borders
                    
                    // Enhance text elements for export
                    if (el.classList.contains('text')) {
                        el.style.backgroundColor = 'transparent'; // Remove background
                        el.style.fontSmoothing = 'antialiased'; // Improve text rendering
                        el.style.webkitFontSmoothing = 'antialiased';
                        el.style.mozOsxFontSmoothing = 'grayscale';
                    }
                    
                    // Enhance image elements for export
                    if (el.classList.contains('image')) {
                        el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'; // Subtle shadow
                    }
                });
            }
        }
    }).then(function(canvas) {
        // Hide loading indicator
        hideExportLoading();
        
        // Create a download link with a better quality image
        const link = document.createElement('a');
        link.download = 'menu-design.png';
        link.href = canvas.toDataURL('image/png', 1.0); // Use maximum quality
        link.click();
        
        // Show success message
        showExportSuccess('PNG exported successfully!');
    }).catch(function(error) {
        hideExportLoading();
        console.error('Error exporting PNG:', error);
        showExportError('Failed to export PNG. Please try again.');
    });
}

/**
 * Export the canvas as PDF with enhanced quality and metadata
 * Uses html2canvas and jsPDF with improved settings
 */
function exportAsPDF() {
    const canvas = document.getElementById('editor-canvas');
    
    // Show loading indicator
    showExportLoading('Generating PDF...');
    
    // Use html2canvas with improved settings
    html2canvas(canvas, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for external images
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: function(clonedDoc) {
            // Pre-processing of the cloned document
            const clonedCanvas = clonedDoc.getElementById('editor-canvas');
            if (clonedCanvas) {
                // Remove all resize handles from the clone
                const resizeHandles = clonedCanvas.querySelectorAll('.resize-handle');
                resizeHandles.forEach(handle => {
                    handle.remove();
                });
                
                // Remove selection highlights and improve element appearance
                const elements = clonedCanvas.querySelectorAll('.canvas-element');
                elements.forEach(el => {
                    el.style.boxShadow = 'none'; // Remove selection highlights
                    el.style.border = 'none'; // Remove any borders
                    
                    // Enhance text elements for export
                    if (el.classList.contains('text')) {
                        el.style.backgroundColor = 'transparent'; // Remove background
                        el.style.fontSmoothing = 'antialiased'; // Improve text rendering
                        el.style.webkitFontSmoothing = 'antialiased';
                        el.style.mozOsxFontSmoothing = 'grayscale';
                    }
                    
                    // Enhance image elements for export
                    if (el.classList.contains('image')) {
                        el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'; // Subtle shadow
                    }
                });
            }
        }
    }).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Initialize jsPDF with better settings
        const pdf = new jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });
        
        // Add metadata to the PDF
        pdf.setProperties({
            title: 'Menu Design',
            subject: 'Restaurant Menu',
            author: 'Menu Designer',
            keywords: 'menu, restaurant, design',
            creator: 'Menu Designer App'
        });
        
        // Calculate dimensions
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Add the image to the PDF with better positioning
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
        
        // Save the PDF
        pdf.save('menu-design.pdf');
        
        // Hide loading indicator
        hideExportLoading();
        
        // Show success message
        showExportSuccess('PDF exported successfully!');
    }).catch(function(error) {
        hideExportLoading();
        console.error('Error exporting PDF:', error);
        showExportError('Failed to export PDF. Please try again.');
    });
}

/**
 * Show loading indicator during export process
 */
function showExportLoading(message) {
    // Create loading overlay if it doesn't exist
    let loadingOverlay = document.getElementById('export-loading-overlay');
    
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'export-loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="export-loading-content">
                <div class="export-loading-spinner"></div>
                <div class="export-loading-message"></div>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #export-loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }
            .export-loading-content {
                background-color: white;
                padding: 20px 40px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                text-align: center;
            }
            .export-loading-spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid var(--primary-color, #4a6bff);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                margin: 0 auto 15px;
                animation: spin 2s linear infinite;
            }
            .export-loading-message {
                font-size: 16px;
                font-weight: 500;
                color: #333;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(loadingOverlay);
    }
    
    // Update message
    loadingOverlay.querySelector('.export-loading-message').textContent = message || 'Processing...';
    loadingOverlay.style.display = 'flex';
}

/**
 * Hide loading indicator
 */
function hideExportLoading() {
    const loadingOverlay = document.getElementById('export-loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

/**
 * Show success message after export
 */
function showExportSuccess(message) {
    showExportNotification(message, 'success');
}

/**
 * Show error message if export fails
 */
function showExportError(message) {
    showExportNotification(message, 'error');
}

/**
 * Show notification
 */
function showExportNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `export-notification ${type}`;
    notification.textContent = message;
    
    // Add styles if they don't exist
    if (!document.getElementById('export-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'export-notification-styles';
        style.textContent = `
            .export-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease-out forwards, fadeOut 0.5s ease-out 2.5s forwards;
            }
            .export-notification.success {
                background-color: #4CAF50;
            }
            .export-notification.error {
                background-color: #F44336;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to document and remove after animation
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}