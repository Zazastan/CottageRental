var start = angular.module("start", ['ui.router', 'ui.bootstrap', 'ngAnimate', 'angular-loading-bar']);


//
start.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        Date.prototype.addDays = function (days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        };

        $stateProvider
            .state("tab", {
                url: "/tab",
                abstract: true,
                views: {
                    "": {
                        templateUrl: "tab.html",
                        controller: "tabCtrl"
                    }
                }
            })

            .state("tab.home", {
                url: "/home",
                views: {
                    "loput": {
                        templateUrl: "home.html",
                        controller: "homeCtrl"
                    }
                }
            })

            .state("tab.info", {
                url: "/info",
                views: {
                    "loput": {
                        templateUrl: "info.html",
                        controller: "tabCtrl"
                    }
                }
            })
            .state("tab.register", {
                url: "/register",
                views: {
                    "loput": {
                        templateUrl: "register.html",
                        controller: "registerCtrl"
                    }
                }
            })
            .state("tab.result", {
                url: "/result",
                views: {
                    "loput": {
                        templateUrl: "result.html",
                        controller: "resultCtrl"
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/tab/home');
    }])

;