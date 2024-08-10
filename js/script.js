// script.js

// Function to show the selected section and highlight the active link
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Remove 'active' class from all nav links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    document.querySelector(`nav ul li a[href*='${sectionId}']`).classList.add('active');
}

// Optionally, show the default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Replace 'home' with the default section if needed
});

// script.js

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggleButton.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        theme = (theme === 'dark') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});

// Fungsi untuk toggle mode gelap
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateIcon();
}

// Fungsi untuk memperbarui ikon berdasarkan mode
function updateIcon() {
    const icon = document.querySelector('.dark-mode-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Ganti dengan ikon bulan saat mode gelap
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Ganti dengan ikon matahari saat mode terang
    }
}

// Pastikan ikon diperbarui saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateIcon);
