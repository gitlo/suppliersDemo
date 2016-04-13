'use strict';

describe('Tech test controllers', function() {

  beforeEach(module('eeApp'));
  
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  
  describe('mainCtrl', function(){
      
      var scope, ctrl, $httpBackend;
      var data = {suppliers:[{name: 'Old Co Ltd'}]};

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/suppliers.json').
          respond(data);

      scope = $rootScope.$new();
      ctrl = $controller('mainCtrl', {$scope: scope});
    }));
    
     it('should have empty default data', function(){
         expect(scope.suppliers).toEqualData([]);
     });
     
     it('should initialise suppliers with data', function(){
         $httpBackend.flush();
         expect(scope.suppliers).toEqualData(data.suppliers);
     });
  });

});