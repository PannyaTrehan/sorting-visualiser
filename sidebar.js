// sidebar.js

// Function to load the sidebar from sidebar.html
async function loadSidebar() {
    try {
        const response = await fetch('pages/sidebar.html');
        const sidebarContent = await response.text();
        document.getElementById('sidebarContainer').innerHTML = sidebarContent;
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
}

// Call the function to load the sidebar
loadSidebar();