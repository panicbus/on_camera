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
		var	map = new L.mapbox.map('map', 'panicbus.i8mf0iaa').setView([34.06, -118.204], 11); //set map center for desktop size
	} else {
		var	map = new L.mapbox.map('map', 'panicbus.i8mf0iaa').setView([34.06, -118.204], 12); //set map center for mobile size
	};


	// adds the GeoJson to the map layer from route.js
	map.featureLayer.setGeoJSON(geoJson_features);

	
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
