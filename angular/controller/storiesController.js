app
.controller("storiesController",
function ($scope, $http, $window, $rootScope, $timeout, Service) {

  $scope.images = [];
  $scope.allImageCategoryName = [];
  
  $scope.activeCat;
  /* all category name from DB */
  Service.rootApi.videoCategrylist({ token: 'image' }).$promise.then(function (response) {
    // console.log("videoCategrylist==",JSON.stringify(response) );
    if (response) {
      $scope.allImageCategoryName = response;
    }
  })


  

  $scope.loadData = function () {
    /* var data = $scope.images;
    if (data) {
      var last = $scope.videos.length;
      console.log("last===",last);
      $scope.videos = $scope.videos.concat($scope.getAllVidsForUI.slice(last, last + 20));
    }
    console.log("$scope.videos===",$scope.videos.length); */
  }

  
   $scope.goTocategory = function(item){
     /* these codes for all video get from database by categry. */
     /* var param ="";
     if(item){
      console.log("cateName====",item.name);
      $scope.activeCat = item.id;
      param = {categoryOrSeriesName : item.name };
     }else{
      $scope.activeCat = 'all';
      param = {};
     }
    Service.rootApi.getAllVidsForUI(param).$promise.then(function (response) {
      if (response.length) {
        $scope.getAllVidsForUI = response;
        
        $scope.videos = $scope.getAllVidsForUI.slice(0,20);
        console.log("$scope.videos===" + $scope.videos.length);   
      }
      else{
        $scope.videos = [];
      }
    }) */

   }


});