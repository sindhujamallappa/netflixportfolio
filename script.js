const logo = document.getElementById('netflixLogo');
// Simple fade in when page loads
window.addEventListener('load', function() {
    logo.style.opacity = '1';
});

// Optional: Log screen size for testing
console.log('Screen size:', window.innerWidth + 'x' + window.innerHeight);
const profileScreen = document.getElementById('profileScreen');

// After 3 seconds, start the transition
setTimeout(() => {
    // Show profile screen
    profileScreen.style.display = 'flex';
    
    // Start logo animation to top-right
    logo.classList.add('moved');
    
    // Fade in profile screen after logo starts moving
    setTimeout(() => {
        profileScreen.classList.add('visible');
    }, 200);
    
}, 3000);