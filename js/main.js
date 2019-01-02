(function ($) {
    "use strict";
 

    // side menu

    $('.ico-togglabe').click(function(){
        $('.side-bar').toggleClass('active');
         $('.ico-togglabe').toggleClass('done');
         $('.nav-logo').toggleClass('logo-show');
         $(".nav-logo").animate({transition:"0.9s"});
         $(".nav-logo a img").animate({transition:"0.9s"});
         
      });

      
      $('nav ul li').click(function(){
         $(".side-bar").removeClass("active");
         $('.ico.ico-bars').removeClass('done');
         $('.nav-logo').removeClass('logo-show');
         $(".logo-show").animate({transition:"0.9s"});



      });

      


    //   header slick slider

    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        draggable:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                dots: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
          

    //  about us slick slider

   $('.about-us-slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        draggable:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                dots: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      

// testimonial area

// vars
'use strict'
var	testim = document.getElementById("testimonial"),
		testimDots = Array.prototype.slice.call(document.getElementById("testimonial-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testimonial-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}




 // Smooth Scrolling



// Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.links li a' ).on( 'click', function(e){
	
    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr( 'href' );
    
    // Run a scroll animation to the position of the element which has the same id like the href value.
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '100' );
      
    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();
  
  });











})(jQuery);