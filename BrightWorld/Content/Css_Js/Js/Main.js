$(document).ready(function() {

// Effect when scroll
	$('main').addClass('main_padding');
	var Top = 0;
	$(window).scroll(function(event) {
		var Header_height = $('header').height();
		var Scroll = $(window).scrollTop();
		// When Scroll over Header
		if (Scroll > Header_height) {
			$('header').addClass('header-100');
			// Scroll down
			if (Scroll > Top) {
				$('header').removeClass('transY_0');
				$('header').removeClass('shadow_bot');
				$('header').addClass('transi');
				$('.ScrollTop').removeClass('transX_0')	
			}
			// Scroll up
			else {
				$('header').addClass('transY_0');
				$('header').addClass('shadow_bot');
				$('header').addClass('transi');
				if (Scroll > 500) {
					$('.ScrollTop').addClass('transX_0 transi')	
				}
			}
		}
		else {
			$('header').removeClass('shadow_bot');
			$('header').removeClass('header-100');
			$('.ScrollTop').removeClass('transX_0')	
		}
		Top = Scroll;
	});

// Search
	$('.Header_Nav-SearchBox').keyup(function(event) {
		var In = $(this).val();
		$('.Header_Nav-SearchBar').after(
			
			)
	});

// ScrollTop Button click event
	$('.ScrollTop').click(function(event) {
		$(window).scrollTop(0);
	});

// Acount Button
	$('.Header-UserBtn').click(function(event) {
		$('.Header_NavMb-Account').addClass('transX_0');
		$('.Overlay').addClass('block');
	});

// Show Cart Button
	$('.Header-CartBtn').click(function(event) {
		$('.Header_NavMb-Cart').addClass('transX_0');
		$('.Overlay').addClass('block');
	});

// Show Menu Button
	$('.Header-MenuBtn').click(function(event) {
		$('.Header_NavMb-Link').addClass('transX_0');
		$('.Overlay').addClass('block');
	});

// Overlay for Menu Cart Acount
	$('.Overlay').click(function(event) {
		$('.Header_NavMb-Account').removeClass('transX_0');
		$('.Header_NavMb-Cart').removeClass('transX_0');
		$('.Header_NavMb-Link').removeClass('transX_0');
		$('.Overlay').removeClass('block');
	});

// Show Form LogIn Button
	$('.Header_NavMb-AccountLogInBtn').click(function(event) {
		$('.Form').addClass('flex');
		$('.Form_LogIn').addClass('block');
		$('.Form_Header-LogInButton').addClass('blue1_color');
		$('.Form_Header-FootItem').addClass('translateX_left');
		$('.Header_NavMb-Account').removeClass('transX_0');
		$('.Overlay').removeClass('block');
	});

// Show Form Register Button
	$('.Header_NavMb-AccountRegisBtn').click(function(event) {
		$('.Form').addClass('flex');
		$('.Form_Regis').addClass('block');
		$('.Form_Header-RegisButton').addClass('blue1_color');
		$('.Form_Header-FootItem').addClass('translateX_right');
		$('.Header_NavMb-Account').removeClass('transX_0');
		$('.Overlay').removeClass('block');
	});

// Swap Login and Rigis Button
	$('.Form_Header-LogInButton').click(function(event) {
		$('.Form_Regis').removeClass('block');
		$('.Form_LogIn').addClass('block');
		$('.Form_Header-RegisButton').removeClass('blue1_color');
		$('.Form_Header-LogInButton').addClass('blue1_color');
		$('.Form_Header-FootItem').removeClass('translateX_right');
		$('.Form_Header-FootItem').addClass('translateX_left');
	});
	$('.Form_Header-RegisButton').click(function(event) {
		$('.Form_LogIn').removeClass('block');
		$('.Form_Regis').addClass('block');
		$('.Form_Header-LogInButton').removeClass('blue1_color');
		$('.Form_Header-RegisButton').addClass('blue1_color');
		$('.Form_Header-FootItem').removeClass('translateX_left');
		$('.Form_Header-FootItem').addClass('translateX_right');
	});

// Close Form Button
	$('.Form_Bg-CloseButton').click(function(event) {
		$('.Form').removeClass('flex');
		$('.Form_LogIn').removeClass('block');
		$('.Form_Regis').removeClass('block');
		$('.Form_Header-LogInButton').removeClass('blue1_color');
		$('.Form_Header-RegisButton').removeClass('blue1_color');
		$('.Form_Header-FootItem').removeClass('translateX_left translateX_right');
	});
});