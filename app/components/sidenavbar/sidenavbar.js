/**
 * Navigation bar directive.
 *
 * User: luke
 * Date: 7/04/13
 * Time: 11:01 AM
 */
define(['components/sidenavbar/sidenavbar', 'css!components/sidenavbar/sidenavbar'],
    function () {
        return function ($location, $dialog) {
            return {
                restrict:'A',
                templateUrl:'/components/sidenavbar/sidenavbar.html',
                replace:true,
                controller:function ($scope){},
                link: function(scope, element, attrs){
                    scope.$on('$routeChangeStart', function(){
                        $(element)
                            .find('.btn-navbar:visible')
                            .click();
                    });
                }
            };
        }

    }
);

