(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('HomeController', HomeController)


      function HomeController(Auth){
        var vm = this 

        var credentials = {
        email: "ericloos00@gmail.com",
        password: "indiana10"
      };

      var config = {
        headers: {
          'X-HTTP-Method-Override':
          'POST'
        }
      };

        Auth.login(credentials, config)
          .then(function(user){
            console.log(user)
          }, function(error){
            console.log(error)
          })

        Auth.currentUser()
          .then(function(user){

          console.log(user);
        }, function(error){
          console.log(error)
        });
      }

  }())