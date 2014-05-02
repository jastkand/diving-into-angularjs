var app = angular.module('SimpleApp', [])
app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.staff = [
    { name: 'Hubot', position: 'Github staffy' },
    { name: 'Mary Poppins', position: 'Angular staffy' }
  ];

  $scope.addMember = function () {
    $scope.staff.push({
      name: $scope.name,
      position: $scope.position
    })
  }

  $scope.removeMember = function (member) {
    $scope.staff.splice($scope.staff.indexOf(member), 1)
  }
}]);
