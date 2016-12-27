(function () {
    'use strict'

    angular
      .module('those-movie-guys', ['templates', 'Devise', 'ui.router'])
      .config(function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = 
        $('meta[name=csrf-token]').attr('content');
      })

  }())