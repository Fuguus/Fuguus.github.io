// Function to initialize the map
function initMap() {
    var mapOptions = {
        center: { lat: 34.1284, lng: 133.6628 },
        zoom: 15 // Higher zoom level for closer view
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Function to update the current time and check for date change
function updateTimeAndDate() {
    var now = new Date();
    var currentTime = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = currentTime;

    // Check if the day has changed
    var currentDate = now.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
    if (currentDate !== document.getElementById('current-date').textContent) {
        document.getElementById('current-date').textContent = currentDate;
    }
}

// Initial call to display the time and date immediately
updateTimeAndDate();

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);
