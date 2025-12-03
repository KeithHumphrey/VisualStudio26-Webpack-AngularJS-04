angular.module('mainApp')
    .controller('HomeController', function ($scope, $mdDialog) {
        $scope.message = "This is the Home page.";

        $scope.showDialog = function () {

            $mdDialog.show(
                $mdDialog.alert()
                    .title('Alert')
                    .textContent('ℹ️ Information')
                    .ok('Close')
            );
        };
    });