app
.controller("specificVideoController",
function ($scope,$stateParams, $http, $window, $rootScope, $timeout, Service ,$interval, UIConfig , ngMeta) {

  var appDomain= UIConfig.app_domain;
  $scope.appDomain =appDomain;
  var vidsId = $stateParams.id;
  //   console.log("vidsId====",vidsId);
  $scope.videos = [];
  $scope.allvideoCategoryName = [];
  $scope.getAllVidsForUI =[];
  $scope.activeCat;
  $scope.isSearch =false;
  $scope.isLoading =false;
  $scope.searcheVideoData =[];
  $scope.activeCat = 'all';
  /* all category name from DB */
  Service.rootApi.Categrylist({ token: 'video' }).$promise.then(function (response) {
    // console.log("Categrylist==",JSON.stringify(response) );
    if (response) {
      $scope.allvideoCategoryName = response;
    }
  })

/* all videos from DB without category*/
Service.rootApi.allCategorywiseVidsForUI().$promise.then(function (response) {
  if (response.length) {
    $scope.getAllVidsForSearch = response;
    // console.log("$scope.videos===" + $scope.videos.length);   
  }
})
  /* all videos from DB without category*/
  Service.rootApi.getSpecificVids({id : vidsId}).$promise.then(function (response) {
      if (response.length) {
        //   console.log("=====",response)
       $scope.getAllVidsForUI = response;
      
       $scope.videos = $scope.getAllVidsForUI.slice(0,20);
      // console.log("$scope.videos===" + $scope.videos.length);   
      ngMeta.setTag('og:url', appDomain+"specificVideo/"+$scope.videos[0].id);
      ngMeta.setTag('og:type', 'website');
      ngMeta.setTag('og:title', $scope.videos[0].title);
      ngMeta.setTag('og:image', $scope.videos[0].videoThumbnail);
      ngMeta.setTag('og:description', $scope.videos[0].description);

      ngMeta.setTag('twitter:url', appDomain+"specificVideo/"+$scope.videos[0].id);
      ngMeta.setTag('twitter:title', $scope.videos[0].title);
      ngMeta.setTag('twitter:image', $scope.videos[0].videoThumbnail);
      ngMeta.setTag('twitter:description', $scope.videos[0].description);
    }
  })

  $scope.loadData = function () {
    var data = $scope.videos;
    // console.log("loadtada data ----",data);
    if (data) {
      var last = $scope.videos.length;
      // console.log("last===",last);
      $scope.videos = $scope.videos.concat($scope.getAllVidsForUI.slice(last, last + 20));
    }
    // console.log("$scope.videos===",$scope.videos.length);
  }

  
   $scope.goTocategory = function(item){
      $scope.videos = [];
      $scope.SearchResults = false;
      $scope.nothingFound = false;
      $scope.fromSearch  =false;
      
     /* these codes for all video get from database by categry. */
     var param ="";
     if(item){
      // console.log("cateName====",item.name);
      $scope.activeCat = item.id;
      param = {catId : item.id };
     }else{
      $scope.activeCat = 'all';
      param = {};
     }
    Service.rootApi.allCategorywiseVidsForUI(param).$promise.then(function (response) {
      if (response.length > 0) {
        $scope.getAllVidsForUI = response;
        
        $scope.videos = $scope.getAllVidsForUI.slice(0,20);
        // console.log("$scope.videos===" + $scope.videos.length);   
      }
      else{
        $scope.videos = [];
      }
    })
    $('.category_drawer').fadeOut();
   }

  $scope.getSearchData = function (searchtxt) {
    // console.log("searchtxt===", searchtxt);
    if (searchtxt) {
      $scope.searchResultText = searchtxt;
      var param = { data: searchtxt }
      Service.rootApi.searchVideo(param).$promise.then(function (response) {
        // console.log("response searcheVideoData===", response);
        if (response.length > 0) {
         
            $scope.searcheVideoData = response;
        }else{
          $scope.searcheVideoData = [];
        }
      });
    }
  }

  $scope.getSearchClick =function(searchtxt){
    $scope.activeCat = undefined;
    $scope.nothingFound = false;
    if (searchtxt) {
      $scope.searchResultText = searchtxt;
      var param = { data: searchtxt }
      Service.rootApi.searchVideo(param).$promise.then(function (response) {
        // console.log("response search===", response.length);
        if (response.length > 0) {
          $scope.videos =[];
            $scope.getAllVidsForUI = response;              
            $scope.videos = $scope.getAllVidsForUI.slice(0,20);
            $scope.SearchResults = true;
            $scope.searcheVideoData = [];
            $scope.searchtxt ="";
        }else{
          $scope.videos =[];
          $scope.SearchResults = true;
          $scope.nothingFound = true;
          $scope.noLoaderShow = true;
          $scope.searcheVideoData = [];
          $scope.searchtxt ="";
        }
      });
    }
  }

   $scope.searchedDropDownDataOnClick = function(videoItem){
    // console.log("videoItem===",videoItem);
   
    $scope.videos =[]
    $scope.SearchResults = false;
    $scope.nothingFound = false;
    $scope.activeCat = undefined;
    $scope.videos.push(videoItem);
    $scope.fromSearch =true;
   }

     $scope.getAllWebSeries =function(){
      $scope.videos = [];
      $scope.SearchResults = false;
      $scope.nothingFound = false;
      $scope.fromSearch  =false;
      $scope.activeCat = 'webSeries';
      Service.rootApi.getAllWebSeriesVideo().$promise.then(function (response) {
        // console.log("getAllWebSeriesVideo data===", response);
        if (response.length > 0) {
          $scope.videos =[];
            $scope.getAllVidsForUI = response;              
            $scope.videos = $scope.getAllVidsForUI.slice(0,20);
        }else{
          $scope.videos =[];
          $scope.nothingFound = true;
        }
      });
      

     }

     $scope.playVideo =function(id){
      console.log("iddddd====",id);
     }

/* ------------------------------------------------------ */
var promise;
// starts the interval
$scope.start = function() {
  // stops any running interval to avoid two intervals running at the same time
  $scope.stop(); 
  
  // store the interval promise
  promise = $interval(function () {
    // console.log("interval call",$scope.videos.length);
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

$scope.showShare = function(id , $event){
  // console.log("09099090====",id);
  $( "#share_box"+id ).slideDown();
  $event.stopPropagation();

}
$scope.htmlclick = function(){
  $('.share_box').slideUp();
}

$scope.facebookshare=function(item){
// console.log("----",item)
FB.ui({
method: 'share_open_graph',
action_type: 'og.shares',
action_properties: JSON.stringify({
object : {
  'og:url': appDomain+'specificVideo/'+item.id, // your url to share
  'og:title':  item.title ? item.title : 'Showofff: Videos, Memes, Quotes, Stories',
  'og:site_name':'showoff.tv',
  // 'og:description':item.description,
  'og:image': item.videoThumbnail,
  'og:image:width':'200',//size of image in pixel
  'og:image:height':'200'
}
})
}, function(response){
console.log("FB response is ",response);
});
}
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
      
      $('.category_drawer ul li a').on('click', function (event) {
        $('.category_drawer').fadeOut();
      });
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
      
      // Search Results Up & Down
      var li = $('.search_results li');
      var liSelected;
      $(window).keydown(function(e){
        if(e.which === 40){
          if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.next();
            if(next.length > 0){
              liSelected = next.addClass('selected');
            }else{
              liSelected = li.eq(0).addClass('selected');
            }
          }else{
            liSelected = li.eq(0).addClass('selected');
          }
        }else if(e.which === 38){
          if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if(next.length > 0){
              liSelected = next.addClass('selected');
            }else{
              liSelected = li.last().addClass('selected');
            }
          }else{
            liSelected = li.last().addClass('selected');
          }
        }
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