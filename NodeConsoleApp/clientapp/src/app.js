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

// 👇 Auto‑import all controllers in ./controllers
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('./controllers', false, /\.js$/));
