/**
 * Created by Mikki on 6.2.2017.
 */
start
    .controller("resultCtrl", function ($scope, $http, $uibModal, appService, $filter) {
        $scope.data = {};

        //Get all the orders
        $http({
            method: "GET",
            url: /*Deleted URL*/"",
            headers: {
                "Content-Type": "application/xxx-form-encoded; charset=utf-8"
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.state < 0) {
                alert("Jotain meni vikaan");
            }
            else {
                // Success
                $scope.orders = response.data.data;
                // Get all the cottages
                $http({
                    method: "GET",
                    url: /*Deleted URL*/ "",
                    headers: {
                        "Content-Type": "application/xxx-form-encoded; charset=utf-8"
                    }
                }).then(function (response) {
                    console.log(response);
                    if (response.data.state < 0) {
                        alert("jotain meni vikaan");
                    }
                    else {
                        // Success

                        // Filter all the cottages that are not available at the time.
                        $scope.dateArray = getDates(appService.getStartDate(), appService.getEndDate());
                        $scope.cottages = response.data.data.filter(function (cottage) {
                            for (var i = 0; i < $scope.orders.length; i++) {
                                if (cottage.id === $scope.orders[i].cottageId) {
                                    var orderDateArray = getDates(new Date($scope.orders[i].startDate), new Date($scope.orders[i].endDate));
                                    for (var j = 0; j < orderDateArray.length; j++) {
                                        for (var k = 0; k < $scope.dateArray.length; k++) {
                                            if ($filter('date')(orderDateArray[j]) === $filter('date')($scope.dateArray[k])) {
                                                return false;
                                            }
                                        }
                                    }
                                }
                            }
                            return true;
                        });
                    }
                }, function (err) {
                    $state.go("tab.home");

                    alert("Virhe havaittu haettaessa mökkejä");
                    console.log(err);
                });
            }
        }, function (err) {
            alert("Virhe havaittu haettaessa tilaustietoja");
            console.log(err);
        });


        //When ordering a cottage
        $scope.order = function (cottage) {
            if ($scope.$parent.logged) {
                appService.setCottage(cottage);
                $uibModal.open({
                    templateUrl: "modal.html",
                    controller: "placeOrderCtrl"
                })
            }
            else {
                alert("Et ole kirjautunut sisään.\nOle hyvä ja kirjaudu sisään");
            }

        };

        //
        function getDates(startDate, stopDate) {
            var dateArray = [];
            var currentDate = startDate;
            while (currentDate <= stopDate) {
                dateArray.push(new Date(currentDate));
                currentDate = currentDate.addDays(1);
            }
            return dateArray;
        }


    })
;