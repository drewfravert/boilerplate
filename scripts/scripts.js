// load when DOM is ready
$(function() {
	
	// link catcher
  $('a').on('click', function(e) {
    if ($(this).attr('href') === '#') e.preventDefault();
  });
	
});

// load when page is ready
$(window).load(function() {
	
});