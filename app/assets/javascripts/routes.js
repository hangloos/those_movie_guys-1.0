(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'ReviewController as vm'
          })

          .state('login', {
            url: '/login',
            templateUrl: 'home/login.html',
            controller: 'HomeController as vm'
          })

          .state('register', {
            url: '/register',
            templateUrl: 'home/register.html',
            controller: 'HomeController as vm'
          })

          .state('about', {
            url: '/about',
            templateUrl: 'home/about.html',
            controller: 'HomeController as vm'
          })

          .state('createReview', {
            url: '/reviews/create',
            templateUrl: 'review/new.html',
            controller: 'ReviewController as vm',
          })

          $urlRouterProvider.otherwise('/')

      })

  }())