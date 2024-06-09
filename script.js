// Function to initialize the map
function initMap() {
    const centerMap = { lat: 34.1284, lng: 133.6628 }

    var mapOptions = {
        center: centerMap,
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Function to update the current time
function updateTime() {
    var now = new Date();
    var currentTime = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = currentTime;
}

// Update the time every second
setInterval(updateTime, 1000);
