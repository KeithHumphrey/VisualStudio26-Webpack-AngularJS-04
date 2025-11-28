import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-route';

// 1. Create the module
angular.module('mainApp', [
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/customers', {
                templateUrl: 'views/customers.html',
                controller: 'CustomersController'
            })
            .when('/reports', {
                templateUrl: 'views/reports.html',
                controller: 'ReportsController'
            })
            .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsController'
            })
            .otherwise({ redirectTo: '/home' });
    })
    .controller('MainController', function ($scope, $rootScope, $mdSidenav) {
        $scope.menuItems = [
            { name: 'Home', icon: 'bi-house-fill', route: 'home' },
            { name: 'Customers', icon: 'bi-person-fill', route: 'customers' },
            { name: 'Reports', icon: 'bi-file-earmark-text-fill', route: 'reports' },
            { name: 'Settings', icon: 'bi-wrench', route: 'settings' }
        ];

        $scope.toggleMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.closeMenu = function () {
            $mdSidenav('left').close();
        };

        // 👇 Auto-close sidenav on route change
        $rootScope.$on('$routeChangeSuccess', function () {
            $mdSidenav('left').close();
        });
    })

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
    })
    .controller('CustomersController', function ($scope) {
        $scope.message = "This is the Customers page.";
    })
    .controller('ReportsController', function ($scope) {
        $scope.message = "This is the Reports page.";
    })
    .controller('SettingsController', function ($scope) {
        $scope.message = "This is the Settings page.";
    });