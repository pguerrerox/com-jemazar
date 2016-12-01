// this variable will collect the html which will eventually be placed in the side_bar
side_bar_html = "";

// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
gmarkers = [];

function initialize1() {
  // create the map
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(19.47823, -70.68766),
    mapTypeControl: false,
    navigationControl: true,
    scrollwheel: false,
    streetViewControl:false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });

  var currCenter = new google.maps.LatLng(19.47823, -70.68766);

  window.setTimeout(function(){
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
  },100);


  var iconjemazar = '/favicon.ico';
  var iconsupermercados = '/assets/img/icon_grocery.svg';
  var iconrestaurantes = '/assets/img/icon_restaurant.svg';
  var iconhoteles = '/assets/img/icon_hotel.svg';

  // Add markers to the map
  side_bar_html = "";

  //Jemazar
  var point = new google.maps.LatLng(19.47823, -70.68766);
  var marker = createMarker(point,"Jemazar","<strong>Jemazar</strong><br>Empresa dominicana dedicada a la distribución de productos lácteos, cárnicos, pescados y mariscos de la más alta calidad con precios competitivos.",iconjemazar);

  //Supermercados
  point = new google.maps.LatLng(19.461030, -70.684515);
  marker = createMarker(point,"<br>Supermercado Central","<strong>Supermercado Central</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.485876, -70.711846);
  marker = createMarker(point,"Supermercado Superplaza","<strong>Supermercado Superplaza</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.458070, -70.675458);
  marker = createMarker(point,"Supermercado Nacional Paseo","<strong>Supermercado Nacional Paseo</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.452712, -70.702787);
  marker = createMarker(point,"El Encanto","<strong>El Encanto</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.440511, -70.667471);
  marker = createMarker(point,"El Encanto (El Embrujo)","<strong>El Encanto (El Embrujo)</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.458931, -70.676598);
  marker = createMarker(point,"Supermercado El Tesoro","<strong>Supermercado El Tesoro</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.491751, -70.707129);
  marker = createMarker(point,"Supermercado Ureña Minier","<strong>Supermercado Ureña Minier</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.399944, -70.518562);
  marker = createMarker(point,"Supermercado Hipermoca","<strong>Supermercado Hipermoca</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.395080, -70.528439);
  marker = createMarker(point,"Supermercado Compres","<strong>Supermercado Compres</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.393676, -70.527848);
  marker = createMarker(point,"Supermercado Cooperativo","<strong>Supermercado Cooperativo</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.556860, -71.071734);
  marker = createMarker(point,"Supermercado Morel","<strong>Supermercado Morel</strong>",iconsupermercados);

  //Restaurantes
  point = new google.maps.LatLng(19.377138, -70.607819);
  marker = createMarker(point,"<br>Rancho Chito","<strong>Rancho Chito</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.442456, -70.687668);
  marker = createMarker(point,"Square One","<strong>Square One</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.458707, -70.695316);
  marker = createMarker(point,"Scory Café","<strong>Scory Café</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.459759, -70.694558);
  marker = createMarker(point,"Lacar buffet","<strong>Lacar buffeté</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.459217, -70.681166);
  marker = createMarker(point,"La Parrillita","<strong>La Parrillita</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.456491, -70.696335);
  marker = createMarker(point,"Taberna de Pepe","<strong>Taberna de Pepe</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.779939, -70.682003);
  marker = createMarker(point,"Tío Pan","<strong>Tío Pan</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.491111, -70.655461);
  marker = createMarker(point,"Juancel familiar","<strong>Juancel familiar</strong>",iconrestaurantes);

  //Hoteles
  point = new google.maps.LatLng(19.768514, -70.517135);
  marker = createMarker(point,"<br>Hotel Sosua by the Sea","<strong>Hotel Sosua by the Sea</strong>",iconhoteles);

  point = new google.maps.LatLng(19.451828, -70.690895);
  marker = createMarker(point,"Hotel Matum","<strong>Hotel Matum</strong>",iconhoteles);

  point = new google.maps.LatLng(19.770770, -70.650107);
  marker = createMarker(point,"Hotel Blue Jacktar","<strong>Hotel Blue Jacktar</strong>",iconhoteles);

  point = new google.maps.LatLng(19.770799, -70.645827);
  marker = createMarker(point,"Hotel Celuisma","<strong>Hotel Celuisma</strong>",iconhoteles);

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side__bar1").innerHTML = "";
  document.getElementById("side__bar1").innerHTML = side_bar_html;

  var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(100,50)
  });

  function createMarker(latlng, name, html,iconBase) {
    var contentString = html;
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: iconBase,
      zIndex: Math.round(latlng.lat()*-100000)<<5
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.panTo(marker.getPosition());
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    });

    // save the info we need to use later for the side_bar
    gmarkers.push(marker);

    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
  }
}

function initialize2() {
  // create the map
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(19.47823, -70.68766),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });

  var currCenter = new google.maps.LatLng(19.47823, -70.68766);

  window.setTimeout(function(){
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
  },100);

  var iconjemazar = '/favicon.ico';
  var iconsupermercados = '/assets/img/icon_grocery.svg';
  var iconrestaurantes = '/assets/img/icon_restaurant.svg';
  var iconhoteles = '/assets/img/icon_hotel.svg';

  // Add markers to the map
  side_bar_html = "";

  //Jemazar
  var point = new google.maps.LatLng(19.47823, -70.68766);
  var marker = createMarker(point,"Jemazar","<strong>Jemazar</strong><br>Empresa dominicana dedicada a la distribución de productos lácteos, cárnicos, pescados y mariscos de la más alta calidad con precios competitivos.",iconjemazar);

  //Supermercados
  point = new google.maps.LatLng(19.461030, -70.684515);
  marker = createMarker(point,"<br>Supermercado Central","<strong>Supermercado Central</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.485876, -70.711846);
  marker = createMarker(point,"Supermercado Superplaza","<strong>Supermercado Superplaza</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.458070, -70.675458);
  marker = createMarker(point,"Supermercado Nacional Paseo","<strong>Supermercado Nacional Paseo</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.452712, -70.702787);
  marker = createMarker(point,"El Encanto","<strong>El Encanto</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.440511, -70.667471);
  marker = createMarker(point,"El Encanto (El Embrujo)","<strong>El Encanto (El Embrujo)</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.458931, -70.676598);
  marker = createMarker(point,"Supermercado El Tesoro","<strong>Supermercado El Tesoro</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.491751, -70.707129);
  marker = createMarker(point,"Supermercado Ureña Minier","<strong>Supermercado Ureña Minier</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.399944, -70.518562);
  marker = createMarker(point,"Supermercado Hipermoca","<strong>Supermercado Hipermoca</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.395080, -70.528439);
  marker = createMarker(point,"Supermercado Compres","<strong>Supermercado Compres</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.393676, -70.527848);
  marker = createMarker(point,"Supermercado Cooperativo","<strong>Supermercado Cooperativo</strong>",iconsupermercados);

  point = new google.maps.LatLng(19.556860, -71.071734);
  marker = createMarker(point,"Supermercado Morel","<strong>Supermercado Morel</strong>",iconsupermercados);

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side__bar2").innerHTML = "";
  document.getElementById("side__bar2").innerHTML = side_bar_html;

  var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(100,50)
  });

  function createMarker(latlng, name, html,iconBase) {
    var contentString = html;
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: iconBase,
      zIndex: Math.round(latlng.lat()*-100000)<<5
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.panTo(marker.getPosition());
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    });

    // save the info we need to use later for the side_bar
    gmarkers.push(marker);

    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
  }
}

function initialize3() {
  // create the map
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(19.47823, -70.68766),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });

  var currCenter = new google.maps.LatLng(19.47823, -70.68766);

  window.setTimeout(function(){
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
  },100);

  var iconjemazar = '/favicon.ico';
  var iconsupermercados = '/assets/img/icon_grocery.svg';
  var iconrestaurantes = '/assets/img/icon_restaurant.svg';
  var iconhoteles = '/assets/img/icon_hotel.svg';

  // Add markers to the map
  side_bar_html = "";

  //Jemazar
  var point = new google.maps.LatLng(19.47823, -70.68766);
  var marker = createMarker(point,"Jemazar","<strong>Jemazar</strong><br>Empresa dominicana dedicada a la distribución de productos lácteos, cárnicos, pescados y mariscos de la más alta calidad con precios competitivos.",iconjemazar);

  //Restaurantes
  point = new google.maps.LatLng(19.377138, -70.607819);
  marker = createMarker(point,"<br>Rancho Chito","<strong>Rancho Chito</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.442456, -70.687668);
  marker = createMarker(point,"Square One","<strong>Square One</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.458707, -70.695316);
  marker = createMarker(point,"Scory Café","<strong>Scory Café</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.459759, -70.694558);
  marker = createMarker(point,"Lacar buffet","<strong>Lacar buffeté</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.459217, -70.681166);
  marker = createMarker(point,"La Parrillita","<strong>La Parrillita</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.456491, -70.696335);
  marker = createMarker(point,"Taberna de Pepe","<strong>Taberna de Pepe</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.779939, -70.682003);
  marker = createMarker(point,"Tío Pan","<strong>Tío Pan</strong>",iconrestaurantes);

  point = new google.maps.LatLng(19.491111, -70.655461);
  marker = createMarker(point,"Juancel familiar","<strong>Juancel familiar</strong>",iconrestaurantes);

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side__bar3").innerHTML = "";
  document.getElementById("side__bar3").innerHTML = side_bar_html;

  var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(100,50)
  });

  function createMarker(latlng, name, html,iconBase) {
    var contentString = html;
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: iconBase,
      zIndex: Math.round(latlng.lat()*-100000)<<5
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.panTo(marker.getPosition());
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    });

    // save the info we need to use later for the side_bar
    gmarkers.push(marker);

    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
  }
}

function initialize4() {
  // create the map
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(19.47823, -70.68766),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas4"), myOptions);

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });

  var currCenter = new google.maps.LatLng(19.47823, -70.68766);

  window.setTimeout(function(){
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
  },100);

  var iconjemazar = '/favicon.ico';
  var iconsupermercados = '/assets/img/icon_grocery.svg';
  var iconrestaurantes = '/assets/img/icon_restaurant.svg';
  var iconhoteles = '/assets/img/icon_hotel.svg';

  // Add markers to the map
  side_bar_html = "";

  //Jemazar
  var point = new google.maps.LatLng(19.47823, -70.68766);
  var marker = createMarker(point,"Jemazar","<strong>Jemazar</strong><br>Empresa dominicana dedicada a la distribución de productos lácteos, cárnicos, pescados y mariscos de la más alta calidad con precios competitivos.",iconjemazar);

  //Hoteles
  point = new google.maps.LatLng(19.768514, -70.517135);
  marker = createMarker(point,"<br>Hotel Sosua by the Sea","<strong>Hotel Sosua by the Sea</strong>",iconhoteles);

  point = new google.maps.LatLng(19.451828, -70.690895);
  marker = createMarker(point,"Hotel Matum","<strong>Hotel Matum</strong>",iconhoteles);

  point = new google.maps.LatLng(19.770770, -70.650107);
  marker = createMarker(point,"Hotel Blue Jacktar","<strong>Hotel Blue Jacktar</strong>",iconhoteles);

  point = new google.maps.LatLng(19.770799, -70.645827);
  marker = createMarker(point,"Hotel Celuisma","<strong>Hotel Celuisma</strong>",iconhoteles);

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side__bar4").innerHTML = "";
  document.getElementById("side__bar4").innerHTML = side_bar_html;

  var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(100,50)
  });

  function createMarker(latlng, name, html,iconBase) {
    var contentString = html;
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: iconBase,
      zIndex: Math.round(latlng.lat()*-100000)<<5
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.panTo(marker.getPosition());
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    });

    // save the info we need to use later for the side_bar
    gmarkers.push(marker);

    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
  }
}

// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

function mapa1() {  initialize1();}
function mapa2() {  initialize2();}
function mapa3() {  initialize3();}
function mapa4() {  initialize4();}

// Thanks to http://www.geocodezip.com/
// for the base code of this feature.
