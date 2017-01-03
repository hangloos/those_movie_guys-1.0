
    function ReviewsFactory($http)  {

      return {
        getReviews: getReviews,
        getReview: getReview,
        createReview: createReview,
        updateReview: updateReview,
        deleteReview: deleteReview,
        getInformation: getInformation
      }

      function getReviews() {
        return $http.get('/reviews')
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
          console.log(req)
          return $http(req)
                    .catch(handleError)
      }

      function getInformation(id) {
         return $http.get('http://www.omdbapi.com/?tomatoes=true&i=' + id)
                    .then(handleResponse)
                    .catch(handleError)
        }


      function updateReview() {

      }

      function deleteReview() {

      }

      function handleResponse(response) {
        console.log(response)
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

    }


    angular
      .module('those-movie-guys')
      .factory('ReviewsFactory', ReviewsFactory)