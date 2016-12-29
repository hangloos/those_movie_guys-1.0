(function () {
    'use strict'

    angular
      .module('those-movie-guys', ['templates', 'Devise', 'ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('createReview', {
            url: '/review/create',
            templateUrl: 'review/form.html',
            controller: 'ReviewController as vm',
          })
        // $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = 
        // $('meta[name=csrf-token]').attr('content');
      })

  }())