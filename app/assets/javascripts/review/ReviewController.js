(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('ReviewController', ReviewController)

      var data;
       function ReviewController(review) {

        var vm = this;

        vm.review = {}

        function getInformation() {
          $http.get('http://www.omdbapi.com/?tomatoes=true&i=' + vm.review.imdb_id)
          .success(function (response){
            data = response

            //Im able to get the right movie to come up based on the imdb id
          })
        }
        


        }












  }())