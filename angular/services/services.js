app.factory('Service', function ($resource, $rootScope, UIConfig) {

    var rootURL = UIConfig.webservice_domain;



  function checkAndSendResponse(response, headersGetter) {
    var responseJSON = angular.fromJson(response);
    if (responseJSON && responseJSON.result) {
      return responseJSON.data;
    }
    // insert error handling??
  };

  function checkResponse(response, headersGetter) {
    var responseJSON = angular.fromJson(response);
    if (responseJSON && responseJSON.result) {
      return true;
    } else {
      return false;
    }
    // insert error handling??
  };

  function defaultTransformResponse(response) {
    return angular.fromJson(response);
  }

  
  return {
    rootApi:
    $resource(rootURL + '/restcontroller', {}, {

        getallimages :{
            url: rootURL + '/restcontroller/getALlImages',
            method: 'GET',
            isArray: true,
            transformResponse: defaultTransformResponse
        },
        fetchVideoByCatSeries: {
        url: rootURL + '/restcontroller/fetchVideoByCatSeries',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
        
      },

      videoCategrylist :{
        url: rootURL + '/restcontroller/getRestAllCategory',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
          
      },

      getAllVidsForUI :{
        url: rootURL + '/restcontroller/getAllVidsForUI',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse

      }
    })

  }

});