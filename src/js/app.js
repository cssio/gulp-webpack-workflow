

// import owlCarousel from './jquery.owl.carousel.js';
// import owlCarousel from 'owl.carousel'
// import scripts from './scripts';


// require('./scripts.js')

// require('expose-loader?jQuery!jquery');

// import 'expose?$!expose?window.jQuery!jquery';
// window.$ = window.jQuery;
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;  
// import $ from 'jquery';

// window.$ = window.jQuery = require("jquery");

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

window.jQuery = window.$ = require("jquery");

// import $ from 'jquery';
import 'magnific-popup';
import 'slick-carousel';
import '@fancyapps/fancybox';
import 'inputmask';

// import 'expose-loader?$.fn.validate!expose-loader?$.validator.addMethod!jquery-validation';
// import 'expose-loader?$.fn.validate!jquery-validation';
// import 'jquery-validation/dist/additional-methods.js';
import 'jquery-validation';
// import 'jquery-validation/dist/additional-methods.js';
// import 'expose-loader?$.fn.validate!jquery-validation';


// import validation from 'jquery.validation';

import 'jquery-form-styler';

import 'ion-rangeslider';

import 'readmore-js';

import 'jquery.animate-number';

import 'jquery-lazy';

// import 'malihu-custom-scrollbar-plugin';

// import svg4everybody from 'svg4everybody';

// import {TimelineMax} from 'gsap';

// import ScrollMagic from 'scrollmagic';

// import { TimelineMax, TweenMax, Linear } from 'gsap';

// import ScrollMagic from 'scrollmagic';
// import 'animation.gsap';
// import 'debug.addIndicators';


// import 'svg4everybody';

// module.exports = $.magnificPopup

$(() => {

	
	$('html').addClass('is-load');

	// $('.js-scroll').mCustomScrollbar();


	 $('.lazy').lazy({
	 	effect: "fadeIn",
          effectTime: 400,
          threshold: 0
	 });

	// svg4everybody();

	$('[data-mfp]').magnificPopup({type:'image'});


	$(".js-slick").slick();

	$('input, select').styler();

	// $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');

	// Inputmask({"mask": "+7 (999) 999-99-99"}).mask('input[type=tel]');

	$('input[type=tel]').inputmask({"mask": "+7 (999) 999-99-99", showMaskOnFocus: true });


	// $.validator.addMethod("regexp", function (value, element) {
	//     return this.optional(element) || /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
	// });

	var validateErrorPlacement = function(error, element) {
		error.addClass('.form-validate-text');
		error.appendTo(element.closest('form'));
	}

	// define(["jquery", "jquery.validate"], function( $ ) {

		// $('form').validate();
	$('.js-validate').each(function (index, value) { 

		$(this).validate({
			errorClass: 'is-error',
			validClass: 'is-valid is-changed',
			errorElement: "span",
			ignore: ":disabled,:hidden",
			rules: {
				name: "required",
				tel: {
	                required: true,
	                regexp: true
				},
				email: {
			    	required: true,
					email: true
				}

			},
			messages: {
				name: false,
				tel: false,
				email: false
			},
			errorPlacement: function(error,element) {
			    return true;
			},
			submitHandler: function(form) {





				// $.ajax({
				// 	type: "POST",
				// 	url: 'send.php',
				// 	data: $(form).serialize(),
				// 	timeout: 300,
				// 	success: function() {

				// 		console.log('Success!')

				// 	},
				// 	error: function() {

				// 		console.log('Error!')

				// 	}
				// });

	            // return false;

			}
		});

	});


	$('input[type=range]').ionRangeSlider();



	$('article').readmore({
	  speed: 75,
	  lessLink: '<a href="#">Read less</a>',
	  collapsedHeight: 100,
		heightMargin: 16,
		moreLink: '<a href="#">Read more</a>',
		lessLink: '<a href="#">Close</a>',
		embedCSS: true,
		blockCSS: 'display: block; width: 100%;',
		startOpen: false,
		beforeToggle: function() {},
		afterToggle: function() {},
		blockProcessed: function() {}
	});


	$('.js-number').animateNumber(
	  {
	    number: 100,
	    color: 'green', // require jquery.color 
	    'font-size': '50px',
	 
	    easing: 'easeInQuad', // require jquery.easing 
	 
	    // optional custom step function 
	    // using here to keep '%' sign after number 
	    numberStep: function(now, tween) {
	      var floored_number = Math.floor(now),
	          target = $(tween.elem);
	 
	      target.text(floored_number + ' %');
	    }
	  },
	  1800
	);

	// });

});


