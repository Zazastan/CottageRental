/**
 * Created by Mikki on 6.2.2017.
 */

start

    .controller("homeCtrl", function ($state, $scope, appService) {
        $scope.data = {};
        $scope.data.today = new Date();


        $scope.search = function () {
            appService.setDates($scope.data.startDate, $scope.data.endDate);
            $scope.$parent.searchDates.startDate = $scope.data.startDate;
            $scope.$parent.searchDates.endDate = $scope.data.endDate;
            $state.go("tab.result");
        }


    })

;