(function() {
    'use strict';

    var app = angular.module('perpule_client_dashboard', ['ui.bootstrap']);

    app.controller('TableController', ['$scope', '$http', '$log',

        function($scope, $http, $log, filterFilter) {

            $scope.shop={};
            
            angular.element(document).ready(function () {
            
                var url= window.location.href;

                console.log(url);
                var orderId =url.split("?").pop();
                
                getOrderDetails(orderId);
                
            });

           
            $scope.orderId;
            $scope.customerdId;
            $scope.shopId;
            $scope.shopName;
            $scope.orderStatus;
            $scope.totalOrderAmount;
            $scope.lastUpdateTime;
            $scope.noOfItems;

            function getOrderDetails(orderId) {

                $http.get("http://29.productquery2014.appspot.com/resources/v1/orderreceipt?order="+orderId).then(
                    function(result)
                     { 
                     
                        $scope.qdata = result.data;
                        console.log($scope.qdata);

                        $scope.orderId=$scope.qdata.orderId;
                        $scope.customerId=$scope.qdata.customerId;
                        $scope.shopId=$scope.qdata.shop.shopId;
                        $scope.shopName=$scope.qdata.shop.shopName;
                        $scope.orderStatus=$scope.qdata.orderStatus;
                        $scope.totalOrderAmount=$scope.qdata.totalOrderAmount;
                        $scope.lastUpdateTime=$scope.qdata.lastUpdateTime;
                        $scope.noOfItems=$scope.qdata.barcodeDetails.length;

                        $scope.filteredData=$scope.qdata.barcodeDetails;
                      
                     }

                );

               


            }

            
        }


    ]);

})();
