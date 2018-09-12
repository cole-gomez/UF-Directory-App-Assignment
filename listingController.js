angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		
		Listings.push({	'code':$scope.code,
						'name':$scope.name,
						'coordinates': { 
							'latitude': $scope.latitude,
							'longitude':$scope.longitude},
						'address':$scope.address});
					   
		$scope.code = '';
		$scope.name = '';
		$scope.latitude = '';
		$scope.longitude = '';
		$scope.address = '';	
	
	};
	
    $scope.deleteListing = function(code) {
	
	var pos;
	for(var i = 0 ; Listings.length ; i++){
		
		if(Listings[i].code == code){
			pos = i;
			break;
		}
	}
		Listings.splice(pos,1);		
	};
    
	$scope.showDetails = function(pos) {
		
		$scope.detailedInfo = pos;
		
	};
	
	
  }
]);