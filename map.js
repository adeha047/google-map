let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
};

//   const input = document.getElementById("city-input");
//   const autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.bindTo("bounds", map);
//   // Specify just the place data fields that you need.
//   autocomplete.setFields(["place_id", "geometry", "name"]);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//   const infowindow = new google.maps.InfoWindow();
//   const infowindowContent = document.getElementById("infowindow-content");
//   infowindow.setContent(infowindowContent);
//   const marker = new google.maps.Marker({ map: map });
//   marker.addListener("click", () => {
//     infowindow.open(map, marker);
//   });
//   autocomplete.addListener("place_changed", () => {
//     infowindow.close();
//     const place = autocomplete.getPlace();

//     if (!place.geometry || !place.geometry.location) {
//       return;
//     }

//     if (place.geometry.viewport) {
//       map.fitBounds(place.geometry.viewport);
//     } else {
//       map.setCenter(place.geometry.location);
//       map.setZoom(17);
//     }
//     // Set the position of the marker using the place ID and location.
//     marker.setPlace({
//       placeId: place.place_id,
//       location: place.geometry.location,
//     });
//     marker.setVisible(true);
//     infowindowContent.children.namedItem("place-name").textContent = place.name;
//     infowindowContent.children.namedItem("place-id").textContent =
//       place.place_id;
//     infowindowContent.children.namedItem("place-address").textContent =
//       place.formatted_address;
//     infowindow.open(map, marker);
//   });
// }

//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement("city-input");
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: locationData.coords.latitude,
//             lng: locationData.coords.longitude,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);

//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
//   };

// // let long = position.coords.longitude; 
// // let lat = position.coords.latitude; 

// function renderSearches() {
// var apiKey = "AIzaSyBpP9c6UVQA5-hoA1VcR953lZwAsGfUUFg";
//   var  = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lon},${lat}&radius=1500&key=${apiKey}`;
//   console.log(coffee)

// // }

// function getlocation() { 
//     if (window.navigator.geolocation) {
//       // (window.navigator.geolocation.getCurrentPosition(locationData =>
//       //   console.log(locationData.coords.latitude)));
//       window.navigator.geolocation.getCurrentPosition(showPosition);

    
       
    
//     }
//     else {
//     innerHTML = "Geolocation is not supported by this browser.";
//     }
  


 
  
//  };





