// Function to initialize the map
function initMap() {
    var mapOptions = {
        center: { lat: 34.1284, lng: 133.6628 },
        zoom: 15 // Higher zoom level for closer view
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
