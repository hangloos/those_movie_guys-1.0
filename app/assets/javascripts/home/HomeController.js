(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('HomeController', HomeController)


      function HomeController(Auth, $scope){
        var vm = this
        vm.logout = Auth.logout
        vm.login = login 

        var credentials = {
        email: "ericloos00@gmail.com",
        password: "indiana10"
      }

        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        }
        function login(){
        Auth.login(credentials, config)
          .then(function(user){
            vm.user = user
          }, function(error){
            console.log(error)
          })
        }

        Auth.currentUser()
          .then(function(user){

          vm.user = user
        }, function(error){
          console.log(error)
        })

        $scope.$on('devise:logout', function(event,user){
          vm.user = {}
        })

        




      }

  }())