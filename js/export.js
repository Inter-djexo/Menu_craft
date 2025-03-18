// Export functionality

// Export the canvas as PNG
function exportAsPNG() {
    const canvas = document.getElementById('editor-canvas');
    
    // Use html2canvas to convert the canvas div to an image
    html2canvas(canvas).then(function(canvas) {
        // Create a download link
        const link = document.createElement('a');
        link.download = 'menu-design.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Export the canvas as PDF
function exportAsPDF() {
    const canvas = document.getElementById('editor-canvas');
    
    // Use html2canvas to convert the canvas div to an image
    html2canvas(canvas).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        
        // Initialize jsPDF
        const pdf = new jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Calculate dimensions
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Save the PDF
        pdf.save('menu-design.pdf');
    });
}