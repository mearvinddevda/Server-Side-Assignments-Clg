function displayClock() {
    // Get the current time
    var currentTime = new Date();
    
    // Extract hours, minutes, and seconds from the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros to single-digit hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Display the time in the console
    console.log(hours + ":" + minutes + ":" + seconds);
}

// Call the displayClock function every second
setInterval(displayClock, 1000);
