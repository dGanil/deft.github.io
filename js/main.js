$('.select__top').bind('click', function() {
	$(this).siblings('.select__hidden').slideToggle()
})


$('.select__item').bind('click', function() {
	let text = $(this).text()
	$('.select__item').removeClass('active')
	$(this).addClass('active')
	$(this).parent('.select__hidden').siblings('.select__top').find('.select__current').text(text)
	$(this).parent('.select__hidden').slideUp()
})


$(document).mouseup(function (e) {
	var container = $(".select");
	if (container.has(e.target).length === 0){
		$('.select__hidden').slideUp();
	}
});


$('input[type="phone"]').mask("+7 (999) 999-9999")

$('.radio-button').bind('click', function() {
	$(this).siblings("input[type='radio']").prop('checked', true)
})
let check = false
$('.radio-button').bind('click', function() {
	if (check == false) {
		$(this).siblings("input[type='checkbox']").prop('checked', true)
		check = true 
	} else if (check == true) {
		$(this).siblings("input[type='checkbox']").prop('checked', false)
		check = false 
	}
})

$('.color').bind('click', function() {
	$('.color').removeClass('active')
	$(this).addClass('active')
})

let width = $(window).width()


if (width <= 1199) {
	$("#see1").appendTo('.review__see')
	$("#see1").addClass('see_bottom')
}

if (width <= 991) {
	$('.doors').appendTo('#firstCol')
}

$('.navbar-toggler').bind('click', function() {
	$('#openMenu').fadeToggle(1)
	$('#closeMenu').fadeToggle(1)
})