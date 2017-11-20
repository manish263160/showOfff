// JavaScript Document

$(document).ready(function(e) {
		
	// Menu Drawer
	$('.icon-menu').on('click', function(event){
		$('.menu_drawer').fadeIn();
	});
	
	$('.menu_drawer .icon-cross').on('click', function(event){
		$(this).parent().fadeOut();
	});
	
	
	// Mobile Category Drawer
	$('.m_category').on('click', function(event){
		$('.category_drawer').fadeIn();
	});
	
	$('.category_drawer .icon-cross2').on('click', function(event){
		$(this).parent().fadeOut();
	});
	
	
	// Search Restuls
	$( "#search" ).focus(function() {
		$('.search_results').fadeIn();
	});
	
	$( "#search" ).blur(function() {
		$('.search_results').fadeOut();
	});
	
	
	// Mobile Search Restuls
	$( ".icon-search2" ).on('click', function(event){
		$('.m_search').fadeIn();
	});
	
	$( ".m_search .icon-cross" ).on('click', function(event){
		$('.m_search').fadeOut();
	});
	
	$( "#m_search" ).focus(function() {
		$('.m_search_results').fadeIn();
	});
	
	$( "#m_search" ).blur(function() {
		$('.m_search_results').fadeOut();
	});
	
	
	$.stickysidebarscroll("#leftsidebar2",{offset: {top: 60, bottom:80}});
	
	
	
	// Sticky bar
/*	$(function () {
   
  	var msie6 = $.browser == 'msie' && $.browser.version < 7;
   
  	if (!msie6 && $('.leftsidebar').offset()!=null) {
    var top = $('.leftsidebar').offset().top - parseFloat($('.leftsidebar').css('margin-top').replace(/auto/, 0));
    var height = $('.leftsidebar').height();
    var winHeight = $(window).height(); 
    var footerTop = $('#footer').offset().top - parseFloat($('#footer').css('margin-top').replace(/auto/, 0));
    var gap = 7;
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
       
      // whether that's below the form
      if (y+winHeight >= top+ height+gap && y+winHeight<=footerTop) {
        // if so, ad the fixed class
        $('.leftsidebar').addClass('leftsidebarfixed').css('top',winHeight-height-gap +'px');
      } 
      else if (y+winHeight>footerTop) {
        // if so, ad the fixed class
       $('.leftsidebar').addClass('leftsidebarfixed').css('top',footerTop-height-y-gap+'px');
      } 
      else    
      {
        // otherwise remove it
        $('.leftsidebar').removeClass('leftsidebarfixed').css('bottom','200px');
      }
    });
  }  
}); */
	
	
	// Set height of banner
	function setDivHeight() {
		//height of HTML document
		var documentHeight = $(document).height();
		//height of browser viewport
		var viewportHeight = $(window).height();
		$('.category_drawer').height(viewportHeight); // OR viewportHeight - 180 as appropriate
		$('.menu_drawer').height(viewportHeight); // OR viewportHeight - 180 as appropriate
	}
	// = onload and onresize
	$(window).on("load resize", setDivHeight);

	

});