$(document).ready(function() {
				$(".slideInner").slide({
					slideContainer: $('.slideInner a'),
					effect: 'easeOutCirc',
					autoRunTime: 5000,
					slideSpeed: 1000,
                    nav: true,
					autoRun: true,
					prevBtn: $('a.prev'),
					nextBtn: $('a.next'),
				});
    
                var scrollLink = $('.scroll');
    
                scrollLink.click(function(e){
                    e.preventDefault();
                    $('body,html').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 1000)
                })
                $('body').scrollspy({ target: '#navbarSupportedContent' })
    
                
			});
$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.app'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
            var typed2 = new Typed('#typed2', {
                strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
                typeSpeed: 0,
                backSpeed: 0,
                fadeOut: true,
                loop: true
              });

        });



$('.Testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    prevArrow:'.slidPrv',
    nextArrow:'.slidNext',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$navOffset=$('#menu').offset().top;
    // navOffset ends 
        $top_offset=550;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },500);
        });
        
        
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#menu").addClass('navfixed');
            }else{
                $("#menu").removeClass('navfixed');
            }
        // navOffset ends 
            
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
            
            
        });


    $navOffset=$('#banner').offset().bottom;
        $bottom_offset=550;
        $('.bottom_to').click(function(){
            $('html,body').animate({
                scrollBottom:200
            },500);
        });
        
        if($scrolling > $bottom_offset){
                $('.bottom_to').fadeIn();
            }else{
                $('.bottom_to').fadeOut();
            }
            

//    $(function)({
//        $(".type").typed({
//                    strings: [
//                        "Web Designer.",
//                        "Web Developer.",
//                        "Graphics Design.",
//                        "Photographar."
//                    ]
//                })
//    })
