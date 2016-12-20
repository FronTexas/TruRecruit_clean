app.controller('SearchPageCtrl', ['$scope', 'filterFilter','eventService', function ($scope, filterFilter,eventService) {
	console.log(eventService.getEvents())
	$scope.items = [
	{
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships."
	}
	];
 
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};
 
	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};




 
	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 8; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
 	
	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);