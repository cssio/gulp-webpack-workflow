// export default function scripts() {

	$(document).click(function() {

		let hello = 'hello webpack'
	  	alert(hello)
	});

	


	// 	$('.owl-carousel').owlCarousel({
	//     loop: true,
	//     margin: 10,
	//     nav: false,
	//     dotsEach: true,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         768:{
	//             items:3
	//         }
	//     }
	// });

// }



// require('modules');
// requare('jquery-3.2.1.min.js');

// $(function() {

	// alert('hello')

// });
// 	// --------------------------------------------------------------------------
// 	// SVG
// 	// --------------------------------------------------------------------------

// 	svg4everybody();

// 	// --------------------------------------------------------------------------
// 	// Formstyler
// 	// --------------------------------------------------------------------------

// 	$('.app-select').styler({
// 		selectSmartPositioning: false,
// 		selectSearch: false,
// 		selectVisibleOptions: 0,
// 		selectSearchLimit: 6
// 	});

// 	// --------------------------------------------------------------------------
// 	// Owl Carousel
// 	// --------------------------------------------------------------------------


// 	$('.owl-carousel').owlCarousel({
// 	    loop: true,
// 	    margin: 10,
// 	    nav: false,
// 	    dotsEach: true,
// 	    responsive:{
// 	        0:{
// 	            items:1
// 	        },
// 	        768:{
// 	            items:3
// 	        }
// 	    }
// 	});


// 	// --------------------------------------------------------------------------
// 	// Mask Phone
// 	// --------------------------------------------------------------------------

// 	$(".is-mask-phone").mask("+7 (999) 999-9999");


// 	// --------------------------------------------------------------------------
// 	// Range
// 	// --------------------------------------------------------------------------

// 	$('.app-range-input').ionRangeSlider({
// 		type: "double",
// 		from: 0,
// 		min: 0,
// 		max: 1000,
// 		step: 5,
// 		hide_min_max: true,
// 		hide_from_to: true,
// 		force_edges: true,
// 		grid: false
// 	});


// 	$('.app-range-input').on('change', function(event) {
// 		event.preventDefault();

// 		var range = $(this),
//         	rangeData = range.data("ionRangeSlider"),
//         	rangeDataFrom = range.data("from"),
//         	rangeDataTo = range.data("to");

//         range.closest('.app-range').find('.app-range-data').text(rangeDataFrom + ' - ' + rangeDataTo)

// 	});



// });