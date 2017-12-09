var app = angular.module('app',['UIConfig' , 'ui.router', 'uiRouterStyles','720kb.socialshare',
'ngResource', 'infinite-scroll', 'ngYoutubeEmbed' , 'anguvideo' , 'updateMeta' , 'ngMeta'
]);


app.config(function ($provide ,ngMetaProvider) {
    
      $provide.decorator('$exceptionHandler', function ($delegate) {
    
        return function (exception, cause) {
          $delegate(exception, cause);
    
         console.log('There is something wrong, please try again.');
        };
      });
    })
    .run(['ngMeta', function(ngMeta) { 
      ngMeta.init();
    }]);
    
    app.config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    });