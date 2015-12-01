
  function initMap() {
  var mapa = {lat: -23.485710, lng:-46.611709};
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mapa,
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    disableDefaultUI:true,
    zoom: 15
  });

   // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: mapa,
    title: 'There is a web developer here!'
  });
}
  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "road.highway",
      stylers: [
       {hue: "#FFA500" },
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#FFA500" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];