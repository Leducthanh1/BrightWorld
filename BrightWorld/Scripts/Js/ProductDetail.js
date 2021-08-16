$(document).ready(function() {
	var data = DATA;
// Get Id from url
	var url_string = $(location).attr('href')
	var url = new URL(url_string);
	var X = (Number(url.searchParams.get("id"))) - 1;
	// Show Product Image and Image Button

	// if there are 3 Image
	if (data[X].I3 != undefined) {
		$('.Product_Img').prepend('<img id="Product_Img-3"  src="../Img/Product/' + data[X].I3 +'.png">');
		$('.Product_Img').prepend('<img id="Product_Img-2"  src="../Img/Product/' + data[X].I2 +'.png">');
		$('.Product_Img').prepend('<img id="Product_Img-1" class="block" src="../Img/Product/' + data[X].I1 +'.png">');
		$('.Product_Img').prepend(
			'<div class="Product_Img-List">' +
				'<div class="Product_Img-Item"><img class="Item1" src="../Img/Product/' + data[X].I1 +'.png">' +
				'<img class="Item2" src="../Img/Product/' + data[X].I2 +'.png">' +
				'<img class="Item3" src="../Img/Product/' + data[X].I3 +'.png"></div>' +
			'</div>'
		);
	}
	// If only 2 Image
	else if (data[X].I2 != undefined) {
		$('.Product_Img').prepend('<img id="Product_Img-2" src="../Img/Product/' + data[X].I2 +'.png">');
		$('.Product_Img').prepend('<img id="Product_Img-1" class="block" src="../Img/Product/' + data[X].I1 +'.png">');
		$('.Product_Img').prepend(
			'<div class="Product_Img-List">' +
				'<div class="Product_Img-Item"><img class="Item1" src="../Img/Product/' + data[X].I1 +'.png">' +
				'<img class="Item2" src="../Img/Product/' + data[X].I2 +'.png"></div>' +
			'</div>'
		);
	}
	// If only 1 Image
	else {
		$('.Product_Img').prepend('<img id="Product_Img-1" class="block" src="../Img/Product/' + data[X].I1 +'.png">')
	};

//Show Product Name
	$('#Name').html(data[X].Name)

//Show Evalute
	var R = Number(data[X].Rate);
	for (var i = 0; i < R; i++) {
		$('#Evalute').append('<i class="fas fa-star" style="color: #ffc107;"></i>')
	}

//Show Price
	var FakePrice = data[X].Price;
	var F = Math.ceil(FakePrice * 125 /100);
	$('#FakePrice').html(F)
	$('#Price').html(data[X].Price)

//Show Product Describle
	$('#Br').html(data[X].Br);
	$('#Cl').html(data[X].Cl);
	$('#V').html(data[X].V);
	$('#W').html(data[X].W);

//Show Product Description
	$('#Dc').html(data[X].Dc);

// Show Comment
	$('#Cm1').html(data[X].Cm1);
	$('#Cm2').html(data[X].Cm2);
	$('#Cm3').html(data[X].Cm3);

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