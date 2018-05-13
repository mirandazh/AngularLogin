/**
 * Application Module for the Login Demo Site
 *
 * User: luke
 * Date: 7/04/13
 * Time: 10:38 AM
 */
define(['components/home/home', 'components/navbar/navbar', 'components/sidenavbar/sidenavbar', 'components/login/loginservice', 'lib/angular.bootstrap.min'],
    function (HomeController, NavBarDirective, SideNavBarDirective, LoginService) {

        return angular.module("login", ['ui.bootstrap'])
                      .config(function ($routeProvider) {
                          $routeProvider.
                              when('/', {controller:HomeController, templateUrl:'/components/home/home.html'}).
                              when('/change', {templateUrl:'/components/change/change.html'}).
                              when('/history', {templateUrl:'/components/history/history.html'}).
                              when('/about', {templateUrl:'/components/about/about.html'}).
                              otherwise({redirectTo:'/'});
                      })
                      .directive('fuNavBar', NavBarDirective)
                      .directive('sideNavBar', SideNavBarDirective)
                      .service('LoginService', LoginService);
    }
);
