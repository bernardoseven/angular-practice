
var app = angular
            .module("myModule", [])
            .controller("myController", function($scope) {
                
                var employees = [
                    { name: "Ber", gender: 1, city: "Ny", salary: 55000 },
                    { name: "An", gender: 2, city: "Mia", salary: 45000 },
                    { name: "Coock", gender: 1, city: "Sant", salary: 65000 },
                    { name: "Miss", gender: 2, city: "Paris", salary: 35000 },
                    { name: "Mr", gender: 3, city: "Rome", salary: 75000 },
                    { name: "Tod", gender: 1, city: "Df", salary: 38000 },
                    { name: "Zoe", gender: 3, city: "bogota", salary: 21000 }
                    ];
                    
                    $scope.employees = employees;
                   
            });