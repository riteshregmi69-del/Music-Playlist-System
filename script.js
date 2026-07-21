document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Greeting based on time of day
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        greetingElement.textContent = 'Good morning';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good afternoon';
    } else {
        greetingElement.textContent = 'Good evening';
    }

    // 2. Play/Pause Button Toggle Logic
    const mainPlayBtn = document.getElementById('main-play-btn');
    let isPlaying = false;

    mainPlayBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        const icon = mainPlayBtn.querySelector('i');
        
        if (isPlaying) {
            // Switch to pause icon
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            // Switch to play icon
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
});
