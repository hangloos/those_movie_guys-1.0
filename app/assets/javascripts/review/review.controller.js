(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('ReviewController', ReviewController)

       function ReviewController(ReviewsFactory) {

        var vm = this;

        vm.getReview = getReview;
        vm.updateReview = updateReview;
        vm.deleteReview = deleteReview;
        vm.createReviewInformation = createReviewInformation;

        activate();

        function activate() {
          getReviews();
        }


        function setNewReview(movie) {
          
          vm.newReview.title = movie.Title
          vm.newReview.actors = movie.Actors
          vm.newReview.awards = movie.Awards
          vm.newReview.box_office = movie.BoxOffice
          vm.newReview.director = movie.Director
          vm.newReview.language = movie.Language
          vm.newReview.picture_url = movie.Poster
          vm.newReview.production = movie.Production
          vm.newReview.rated = movie.Rated
          vm.newReview.year = movie.Year
          vm.newReview.runtime = movie.Runtime
          vm.newReview.review_type = movie.Type
          vm.newReview.writer = movie.Writer
          vm.newReview.imdb_rating = movie.imdbRating
          vm.newReview.imdb_votes = movie.imdbVotes
          vm.newReview.tomato_consensus = movie.tomatoConsensus
          vm.newReview.tomato_user = movie.tomatoUserMeter
          vm.newReview.tomato_critics = movie.tomatoMeter
          vm.newReview.tomato_url = movie.tomatoURL 


          return ReviewsFactory.createReview(vm.newReview)
                            .then(getReviews)
         }
        
        function getReviews() {
          return ReviewsFactory.getReviews()
                        .then(setReviews)

        }

        function getReview() {
          
        }

        function updateReview() {
          
        }

        function deleteReview() {
          
        }

        function setReviews(data)  {
          return vm.reviews = data
        }

        function createReviewInformation() {
          return ReviewsFactory.getInformation(vm.newReview.imdb_id)
                               .then(setNewReview)
         }

    

        }




  }())