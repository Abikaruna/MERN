let sec = 4;
let timer = document.getElementById("timer");

function updateCountdown() {
    timer.innerHTML = sec < 4? "0" + sec : sec; // Display leading zero for single digits

    if (sec < 1) {
        timer.innerHTML = "<h1>Happy New Year</h1>"; // Change to Happy New Year message
        document.body.classList.add("show-background"); // Add class to show the GIF background
        clearTimeout();    // Stop the countdown
        return; // Exit the function
    }

    sec--; // Decrement the second count
    setTimeout(updateCountdown, 1000); // Call updateCountdown every second
}

updateCountdown(); // Start the countdown
