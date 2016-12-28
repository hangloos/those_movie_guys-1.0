class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :actors, :awards, :box_office, :director, :genre_id, :language, :picture, :production, :rated, :year, :runtime, :title, :type, :imdb_id, :viewing_platform, :those_movie_guy_rating, :those_movie_guys_review, :writer, :imdbRating, :imdbVotes, :tomatoConsensus, :tomatoUser, :tomatoUserReviews, :tomatoCritics, :tomatoURL
end
