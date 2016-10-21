
var app = angular
            .module("myModule", [])
            .controller("myController", function($scope) {
                var employees = [
                    { name: "Ber", gender: "Male", salary: 55000, city: "London" },
                    { name: "An", gender: "Male", salary: 45000, city: "NY" },
                    { name: "Coock", gender: "Female", salary: 65000, city: "London" },
                    { name: "Miss", gender: "Male", salary: 35000, city: "NY" },
                    { name: "Mr", gender: "Female", salary: 75000, city: "Miami" },
                    { name: "Tod", gender: "Male", salary: 38000, city: "Santiago" },
                    { name: "Zoe", gender: "Female", salary: 21000, city: "Miami" }
                    ];
                    
                    $scope.employees = employees;
                   
            });