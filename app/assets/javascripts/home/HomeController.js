(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('HomeController', HomeController)

      function HomeController(){
        var vm = this 

        vm.name = "testing name"
      }

  }())