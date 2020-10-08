$(function(){
	$('.slider').slick({
		nextArrow:'<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next"></button>',
		prevArrow:'<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev"></button>',
		responsive: [
		{
			breakpoint: 401,
			settings: {
				arrows:false
			}
		}
		]
	});
})




