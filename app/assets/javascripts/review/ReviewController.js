(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('ReviewController', ReviewController)


       function ReviewController($scope, $http) {

        var vm = this;

        vm.review = {}

        vm.getInformation = function(){
          $http.get('http://www.omdbapi.com/?tomatoes=true&i=' + vm.review.imdb_id)
          .success(function (response){
            debugger

            //Im able to get the right movie to come up based on the imdb id
          })
        }
       }












  }())