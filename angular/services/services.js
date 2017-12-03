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
    $resource(rootURL + '/restTempletForWeb', {}, {

        getallimages :{
            url: rootURL + '/restTempletForWeb/getALlImages',
            method: 'GET',
            isArray: true,
            transformResponse: defaultTransformResponse
        },
        fetchVideoByCatSeries: {
        url: rootURL + '/restTempletForWeb/fetchVideoByCatSeries',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
        
      },

      Categrylist :{
        url: rootURL + '/restTempletForWeb/getRestAllCategory',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
          
      },

      allCategorywiseVidsForUI :{
        url: rootURL + '/restTempletForWeb/allCategorywiseVidsForUI',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse

      },
      allCategoryWiseImageForUI :{
        url: rootURL + '/restTempletForWeb/allCategoryWiseImageForUI',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse

      },
      searchVideo :{
        url: rootURL + '/restTempletForWeb/searchVideo', /* this api fetch video data */
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse

     },
      fetchBunchOfImage:{
        url: rootURL + '/restTempletForWeb/fetchBunchOfImage',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
  
      },
      getALlImages : {
        url: rootURL + '/restTempletForWeb/getALlImages',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
      },
      searchImage:{
        url: rootURL + '/restTempletForWeb/searchImage',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
      },
      getAllWebSeriesVideo :{
        url: rootURL + '/restTempletForWeb/getAllWebSeriesVideo',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
      },
      getSpecificVids:{
        url: rootURL + '/restTempletForWeb/getSpecificVids',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
      },
      getSpecificImage:{
        url: rootURL + '/restTempletForWeb/getSpecificImage',
        method: 'GET',
        isArray: true,
        transformResponse: defaultTransformResponse
      }



    }),
}

});