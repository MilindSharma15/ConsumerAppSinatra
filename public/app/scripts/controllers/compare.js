'use strict';

angular.module('publicApp')
  .controller('CompareCtrl', function ($scope, Data) {
    
  	var parameter_obj = '?numberofresults=5000&sort=desc&';

    Data.get_json('EMM/v1/ios/', parameter_obj).success(function(api_data){
    	$scope.ios = api_data.AppResponse.AppDetails;
    	console.log($scope.ios.length)
    	Data.get_json('EMM/v1/android/', parameter_obj).success(function(api_data){
    		$scope.android = api_data.AppResponse.AppDetails;
    		console.log($scope.android.length)
    	});
    
    });
  });