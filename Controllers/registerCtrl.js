/**
 * Created by Mikki on 6.2.2017.
 */

start

    .controller("registerCtrl", function ($scope, $http, $state, appService) {

        $scope.data = {};

        $scope.register = function () {

            $http({
                method: "GET",
                url: /*Deleted URL*/ + $scope.data.username + "&password=" + $scope.data.password,
                headers: {
                    "Content-Type": "application/xxx-form-encoded; charset=utf-8"
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.state < 0) {
                    alert("Käyttäjänimi tai salasana väärin");
                }
                else {
                    $scope.$parent.logged = true;

                    $scope.$parent.user.username = response.data.data[0].name;
                    $scope.$parent.user.userID = response.data.data[0].id;

                    appService.setUser(response.data.data[0]);


                    if ($state.current.name === "tab.register") {
                        $state.go("tab.home");
                    }
                    else {
                        $state.go($state.current.name);
                    }
                }

            }, function (err) {
                console.log(err);
            });

        }

    })

;