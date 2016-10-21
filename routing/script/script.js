/// <reference path="angular.min.js"  />

var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeProvider) {
                    $routeProvider
                      .when("/home", {
                          templateUrl:"templates/home.html",
                          controller:"homeController"
                      })
                      .when("/courses", {
                          templateUrl:"templates/courses.html",
                          controller:"coursesController"
                      })
                      .when("/students", {
                          templateUrl:"templates/students.html",
                          controller:"studentsController"
                      })
                 })
                 .controller("homeController", function ($scope) {
                     $scope.message = "Home Page";
                 })
                 .controller("coursesController", function ($scope) {
                     $scope.courses = ["Ruby", "C#", "V.net"];
                 })
                 .controller("studentsController", function ($scope) {
                     $scope.students = "";
                 })