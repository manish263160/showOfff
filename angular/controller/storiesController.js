app
.controller("storiesController",
function ($scope, $http, $window, $rootScope, $timeout, Service ,$interval) {
  
      $scope.videos = [];
      $scope.allvideoCategoryName = [];
      $scope.getAllVidsForUI =[];
      $scope.activeCat;
      $scope.isSearch =false;
      $scope.isLoading =false;
      $scope.searcheVideoData =[];
      $scope.activeCat = 'all';
      /* all category name from DB */
      Service.rootApi.Categrylist({ token: 'image' }).$promise.then(function (response) {
        // console.log("Categrylist==",JSON.stringify(response) );
        if (response) {
          $scope.allvideoCategoryName = response;
        }
      })
  
  
      /* all videos from DB without category*/
      Service.rootApi.allCategoryWiseImageForUI().$promise.then(function (response) {
        if (response.length) {
          $scope.getAllVidsForUI = response;
          $scope.videos = $scope.getAllVidsForUI.slice(0,20);
          console.log("$scope.image===" + $scope.videos.length);   
        }
      })
  
      $scope.loadData = function () {
        var data = $scope.videos;
        console.log("loadtada data ----",data);
        if (data) {
          var last = $scope.videos.length;
          console.log("last===",last);
          $scope.videos = $scope.videos.concat($scope.getAllVidsForUI.slice(last, last + 20));
        }
        console.log("$scope.ia=mages===",$scope.videos.length);
      }
  
      
       $scope.goTocategory = function(item){
          $scope.videos = [];
          $scope.SearchResults = false;
          $scope.nothingFound = false;
          $scope.fromSearch  =false;
          
         /* these codes for all video get from database by categry. */
         var param ={};
         if(item){
          console.log("cateName====",item.name);
          $scope.activeCat = item.id;
          param = {categoryOrSeriesName : item.name };
         }else{
          $scope.activeCat = 'all';
          param = {};
         }
        Service.rootApi.allCategoryWiseImageForUI(param).$promise.then(function (response) {
          if (response.length > 0) {
            $scope.getAllVidsForUI = response;
            
            $scope.videos = $scope.getAllVidsForUI.slice(0,20);
            console.log("$scope.videos===" + $scope.videos.length);   
          }
          else{
            $scope.videos = [];
          }
        })
  
       }
    
      $scope.getSearchData = function (searchtxt) {
        console.log("searchtxt===", searchtxt);
        if (searchtxt) {
          $scope.searchResultText = searchtxt;
          var param = { text: searchtxt }
          Service.rootApi.searchImage(param).$promise.then(function (response) {
            if (response.length > 0) {
              
              $scope.searcheVideoData = response;
            }else{
              $scope.searcheVideoData = [];
            }
            console.log("response searcheVideoData===", response);
          });
        }
      }
  
      $scope.getSearchClick =function(searchtxt){
        $scope.activeCat = undefined;
        if (searchtxt) {
          $scope.searchResultText = searchtxt;
          var param = { text: searchtxt }
          Service.rootApi.searchImage(param).$promise.then(function (response) {
            console.log("response search===", response.length);
            if (response.length > 0) {
              $scope.videos =[];
                $scope.getAllVidsForUI = response;              
                $scope.videos = $scope.getAllVidsForUI.slice(0,20);
                $scope.SearchResults = true;
            }else{
              $scope.videos =[];
              $scope.SearchResults = true;
              $scope.nothingFound = true;
            }
          });
        }
      }
  
       $scope.searchedDropDownDataOnClick = function(videoItem){
        console.log("videoItem===",videoItem);
       
        $scope.videos =[]
        $scope.SearchResults = false;
        $scope.nothingFound = false;
        $scope.activeCat = undefined;
        $scope.videos.push(videoItem);
        $scope.fromSearch =true;
       }
  
       var promise;
       // starts the interval
       $scope.start = function() {
         // stops any running interval to avoid two intervals running at the same time
         $scope.stop(); 
         
         // store the interval promise
         promise = $interval(function () {
           console.log("interval call",$scope.videos.length);
          if($scope.videos.length > 0 ){
            $scope.isLoading =false;
          }else{
            $scope.isLoading =true;
          }
      }, 500);
       };
     
       $scope.stop = function() {
         $interval.cancel(promise);
       };
        // starting the interval by default
        $scope.start();
     
       $scope.$on('$destroy', function() {
         $scope.stop();
       });
       /* ----------------------------------------------Common jquery start for existing UI ------ */
  
       $scope.commonJquery =function(){
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
          
          
        
          // Share Toggle
          $('.share_link, .share_box').click(function(event) {
            $(this).next().slideDown();
        
          // hide	
          $('html').one('click',function() {
            $('.share_box').slideUp();
          });
            event.stopPropagation();
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
      }
  
      $scope.commonJquery();
  
    });