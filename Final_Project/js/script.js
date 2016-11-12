//Fade Out mainContainer1 and fade in mainContainer2

$('#robotText1').click(function(){    
    $('#mainContainer1').fadeOut(1000, function(){
        $('#mainContainer2').fadeIn(1000);
    });
});

//Hide nav bar

(function ($) {
	$(document).ready(function(){
		$("#mainHeader").addClass('hideme');
		$(function(){
			$(window).scroll(function(){
				if($(this).scrollTop()>100){
					$("#mainHeader").removeClass('hideme');
				} else  {
					$('#mainHeader').addClass('hideme');
				}
			});
		})
	});
});

$(function(){
	$('#showHeader').hover(function(){
		$('#mainHeader').removeClass('hideme');
	});
});

$(function(){
	$('#mainHeader').hover(function(){
		$('#mainHeader').removeClass('hideme');
	}, function(){
		$('#mainHeader').addClass('hideme');
	});
});

//Nav Bar Scroll

$("#home").click(function() {
    $('html,body').animate({
        scrollTop: 0}, 'slow');
    return false;
});

$("#process").click(function() {
    $('html,body').animate({
        scrollTop: $("#processContent").offset().top},
        'slow');
    return false;
});

$("#diagrams").click(function() {
    $('html,body').animate({
        scrollTop: $("#diagramsContent").offset().top},
        'slow');
    return false;
});

$("#drawings").click(function() {
    $('html,body').animate({
        scrollTop: $("#drawingsContent").offset().top},
        'slow');
    return false;
});

//Animate elements

/*var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
*/

$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fadeIn").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});

/*

$(".rightContent").hover(function(){
	if ($('.leftContent').is(':visible'))
		$('.leftContent').fadeOut(function(){
			$('.rightContentText').fadeIn();
		});
});
*/

$(function() {
	$('.rightContent-fade').hover(function() { 
	    $('.rightContentText-fade').fadeIn();
	    $('.leftContent-fade').fadeOut();
	}, function() { 
	    $('.rightContentText-fade').fadeOut(); 
	    $('.leftContent-fade').fadeIn();
	});
	return false;
});

$(function() {
	$('.leftContent-fade').hover(function() { 
	    $('.leftContentText-fade').fadeIn();
	    $('.rightContent-fade').fadeOut();
	}, function() { 
	    $('.leftContentText-fade').fadeOut(); 
	    $('.rightContent-fade').fadeIn();
	});
	return false;
});


$(function() {
	$('.rightContentImage-fade-click').click(function() { 
	    $('.leftContentImage-fade-click').fadeIn();
	    $('.leftContentText-click').fadeOut();
	}, function() { 
	    $('.leftContentText-click').fadeOut(); 
	    $('.leftContentImage-fade-click').fadeIn();
	});
	return false;
});


//More