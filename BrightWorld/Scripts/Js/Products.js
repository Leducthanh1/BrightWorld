$(document).ready(function () {
<<<<<<< HEAD
	var url_string = $(location).attr('href')
	var url = new URL(url_string);
=======
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
	var DATA;
	var data;
	var i = 0;
	var Layout = 24;
	var N_Product;
<<<<<<< HEAD
	var BrandName = null;
	var ClassName = null;
=======
	var BrandName = '';
	var ClassName = '';
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
	var Price = 500;

	//load json from sever
	$.ajax({
		url: '/Products/LoadData',
		type: "GET",
		dataType: "json",
		success: function (D) {
			DATA = D;
<<<<<<< HEAD
			BrandName = url.searchParams.get("Brand");
			ClassName = url.searchParams.get("Category");
			data = Filter(BrandName, ClassName, Price);
=======
			data = DATA;
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
			// Show Products 24 First Product
			if (data.length < Layout) {
				N_Product = data.length;
				for (i; i < N_Product; i++) {
					Show_Product(i);
				}
				$('#ShowMore_Products-Button').addClass('none');
				$('#ShowMore_Products-Button').removeClass('block');
				$('#Products_Full').addClass('block');
				$('#Products_Full').removeClass('none');
			}
			else {
				N_Product = Layout;
				for (i; i < N_Product; i++) {
					Show_Product(i);
				}
				$('#Products_Full').addClass('none');
				$('#Products_Full').removeClass('block');
				$('#ShowMore_Products-Button').addClass('block');
				$('#ShowMore_Products-Button').removeClass('none');
			}
			i = 24;
			N_Product = 48;
			$('.Loading').addClass('none');
		}
	});

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

	// Filter function
	function Filter(a, b, c) {
		var x = [];
		var j = 0;
<<<<<<< HEAD
		if (a == null) {
			if (b == null) {
=======
		if (a == '0') {
			if (b == '0') {
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
				for (var i = 0; i < DATA.length; i++) {
					if (Number(DATA[i].Price) < Number(Price)) {
						x[j] = DATA[i];
						j++
					}
				}
				return x;
			}
			else {
				for (var i = 0; i < DATA.length; i++) {
					if (DATA[i].Class == b && (Number(DATA[i].Price) <= Number(Price))) {
						x[j] = DATA[i];
						j++
					}
				}
				return x;
			}
		}
		else {
<<<<<<< HEAD
			if (b == null) {
=======
			if (b == '0') {
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
				for (var i = 0; i < DATA.length; i++) {
					if (DATA[i].Brand == a && (Number(DATA[i].Price) <= Number(Price))) {
						x[j] = DATA[i];
						j++
					}
				}
				return x;
			}
			else {
				for (var i = 0; i < DATA.length; i++) {
					if ((DATA[i].Brand == a) && (DATA[i].Class == b) && (Number(DATA[i].Price) <= Number(Price))) {
						x[j] = DATA[i];
						j++
					}
				};
				return x;
			}
		}
	};

	// Apply Filter function
	function ApplyFilter() {
		$('#Products_Base').empty();
		if (data.length > Layout) {
			$('#Products_Full').addClass('none');
			$('#Products_Full').removeClass('block');
			$('#ShowMore_Products-Button').addClass('block');
			$('#ShowMore_Products-Button').removeClass('none');
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			}
		}
		else {
			$('#ShowMore_Products-Button').addClass('none');
			$('#ShowMore_Products-Button').removeClass('block');
			$('#Products_Full').addClass('block');
			$('#Products_Full').removeClass('none');
			for (var i = 0; i < data.length; i++) {
				Show_Product(i);
			}
		}
	};

	// Change Layout Button
	$('#Layout').change(function (event) {
		$('#Products_Base').empty();
		$(window).scrollTop(0);
		var X = $('#Layout').val();
		if (data.length > (X)) {
			$('#Products_Full').addClass('none');
			$('#Products_Full').removeClass('block');
			$('#ShowMore_Products-Button').addClass('block');
			$('#ShowMore_Products-Button').removeClass('none');
		}
		else {
			$('#ShowMore_Products-Button').addClass('none');
			$('#ShowMore_Products-Button').removeClass('block');
			$('#Products_Full').addClass('block');
			$('#Products_Full').removeClass('none');
		}
		// Layout 12 Product
		if (X == 12) {
			Layout = 12;
			for (var j = 0; j < 12; j++) {
				Show_Product(j);
			}
			i = 12;
			N_Product = 24;
		}
		// Layout 48 Product
		else if (X == 48) {
			Layout = 48;
			for (var j = 0; j < 48; j++) {
				Show_Product(j);
			}
			i = 48;
			N_Product = 96;
		}
		// Layout 24 Product
		else {
			Layout = 24;
			for (var j = 0; j < 24; j++) {
				Show_Product(j);
			}
			i = 24;
			N_Product = 48;
		}
	});

	// Sorted event
	$('#Sort').change(function (event) {
		$('#Products_Base').empty();
		if (Layout < data.length) {
			$('#Products_Full').addClass('none');
			$('#Products_Full').removeClass('block');
			$('#ShowMore_Products-Button').addClass('block');
			$('#ShowMore_Products-Button').removeClass('none');
		}
		else {
			$('#ShowMore_Products-Button').addClass('none');
			$('#ShowMore_Products-Button').removeClass('block');
			$('#Products_Full').addClass('block');
			$('#Products_Full').removeClass('none');
		}
		$(window).scrollTop(0);
		var X = $('#Sort').val();
		// Sort Default
		if (X == 0) {
			data.sort(function (a, b) { return a.Id - b.Id });
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			}
			i = N_Product;
			N_Product += Layout;
		}
		// Price Ascending
		else if (X == 1) {
			data.sort(function (a, b) { return a.Price - b.Price });
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			}
			i = N_Product;
			N_Product += Layout;
		}
		// Price Decrease
		else if (X == -1) {
			data.sort(function (a, b) { return a.Price - b.Price });
			data.reverse();
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			}
			i = N_Product;
			N_Product += Layout;
		}
		// Evalute Ascending
		else if (X == 2) {
			data.sort(function (a, b) { return a.ProductFeature.Evalute - b.ProductFeature.Evalute });
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			}
			i = N_Product;
			N_Product += Layout;
		}
		// Evalute Decrease
		else if (X == -2) {
			data.sort(function (a, b) { return a.ProductFeature.Evalute - b.ProductFeature.Evalute });
			data.reverse();
			for (var i = 0; i < Layout; i++) {
				Show_Product(i);
			};
			i = N_Product;
			N_Product += Layout;
		}
	});

	// Show More Product Button click event
	$('#ShowMore_Products-Button').click(function (event) {
		$('.Classify').removeClass('FixBug_Class-Footer');
		$('.Products_Header').removeClass('FixBug_ProHeader-Footer');
		$('.Products_Header').addClass('Product_Header-FixedTop shadow_bot');
		$('.Classify').addClass('Product_Header-FixedTop');
		var ScrollLocation = $(window).scrollTop();
		if (N_Product < data.length) {
			for (i; i < N_Product; i++) {
				Show_Product(i);
			}
			i = N_Product
			N_Product += Layout;
			console.log(N_Product);
		}
		else {
			N_Product = data.length;
			for (i; i < N_Product; i++) {
				Show_Product(i);
			}
			$('#ShowMore_Products-Button').addClass('none');
			$('#ShowMore_Products-Button').removeClass('block');
			$('#Products_Full').addClass('block');
			$('#Products_Full').removeClass('none');
		}
		$(window).scrollTop(ScrollLocation);
	});

	// Show Classify for Mobile Drive
	$('.Products_Header-FilterIcon').click(function (event) {
		$('.Classify').addClass('transY_0 transi shadow_right');
		$('.Overlay_Classify').addClass('block');
	});;
	$('.Overlay_Classify').click(function (event) {
		$('.Classify').removeClass('transY_0');
		$('.Overlay_Classify').removeClass('block');
	});

	// Scroll effect
	var Top = 0;
	$(window).scroll(function (event) {
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
				$('.Classify').removeClass('Product_Class-ScrolDown');
			}
			else {
				$('.Products_Header').addClass('Product_Header-ScrolDown transi');
				$('.Classify').addClass('Product_Class-ScrolDown transi');
			}
			if (Main_Scroll >= Offset_Footer) {
				$(window).one('scroll', function (event) {
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
			$('.Classify').removeClass('Product_Class-ScrolDown transi');
			$('.Classify').css('transition', 'unset');
		}
		Top = X;
	});

	// Show Price value
	$('#Price').on('input', function (event) {
		Price = $('#Price').val();
		$('#Value').html(Price);
		console.log(Price);
	});

	// Filter
		// Brand Check
		$('#AllBrand').change(function (event) {
<<<<<<< HEAD
			BrandName = null;
=======
			BrandName = '0';
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
		});
		$('#RangDong').change(function (event) {
			BrandName = 'RangDong';
		});
		$('#Philips').change(function (event) {
			BrandName = 'Philips';
		});
		$('#Panasonic').change(function (event) {
			BrandName = 'Panasonic';
		});
		$('#Comet').change(function (event) {
			BrandName = 'Comet';
		});
		$('#Paragon').change(function (event) {
			BrandName = 'Paragon';
		});
		$('#Duhal').change(function (event) {
			BrandName = 'Duhal';
		});
		$('#Anfaco').change(function (event) {
			BrandName = 'Anfaco';
		});

		// Categotri Check
		$('#AllClass').change(function (event) {
<<<<<<< HEAD
			ClassName = null;
=======
			ClassName = '0';
>>>>>>> 854ce3f11a973ebc38e477460c37a1c23195f609
		});
		$('#Bulbs').change(function (event) {
			ClassName = 'Led Bulbs';
		});
		$('#Tube').change(function (event) {
			ClassName = 'Led Tube';
		});
		$('#Decor').change(function (event) {
			ClassName = 'Led Decor';
		});
		$('#Spotlight').change(function (event) {
			ClassName = 'Led Spotlight';
		});
		$('#Outdoor').change(function (event) {
			ClassName = 'Led Outdoor ';
		});
		$('#Panel').change(function (event) {
			ClassName = 'Led Panel ';
		});
		$('#Street').change(function (event) {
			ClassName = 'Led Street';
		});

		// ApplyFilter Button click event
		$('#ApplyFilter').click(function (event) {
			$(window).scrollTop(0);
			$('.Classify').removeClass('transY_0');
			$('.Overlay_Classify').removeClass('block');
			data = Filter(BrandName, ClassName, Price);
			ApplyFilter();
		});

	// Offset Header
	var X = ($('.Products_Header').height()) + 5;
	$('.Products_Content').css('margin-top', X);

	// Add Producs
	$('.AddButton').click(function (event) {
		$('.Popup').fadeIn('1000').delay(1000).fadeOut('1000');
		$('#Empty').addClass('none');
		var x = ($(this).attr('data-id')) - 1;
		$('.Header_NavMb-CartList').append(
			'<li class="Header_NavMb-CartItem">' +
			'<a href="Htmls/ProductDetail.html?id=' + data[x].Id + '">' +
			'<img src="../Img/Product/' + data[x].I1 + '.png">' +
			'<div>' +
			'<h6>' + data[x].Name + '</h6>' +
			'<span> ' + data[x].Br + ' / </span>' +
			'<span> ' + data[x].Cl + ' </span>' +
			'<p>' + data[x].Price + '$</p>' +
			'</div>' +
			'</a>' +
			'</li>'
		)
	});
});