$(function() {

	$('body').fadeIn('slow');
	
	$('header nav li a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	$('*[data-animate]').addClass('hide').each(function(){
    	$(this).viewportChecker({
        	classToAdd: 'show animated visibility ' + $(this).data('animate'),
        	classToRemove: 'hide',
        	offset: '10%'
      	});
    });
});