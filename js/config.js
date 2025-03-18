// Configuration values for the application
export const config = {
    // Add comment in production to load from environment variable
    apiKeys: {
        pexels: process.env.PEXELS_API_KEY || 'TUzzSvjEUXBV29vKjuGwBVr4YwmxBnJI6L07LtJScBOexfWXYXmzZj4o'
    },
    endpoints: {
        pexels: 'https://api.pexels.com/v1/search'
    },
    templates: {
        previewCount: 3, // Number of templates to show on home page
        loadingDelay: 300 // Minimum time to show loading state (ms)
    }
};