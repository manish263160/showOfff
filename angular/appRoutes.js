app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
  
  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/video");
    
    $stateProvider
      .state('video', {
        url: "/video",
        views: {
          content: {
            templateUrl: "htmls/video.html",
            controller: 'videoController'
          },
        },
      })
  
    
  
      .state('aboutus', {
        url: "/aboutus",
        views: {
          content: {
            templateUrl: "htmls/about.html",
            controller: 'aboutusController',
          },
        },
      })
       .state('stories', {
        url: "/stories",
        views: {
          content: {
            templateUrl: "htmls/stories.html",
            controller: 'storiesController',
          },
        },
      })
     /* .state('faq', {
        url: "/faq",
        views: {
          header: header,
          content: {
            templateUrl: "app/partials/faq.html",
            // controller: 'becomepartner',
          },
          footer: footer
        },
      })
      .state('privacy', {
        url: "/privacy",
        views: {
          header: header,
          content: {
            templateUrl: "app/partials/privacy.html",
            // controller: 'becomepartner',
          },
          footer: footer
        },
      })
      */
  });