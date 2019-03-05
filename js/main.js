$(document).ready(function(){

	// Slider top
	$("#top-slider").owlCarousel({
		loop: true,
		items: 1,
		pagination: true,
		theme: "top-slider-theme",
		navText:["prev","next"],
		nav: true,
		autoplay: false,
		autoplaySpeed: 1200
	});

	// Slider bot
	$("#bottom-slider").owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		navText:["‹","›"],
		nav: true,
		autoplay: false,
		autoplaySpeed: 1200
	});

	// Slider Gallery 1
	$(".gallery-xl-1").slick({
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		variableWidth: true,
		arrows: false,
	});

	// Slider Gallery 2
	$(".gallery-xl-2").slick({
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		variableWidth: true,
		arrows: false,
	});

	// slide2id
	$("a.mouse_scroll,nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector:"nav a"
	});
});