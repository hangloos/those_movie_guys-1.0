(function () {
    'use strict'

    angular
      .module('those-movie-guys')
      .controller('ReviewController', ReviewController)

       function ReviewController(ReviewsFactory) {

        var vm = this;

        vm.getReview = getReview;
        vm.editReviewRating = editReviewRating;
        vm.deleteReview = deleteReview;
        vm.createReviewInformation = createReviewInformation;
        vm.reset = reset;
        vm.showEditForm = showEditForm;
        vm.editTrueValue = false

        activate();

        function activate() {
          getReviews();
        }

        function showEditForm() {
          vm.editTrueValue = true
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
          var genre_array = []
          var genres = movie.Genre.split(", ")
          
          for ( var i = 0; i < genres.length; i++)  {
            genre_array.push({name: genres[i]})
          }

          vm.newReview.genres_attributes = genre_array

           var actor_array = []
           var actors = movie.Actors.split(", ")

           for ( var i = 0; i < actors.length; i++)  {
             actor_array.push({name: actors[i]})
           }

           vm.newReview.actors_attributes = actor_array




          return ReviewsFactory.createReview(vm.newReview)
                            .then(getReviews)
         }
        
        function getReviews() {
          return ReviewsFactory.getReviews()
                        .then(setReviews)

        }

        function getReview() {
          
        }

        function editReviewRating(id) {
          return ReviewsFactory.updateReview(id,this.newReview)
          vm.editTrueValue = false
          
        }

        function deleteReview(id) {
          return ReviewsFactory.deleteReview(id)
          
        }

        function setReviews(data)  {
          vm.totalReviews = data.length
          vm.reviews = data
          return vm.reviews

        }

        function createReviewInformation() {
          return ReviewsFactory.getInformation(vm.newReview.imdb_id)
                               .then(setNewReview)
         }


         function reset() {
          vm.newReview = {}
         }
    

        }




  }())