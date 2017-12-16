app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
  
  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/video");
    $urlRouterProvider.otherwise('/404')
    $stateProvider

    .state('404', {
      url: "/404",
      views: {
        content: {
          templateUrl: "htmls/error.html",
          // controller: 'videoController'
        },
      },
    })
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
            data: {
              css: 'css/aboutus.css'
            }
          },
        },
      })
       .state('stories', {
        url: "/stories",
        views: {
          content: {
            templateUrl: "htmls/stories.html",
            controller: 'storiesController',
            data: {
              meta: {
                  'title' :"specific story"
                  }
            }
          },
        },
      })
      .state('specificVideo', {
        url: "/specificVideo/:id",
        views: {
          content: {
            templateUrl: "htmls/specificVideo.html",
            controller: 'specificVideoController',
            data: {
              meta: {
                  'title' :"specific videos"
                  }
            }
          },
        },
      })
      .state('specificStory', {
        url: "/specificStory/:id",
        views: {
          content: {
            templateUrl: "htmls/specificStory.html",
            controller: 'renderedStoryController',
          },
        },
      })
      .state('webseries', {
        url: "/webseries",
        views: {
          content: {
            templateUrl: "htmls/webseries/webseries.html",
            controller: 'webseriesController',
          },
        },
      })  
      .state('webSeriesData', {
        url: "/webSeriesData/:data",
        views: {
          content: {
            templateUrl: "htmls/webseries/seriesData.html",
            controller: 'seriesdataController',
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