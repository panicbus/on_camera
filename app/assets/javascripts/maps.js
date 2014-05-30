$(window).load(function(){
	// for isotope call and to allow see all page to appear 
	// on pageload check to see if map div is on current page
	// if so initialize map into #map div   
	if($('#map').length > 0){
		initialize_map();
	}
});


function initialize_map(){

	var mq = window.matchMedia( "(min-width: 767px)" ); // Javascript media query - window width if statement

	if (mq.matches){
		var	map = new L.mapbox.map('map', 'panicbus.i8mf0iaa').setView([34.104, -118.181], 12); //set map center for desktop size
	} else {
		var	map = new L.mapbox.map('map', 'panicbus.i8mf0iaa').setView([34.067, -118.26], 11); //set map center for mobile size
	};

	// var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'}).addTo(map);

/////////////////
	var myLayer = L.mapbox.featureLayer().addTo(map);

	myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
	});

	// Add features to the map.
	myLayer.setGeoJSON(geoJson_features);
///////////////

	// adds the GeoJson to the map layer from route.js
	// map.featureLayer.setGeoJSON(geoJson_features);

	
	// this is the marker click listener 
	map.featureLayer.on('click',function(e) {
		$.get("/checkins/" + e.layer.feature.properties.location_id); // fyi this used to have another ,e.layer.etc
		
		// fills the mobile view with class for content_div
		$('.content_div').animate({height:"100%"}, 1000);
		$('#back_button').fadeIn();
	});

	$('body').on('click', '#back_button', function(){
		$('.content_div').animate({height:"30%"}, 1000);
		$('#back_button').fadeOut();
	})

	// Closes the marker popup when map is clicked
	map.on('click',function(e){ });

	$('body').on('click', "#submit_button", function(){
		setTimeout(function(){
			$('.notice').slideUp('slow')
		},3000);
	});
	

};
