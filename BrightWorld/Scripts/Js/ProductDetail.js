$(document).ready(function() {
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

//Image Mini click event
	$('.Item1').click(function(event) {
		$('#Product_Img-1').addClass('block')
		$('#Product_Img-2').removeClass('block')
		$('#Product_Img-3').removeClass('block')
	});
	$('.Item2').click(function(event) {
		$('#Product_Img-2').addClass('block')
		$('#Product_Img-1').removeClass('block')
		$('#Product_Img-3').removeClass('block')
	});
	$('.Item3').click(function(event) {
		$('#Product_Img-3').addClass('block')
		$('#Product_Img-1').removeClass('block')
		$('#Product_Img-2').removeClass('block')
	});
});