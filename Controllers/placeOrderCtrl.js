/**
 * Created by Mikki on 6.2.2017.
 */

start
.controller("placeOrderCtrl",function($scope, appService, $uibModalInstance, $http){

    $scope.data = {};
    $scope.data.cottage = appService.getCottage();
    $scope.data.startDate = appService.getStartDate();
    $scope.data.endDate = appService.getEndDate();

    $scope.data.user = appService.getUser();


    $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    };

    $scope.order = function(){
        $http({
            method: "GET",
            url: /*Deleted URL*/ $scope.data.user.id + "&cottageId=" + $scope.data.cottage.id +
            "&startDate=" + $scope.data.startDate + "&endDate=" + $scope.data.endDate,
            headers: {
                "Content-Type": "application/xxx-form-encoded; charset=utf-8"
            }
        }).then(function (response) {
            console.log(response);
            alert("Onnistui!");
            $uibModalInstance.dismiss('cancel');

        }, function (err) {
            console.log(err);
            alert("Jokin meni vikaan!");
            $uibModalInstance.dismiss('cancel');
        });
    }
})