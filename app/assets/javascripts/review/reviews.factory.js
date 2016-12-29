(function () {
    'use strict'

    function ReviewsFactory($http)  {

      return {
        getReviews: getReviews,
        getReview: getReview,
        createReview: createReview,
        updateReview: updateReview,
        deleteReview: deleteReview
      }

      function getReviews() {
        $http.get('/reviews')
              .then(handleResponse)
              .catch(handleError)

      }

      function getReview()  {

      }

      function createReview(review) {
          var req = {
            method: 'POST',
            url: '/reviews',
            headers: {
              'Content-Type': 'application/json' 
            },
            data: {
              review: review
            }
          };

          return $http(req)
                    .catch(handleError)
      }

      function updateReview() {

      }

      function deleteReview() {

      }

      function handleResponse(response) {
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

    }


    angular
      .module('those-movie-guys')
      .factory('ReviewsFactory', ReviewsFactory)

  }())