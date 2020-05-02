var Common = {
	init: function() {;
        Common.menu();
        Common.slider();
        Common.main();
	},

    menu: function() {
        $('.mob_menu').on('click',function(e){
            e.preventDefault();
            $('.nav_block').addClass('open');
            $('body').addClass('hidden');
        });
        $('.mob_close').on('click',function(e){
            e.preventDefault();
            $('.nav_block').removeClass('open');
            $('body').removeClass('hidden');
        });
        $(window).resize(function(){
            $('.nav_block').removeClass('open');
            $('body').removeClass('hidden');
        })
    },
	slider: function() {
		if($('.slider .owl-carousel').length) {
			$('.slider .owl-carousel').owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 6000,
                navText: [,],
			});
		}
		if($('.slider_partners .owl-carousel').length) {
			$('.slider_partners .owl-carousel').owlCarousel({
				loop:true,
				margin:0,
				nav:true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                navText: [,],
				responsive:{
					0:{
						items:2
					},
					600:{
						items:3
					},
					1000:{
						items:6
					}
				}
			});
		}
		if($('.o_slider').length) {
			$('.o_slider').owlCarousel({
				loop:true,
				margin:30,
				nav:true,
                dots: true,
                navText: [,],
				responsive:{
                    
					0:{
						items:1
					},
                    380:{
						items:2
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			});
		}
		
	},
    main: function() {
        $('select').styler();
        
        
        $('.upcoming_events > a').on('click',function(e){
            e.preventDefault();
            $('.upcoming_events > a').removeClass('active');
            $(this).addClass('active');s
        });
        
        
        $('.city_dd').on('click',function(e){
            e.preventDefault();
            
                $(this).next().stop().slideToggle(100).toggleClass('open');
            
        });
        $('.city_dd_block a').on('click',function(e){
            e.preventDefault();
            $(this).parent().stop().slideToggle(100).toggleClass('open').prev().find('span').html($(this).html());
            
        });
    },
};

$(function() {
	Common.init();
});