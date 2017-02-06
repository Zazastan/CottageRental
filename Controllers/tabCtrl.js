/**
 * Created by Mikki on 6.2.2017.
 */

start

    .controller("tabCtrl", function ($scope, $state, $sce, $http, appService) {
        $scope.data = {};
        $scope.user = {};
        $scope.htmlPopover = $sce.trustAsHtml("<button ng-controller='tabCtrl' ng-click='logout()'>Kirjaudu ulos</button>")

        $scope.logged = false;
        $scope.searchDates = {};


        $scope.home = function () {
            $state.go("tab.home");
        };
        $scope.info = function () {
            $state.go("tab.info");
        };
        $scope.register = function () {
            $state.go("tab.register");
        };
        $scope.login = function () {

            $http({
                method: "GET",
                url: /*Deleted URL*/ $scope.data.userName + "&password=" + $scope.data.password,
                headers: {
                    "Content-Type": "application/xxx-form-encoded; charset=utf-8"
                }
            }).then(function (response) {

                if (response.data.state < 0) {
                    alert("Käyttäjänimi tai salasana väärin");
                }
                else {
                    $scope.logged = true;
                    $scope.user.username = response.data.data[0].username;
                    $scope.user.userID = response.data.data[0].id;

                    appService.setUser(response.data.data[0]);

                    if ($state.current.name === "tab.register") {
                        $state.go("tab.home");
                    }
                    else {
                        $state.go($state.current.name);
                    }
                }

            });

        };
        $scope.logout = function () {
            console.log("Logout");
            $scope.user = {};
            appService.logout();
            $scope.logged = false;
            $state.go("tab.home");
        };

    })
;