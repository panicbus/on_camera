$(window).load(function(){

	var hoverLink = function(link){
		$('.view-options').removeClass('current');
		$(link).addClass('current');	
	};

	$('body').on('click', '#locations_links a', function(){
		hoverLink(this);
	});




});