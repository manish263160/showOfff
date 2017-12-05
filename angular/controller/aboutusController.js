app
.controller("aboutusController",
function ($scope, $http, $window, $rootScope, $timeout, Service ,$interval) {

    jQuery(document).ready(function ($) {
        
                    var jssor_1_options = {
        
                      $AutoPlay: 1,
        
                      $DragOrientation: 2,
        
                      $PlayOrientation: 2,
        
                      $ArrowNavigatorOptions: {
        
                        $Class: $JssorArrowNavigator$
                      }
                    };
        
                    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
        
                    /*responsive code begin*/
                    /*remove responsive code if you don't want the slider scales while window resizing*/
                    function ScaleSlider() {
        
                        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        
                        if (refSize) {
        
                            refSize = Math.min(refSize, 600);
        
                            jssor_1_slider.$ScaleWidth(refSize);
                        }
                        else {
        
                            window.setTimeout(ScaleSlider, 30);
                        }
                    }
        
        
                });

    // Vertical Scroll TOP
 $(function () {
    $('#head_top').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
});


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


// Scroll Top
$(window).bind('scroll', function () {
if ($(window).scrollTop() >1500) {
$('.top_head a').fadeIn(400);
    } else {
$('.top_head a').fadeOut(400);
}
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

});