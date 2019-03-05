$(document).ready(function() {

	// Опеделяем переменные
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	// События по клику на иконку
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle();
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		}
		navBlock.removeClass(navBlockOpen);
	})

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 750 && navBlock.hasClass(navBlockOpen)) {
			navBlock.removeClass(navBlockOpen);
			navToggleButton.removeClass("active")
		}
	})

	// Функция для анимации иконки
	function navButtonToggle(){
		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	}

}); 