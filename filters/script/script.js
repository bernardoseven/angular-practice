
var app = angular
            .module("myModule", [])
            .controller("myController", function($scope) {
                var employees = [
                    { name: "Ber", dateOfBirth: new Date("August 26, 1986"), gender: "Male", salary: 55000 },
                    { name: "An", dateOfBirth: new Date("November 16, 1976"), gender: "Male", salary: 45000 },
                    { name: "Coock", dateOfBirth: new Date("February 12, 1986"), gender: "Female", salary: 65000 },
                    { name: "Miss", dateOfBirth: new Date("January 23, 1986"), gender: "Male", salary: 35000 },
                    { name: "Mr", dateOfBirth: new Date("November 06, 1986"), gender: "Female", salary: 75000 }
                    ];
                    
                    $scope.employees = employees;
                    
                    $scope.rowLimit = 3;
            });