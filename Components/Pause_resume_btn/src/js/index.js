// State variables
let isPaused = false;
let totalSeconds = 1082; // Starts at 18:02 (18 * 60 + 2) to match your image
let timerInterval;

// DOM Elements
const btnElement = document.getElementById('Pause-Resume-btn');
const timerText = document.getElementById('timer-text');
const iconPath = document.getElementById('icon-path');

// SVG Path Data for toggling
const pauseIconD = "M6 19h4V5H6v14zm8-14v14h4V5h-4z"; // Two vertical bars
const playIconD = "M8 5v14l11-7z"; // Right-pointing triangle

// Formats seconds into MM:SS
function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    // Pad with leading zeros (e.g., "9" becomes "09")
    timerText.textContent = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');
}

// Handles the async timer logic
function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Click event listener
btnElement.addEventListener('click', () => {
    isPaused = !isPaused; // Toggle the state variable

    if (isPaused) {
        stopTimer();
        iconPath.setAttribute('d', playIconD); // Switch to play icon when paused
    } else {
        startTimer(); // Resumes from the exact instance
        iconPath.setAttribute('d', pauseIconD); // Switch back to pause icon
    }
});
// Initialize the timer on page load
updateDisplay();
startTimer();