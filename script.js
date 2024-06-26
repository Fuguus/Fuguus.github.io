function initMap() {
    var mapOptions = {
        center: { lat: 34.1284, lng: 133.6628 },
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function updateTimeAndDate() {
    var now = new Date();
    var currentTime = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = currentTime;

    var currentDate = now.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
    if (currentDate !== document.getElementById('current-date').textContent) {
        document.getElementById('current-date').textContent = currentDate;
    }
}

function updateInfo(event) {
    var infoText = event.target.getAttribute('data-info');
    document.getElementById('info-text').textContent = infoText;
}

const places = [
    { altText: 'Place 1', info: 'Place 1 details here', name: 'Place 1' },
    { altText: 'Place 2', info: 'Place 2 details here', name: 'Place 2' },
    { altText: 'Place 3', info: 'Place 3 details here', name: 'Place 3' },
];

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

    const arrow = document.getElementById("arrow");
    arrow.classList.toggle("flip");
}

document.getElementById("sidebar").addEventListener("click", toggleItinerary);

updateTimeAndDate();
createItineraryItems();

setInterval(updateTimeAndDate, 1000);
