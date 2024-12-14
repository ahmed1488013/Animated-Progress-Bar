// Get the progress bar and label elements
const progressBar = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const resetButton = document.getElementById('reset-button');

// Set initial progress to 0%
let progress = 0;

// Function to animate progress bar
function updateProgress() {
  // Update the width of the progress bar
  progressBar.style.background = `linear-gradient(to right, #e74c3c ${progress}%, #2ecc71 ${progress}%)`;

  // Update the label inside the progress bar
  progressLabel.textContent = `${progress}%`;

  // Increment progress
  if (progress < 100) {
    progress += 1;
    setTimeout(updateProgress, 50); // Increase speed of progress
  }
}

// Function to reset the progress to 0%
function resetProgress() {
  progress = 0;
  progressBar.style.background = '#e0e0e0'; // Reset the background to gray
  progressLabel.textContent = '0%'; // Reset the label to 0%
}

// Event listener for the reset button
resetButton.addEventListener('click', resetProgress);

// Start the progress animation when the page loads
window.onload = updateProgress;
