'use strict';

// signup controller
app.controller('RegisterFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.register = function() {
      $state.go('app.dashboard');
    };
  }])
 ;