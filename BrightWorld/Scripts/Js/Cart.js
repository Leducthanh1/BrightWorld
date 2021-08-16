// Amount Button Chage Value event
	$('#Amount').change(function(event) {
		$(this).val();
	});
	$('.AmountMinus').click(function(event) {
		var X = Number($('#Amount').val());
		if (X > 1) {
			X -= 1;
		}
		$('#Amount').val(X);
	});
	$('.AmountPlus').click(function(event) {
		var X = Number($('#Amount').val());
		X += 1;
		$('#Amount').val(X);
	});