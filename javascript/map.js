// Define the coordinates for the center of Gauteng Province
var center = { lat: -26.271591, lng: 28.112268 };

// Create a new map object
var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 9,
  center: center,
});

// Add a marker to the center of Gauteng Province
var marker = new google.maps.Marker({
  position: center,
  map: map,
  title: "Gauteng Province",
});
