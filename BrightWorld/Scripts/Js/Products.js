$(document).ready(function () {
	var data;
	var i = 0;
	var Layout = 24;
	var N_Product;

// show product funtion
	function Show_Product(a) {
		$('#Products_Base').append(
			'<div class="Product card col-6 col-sm-4 col-lg-3">' +
			'<a href="/Products/Detail/' + data[a].ID + '">' +
			'<img class="card-img-top" src="Content/Img/Product/' + data[a].ProductFeature.Img1 + '.png">' +
			'<h6 class="card-title"  title="' + data[a].Name + '">' + data[a].Name + '</h6>' +
			'<div class="Product_Describe">' +
			'<p class="card-text"><i>' + data[a].Brand + '</i></p>' +
			'<p class="card-text Ra_Value">' + data[a].ProductFeature.Evalute + '<i class="fas fa-star" style="color: #ffc107;"></i></p>' +
			'<p class="card-text"><i>' + data[a].Class + '</i></p>' +
			'<p class="card-text Pri_Value">$' + data[a].Price + '</p>' +
			'</div>' +
			'<div class="Product_Button">' +
			'<a class="AddButton btn btn-outline-primary btn-sm" data-id="' + data[a].ID + '">Add</a>' +
			'<a class="BuyButton btn btn-primary btn-sm">Buy</a>' +
			'</div>' +
			'</a>' +
			'</div>'
		);
	};

//load json from sever
	$.ajax({
		url: '/Products/LoadData',
		type: "GET",
		dataType: "json",
		success: function (D) {
			data = D;
			// Show Products 24 First Product
			if (data.length < Layout) {
				N_Product = data.length;
				for (i; i < N_Product; i++) {
					Show_Product(i);
				}
				$('#ShowMore_Products-Button').css('display', 'none');
			}
			else {
				N_Product = Layout;
				for (i; i < N_Product; i++) {
					Show_Product(i);
				}
				$('#Products_Full').css('display', 'none');
			}
			i = 24;
			N_Product = 48;
		}
	});

// Change Layout Button
	$('#Layout').change(function(event) {
		$('#Products_Base').empty();
		$(window).scrollTop(0);
		var X = $('#Layout').val();
		if (data.length > (X)) {
			$('#ShowMore_Products-Button').css('display', 'block');
			$('#Products_Full').css('display', 'none');
		}
		else {
			$('#ShowMore_Products-Button').css('display', 'none');
			$('#Products_Full').css('display', 'block');
		}
		// Layout 12 Product
			if (X == 12) {
				Layout = 12;
				for (var j = 0; j < 12; j++) {
					Show_Product (j);
				}
				i = 12;
				N_Product = 24;
			}
			// Layout 48 Product
			else if (X == 48) {
				Layout = 48;
				for (var j = 0; j < 48; j++) {
					Show_Product (j);
				}
				i = 48;
				N_Product = 96;
			}
			// Layout 24 Product
			else {
				Layout = 24;
				for (var j = 0; j < 24; j++) {
					Show_Product (j);
				}
				i = 24;
				N_Product = 48;
			}
	});

// Sorted event
	$('#Sort').change(function(event) {
		$('#Products_Base').empty();
		if (Layout < data.length) {
			$('#ShowMore_Products-Button').css('display', 'block');
			$('#Products_Full').css('display', 'none');
		}
		else {
			$('#ShowMore_Products-Button').css('display', 'none');
			$('#Products_Full').css('display', 'block');
		}
		$(window).scrollTop(0);
		var X = $('#Sort').val();
		// Sort Default
		if (X == 0) {
			data.sort(function(a,b){return a.Id - b.Id});
				for (var i = 0; i < Layout; i++) {
					Show_Product (i);
				}
				i = N_Product;
				N_Product += Layout;
		}
		// Price Ascending
		else if (X == 1) {
			data.sort(function(a,b){return a.Price - b.Price});
				for (var i = 0; i < Layout; i++) {
					Show_Product (i);
				}
				i = N_Product;
				N_Product += Layout;
		}
		// Price Decrease
		else if (X == -1) {
			data.sort(function(a,b){return a.Price - b.Price});
			data.reverse();
				for (var i = 0; i < Layout; i++) {
					Show_Product (i);
				}
				i = N_Product;
				N_Product += Layout;
		}
		// Evalute Ascending
		else if (X == 2) {
			data.sort(function(a,b){return a.Rate - b.Rate});
				for (var i = 0; i < Layout; i++) {
					Show_Product (i);
				}
				i = N_Product;
				N_Product += Layout;
		}
		// Evalute Decrease
		else if (X == -2) {
			data.sort(function(a,b){return a.Rate - b.Rate});
			data.reverse();
			for (var i = 0; i < Layout; i++) {
				Show_Product (i);
			};
			i = N_Product;
			N_Product += Layout;
		};
	});

// Show More Product Button click event
	$('#ShowMore_Products-Button').click(function(event) {
		$('.Classify').removeClass('FixBug_Class-Footer');
		$('.Products_Header').removeClass('FixBug_ProHeader-Footer');
		$('.Products_Header').addClass('Product_Header-FixedTop shadow_bot');
		$('.Classify').addClass('Product_Header-FixedTop');
		var ScrollLocation = $(window).scrollTop();
		if (N_Product < data.length) {
			for (i; i < N_Product; i++) {
				Show_Product (i);
			}
			i = N_Product
			N_Product += Layout;
			console.log(N_Product);
		}
		else {
			N_Product = data.length;
			for (i; i < N_Product; i++) {
				Show_Product (i);
			}
			$('#ShowMore_Products-Button').css('display', 'none');
			$('#Products_Full').css('display', 'block');
		}
		$(window).scrollTop(ScrollLocation);
	});

// Show Classify for Mobile Drive
	$('.Products_Header-FilterIcon').click(function(event) {
		$('.Classify').addClass('transY_0');
		$('.Overlay_Classify').addClass('block');
	});;
	$('.Overlay_Classify').click(function(event) {
		$('.Classify').removeClass('transY_0');
		$('.Overlay_Classify').removeClass('block');
	});

// Scroll effect
	var Top = 0;
	$(window).scroll(function(event) {
		var A = $('html,body').scrollTop();
		var X = Math.ceil(A)
		var Header_height = $('header').height() + ($('.offset-top').height());
		var Win_Height = $(window).height();
		var Main_Height = $('main').height();
		var Main_Scroll = X - Header_height - 20;
		var Offset_Footer = Main_Height - Win_Height - ($('.offset-top').height());
		if (X > Header_height) {
				$('.Products_Header').addClass('Product_Header-FixedTop shadow_bot');
				$('.Classify').addClass('Product_Header-FixedTop');
			if (X > Top) {
				$('.Products_Header').removeClass('Product_Header-ScrolDown');
				$('.Classify').removeClass('Product_Header-ScrolDown');
			}
			else {
				$('.Products_Header').addClass('Product_Header-ScrolDown transi');
				$('.Classify').addClass('Product_Header-ScrolDown transi');
			}
			if (Main_Scroll >= Offset_Footer) {
				$(window).one('scroll', function(event) {
					$('.Classify').addClass('FixBug_Class-Footer');
					$('.Products_Header').addClass('FixBug_ProHeader-Footer');
					$('.Classify').removeClass('Product_Header-FixedTop');
				});
			}
			else {
				$('.Classify').removeClass('FixBug_Class-Footer');
				$('.Products_Header').removeClass('FixBug_ProHeader-Footer');
			}
		}
		else {
			$('.Products_Header').removeClass('Product_Header-FixedTop shadow_bot');
			$('.Products_Header').removeClass('Product_Header-ScrolDown transi');
			$('.Classify').removeClass('Product_Header-FixedTop');
			$('.Classify').removeClass('Product_Header-ScrolDown transi');
			$('.Classify').css('transition', 'unset');
		}
		Top = X;
	});

// Show Price value
	$('#Price').on('input', function(event) {
		Price = $('#Price').val();
		$('#Value').html(Price);
		console.log(Price);
	});

// Offset Header
	var X = ($('.Products_Header').height()) + 5;
	$('.Products_Content').css('margin-top', X);

//add producs
	$('.addbutton').click(function(event) {
		$('.popup').fadein('1000').delay(1000).fadeout('1000');
		$('#empty').addclass('none');
		var x = ($(this).attr('data-id')) - 1;
		$('.header_navmb-cartlist').append(
			'<li class="header_navmb-cartitem">' +
				'<a href="htmls/productdetail.html?id=' + data[x].id + '">' +
					'<img src="../img/product/' + data[x].i1 + '.png">' +
					'<div>' +
						'<h6>'+ data[x].name +'</h6>' +
						'<span> '+ data[x].br +' / </span>' +
						'<span> '+ data[x].cl +' </span>' +
						'<p>'+ data[x].price +'$</p>' +
					'</div>' +
				'</a>' +
			'</li>'
		)
	});
});