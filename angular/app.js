var app = angular.module('app',['UIConfig' , 'ui.router', 'uiRouterStyles','720kb.socialshare',
'ngResource', 'infinite-scroll', 'ngYoutubeEmbed' , 'anguvideo' , 'updateMeta'

]);


app.config(function ($provide) {
    
      $provide.decorator('$exceptionHandler', function ($delegate) {
    
        return function (exception, cause) {
          $delegate(exception, cause);
    
         console.log('There is something wrong, please try again.');
        };
      });
    });
    
    app.config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    });