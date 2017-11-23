app
.controller("aboutusController",
function ($scope, $http, $window, $rootScope, $timeout, Service ,$interval) {

    /* jquery code */

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

});