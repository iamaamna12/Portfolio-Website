// Theme toggle script
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load the saved theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleButton.textContent = 'Switch to Light Mode';
} else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
}

// Toggle theme and update button text
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});
