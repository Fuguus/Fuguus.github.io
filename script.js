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

// Function to update the info section
function updateInfo(event) {
    var infoText = event.target.getAttribute('data-info');
    document.getElementById('info-text').textContent = infoText;
}

// Array of places
const places = [
    { altText: 'Place 1', info: 'Place 1 details here', name: 'Place 1' },
    { altText: 'Place 2', info: 'Place 2 details here', name: 'Place 2' },
    { altText: 'Place 3', info: 'Place 3 details here', name: 'Place 3' },
    // Add more places as needed
];

// Function to create itinerary items
function createItineraryItems() {
    const itineraryContainer = document.getElementById('itinerary');
    places.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.className = 'place';

        const img = document.createElement('img');
        img.src = 'images/location_icon.jpg';
        img.alt = place.altText;
        img.className = 'info-button';
        img.setAttribute('data-info', place.info);
        img.addEventListener('click', updateInfo);

        const span = document.createElement('span');
        span.textContent = place.name;

        placeDiv.appendChild(img);
        placeDiv.appendChild(span);
        itineraryContainer.appendChild(placeDiv);
    });
}

function toggleItinerary() {
  const itinerary = document.getElementById("itinerary");
  itinerary.classList.toggle("hidden");
}

document.getElementById("sidebar").addEventListener("click", toggleItinerary);

// Initial call to display the time and date immediately
updateTimeAndDate();
createItineraryItems();

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);
