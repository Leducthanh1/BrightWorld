$(document).ready(function() {
	$('[data-type]').click(function(event) {
		$('p', this).toggleClass('block');
	});
});