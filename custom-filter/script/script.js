
var app = angular
            .module("myModule", [])
            .controller("myController", function($scope) {
                
                var employees = [
                    { name: "Ber", gender: 1, salary: 55000 },
                    { name: "An", gender: 2, salary: 45000 },
                    { name: "Coock", gender: 1, salary: 65000 },
                    { name: "Miss", gender: 2, salary: 35000 },
                    { name: "Mr", gender: 3, salary: 75000 },
                    { name: "Tod", gender: 1, salary: 38000 },
                    { name: "Zoe", gender: 3, salary: 21000 }
                    ];
                    
                    $scope.employees = employees;
                   
            });