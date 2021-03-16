// Create the script tag, set the appropriate attributes
let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJi4QhgfV4bO-dyCKD2eXZqG4sk7n4zrs&callback=initMap';
script.id = "g-maps";
script.async = true;

// Attach your callback function to the `window` object
window.initMap = () => {};

// Append the 'script' element to 'head'
document.head.appendChild(script);

let map;
let marker;
let time;
let mapFlag = false;

let geoFindMe = () => {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  let success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    let currPos = {lat: latitude, lng: longitude};

    script.onload = () => {
      map = new google.maps.Map(document.querySelector('#map'), {
        center: currPos,
        zoom: 16
      });
      marker = new google.maps.Marker({
        position: currPos,
        map: map
      });
      mapFlag = true;
    };

    if (mapFlag) {
      let circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: currPos,
        radius: 10,
      });
    }

    time = new Date()
    let posData = document.createElement('p');
    posData.innerText = "latitude: " + latitude + ", longitude: " + longitude + ", " + time;
    document.querySelector('#pos-data').prepend(posData);
  }
 
  let error = () => {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.watchPosition(success, error);
    
  }

}

if (window.confirm("Would you like this page to know your location?")) {
  document.addEventListener('DOMContentLoaded', geoFindMe);
}