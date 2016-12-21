app.controller('LandingController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("In Landing.js");
    $scope.goToState = function(state){
        console.log("Clicking Company or student!!");
        console.log("state = " + state);
        $state.go(state);
    };
}]);