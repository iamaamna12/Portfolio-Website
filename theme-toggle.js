// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    // Get references to the theme toggle button and the body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if the dark theme is already applied in localStorage
const darkMode = localStorage.getItem('theme') === 'dark';

// Apply the stored theme when the page loads
if (darkMode) {
    body.classList.add('dark-theme');
    themeToggleButton.textContent = 'Toggle Light Mode';
} else {
    themeToggleButton.textContent = 'Toggle Dark Mode';
}

// Add an event listener to toggle the theme on button click
themeToggleButton.addEventListener('click', () => {
    // Toggle the dark theme class
    body.classList.toggle('dark-theme');
    
    // Update the button text based on the current theme
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        themeToggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
});
});
