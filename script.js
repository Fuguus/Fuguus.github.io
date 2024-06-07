// Function to initialize the map
function initMap() {
    
    var centerMap = { lat:34.2226, lng: 134.0199}

    const mapOptions = {
        center: centerMap,
        zoom: 10 
    };
   
    const map = new.google.maps.Map(document.getElementById('map'), mapOptions);
  }
