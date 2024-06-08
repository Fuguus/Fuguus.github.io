// Function to initialize the map
function initMap() {
    const centerMap = { lat: 34.1284, lng: 133.6628 }

    var mapOptions = {
        center: centerMap,
        zoom: 10 // Higher zoom level for closer view
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
