"use strict"

eeApp.controller("mainCtrl", function($scope, $resource, $log){
    $scope.suppliers = [];
    
   $resource('data/suppliers.json').get().$promise.then(
       function(data){
           $scope.suppliers = data.suppliers;
       },
       function(error){
           $log.log(error);
       }
   );
});

// phonecatServices.factory('Phone', ['$resource',
//   function($resource){
//     return $resource('phones/:phoneId.json', {}, {
//       query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//     });
//   }]);