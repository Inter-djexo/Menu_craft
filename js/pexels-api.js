// Pexels API Integration

// Initialize Pexels API
function initPexelsAPI() {
    // Set up search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('image-search');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            searchPexelsImages(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPexelsImages(searchInput.value);
            }
        });
    }
    
    // Load initial curated photos
    loadCuratedPhotos();
}

// Load curated photos from Pexels
function loadCuratedPhotos() {
    const pexelsContainer = document.getElementById('pexels-images');
    if (!pexelsContainer) return;
    
    // Clear previous images
    pexelsContainer.innerHTML = '<div class="loading">Loading images...</div>';
    
    // Pexels API key - replace with your own
    const apiKey = 'TUzzSvjEUXBV29vKjuGwBVr4YwmxBnJI6L07LtJScBOexfWXYXmzZj4o';
    
    // Fetch curated photos
    fetch('https://api.pexels.com/v1/curated?per_page=12', {
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
        displayPexelsImages(data.photos, pexelsContainer);
    })
    .catch(error => {
        console.error('Error fetching Pexels images:', error);
        pexelsContainer.innerHTML = '<div class="error">Error loading images. Please try again later.</div>';
    });
}

// Search for images on Pexels
function searchPexelsImages(query) {
    if (!query) {
        loadCuratedPhotos();
        return;
    }
    
    const pexelsContainer = document.getElementById('pexels-images');
    if (!pexelsContainer) return;
    
    // Clear previous images
    pexelsContainer.innerHTML = '<div class="loading">Searching for images...</div>';
    
    // Pexels API key - replace with your own
    const apiKey = 'TUzzSvjEUXBV29vKjuGwBVr4YwmxBnJI6L07LtJScBOexfWXYXmzZj4o';
    
    // Fetch images based on search query
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12`, {
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
            pexelsContainer.innerHTML = '<div class="no-results">No images found. Try a different search term.</div>';
        } else {
            displayPexelsImages(data.photos, pexelsContainer);
        }
    })
    .catch(error => {
        console.error('Error searching Pexels images:', error);
        pexelsContainer.innerHTML = '<div class="error">Error searching images. Please try again later.</div>';
    });
}

// Display Pexels images in the container
function displayPexelsImages(photos, container) {
    // Clear container
    container.innerHTML = '';
    
    // Add each photo to the container
    photos.forEach(photo => {
        const imageItem = document.createElement('div');
        imageItem.className = 'pexels-image';
        imageItem.setAttribute('draggable', 'true');
        
        const img = document.createElement('img');
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        img.setAttribute('data-original', photo.src.original);
        
        imageItem.appendChild(img);
        
        // Add click event to add the image to the canvas
        imageItem.addEventListener('click', function() {
            const canvas = document.getElementById('editor-canvas');
            const rect = canvas.getBoundingClientRect();
            const x = rect.width / 4;
            const y = rect.height / 4;
            
            const imageElement = addImageElement(photo.src.medium, x, y, 300, 200);
            selectElement(imageElement);
        });
        
        // Add drag event
        imageItem.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('application/json', JSON.stringify({
                type: 'pexels-image',
                src: photo.src.medium
            }));
            e.dataTransfer.effectAllowed = 'copy';
        });
        
        container.appendChild(imageItem);
    });
    
    // Add attribution
    const attribution = document.createElement('div');
    attribution.className = 'pexels-attribution';
    attribution.innerHTML = 'Photos provided by <a href="https://www.pexels.com" target="_blank">Pexels</a>';
    container.appendChild(attribution);
}