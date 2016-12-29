(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('ReviewController', ReviewController)

       function ReviewController(ReviewsFactory) {

        var vm = this;
        vm.reviews = {}

        vm.getReview = getReview;
        vm.createReview = createReview;
        vm.updateReview = updateReview;
        vm.deleteReview = deleteReview;

        activate();

        function activate() {
          ReviewsFactory.getReviews();
        }

        function getReviews() {
          return ReviewsFactory.getReviews()
                        .then(setReviews)

        }

        function getReview() {
          
        }

        function createReview() {
          return ReviewsFactory.createReview(vm.newReview)
                          .then(getReviews)
        }

        function updateReview() {
          
        }

        function deleteReview() {
          
        }

        function setReviews(data)  {
          return vm.reviews = data
        }

        vm.review = {}

        // function getInformation() {
        //   $http.get('http://www.omdbapi.com/?tomatoes=true&i=' + vm.review.imdb_id)
        //   .success(function (response){
        //     data = response

        //   })
        // }
        


        }












  }())