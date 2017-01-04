class ReviewSerializer < ActiveModel::Serializer
  attributes :id,  :awards, :actors , :genres, :box_office, :director, :language, :picture_url, :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating, :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus, :tomato_user,  :tomato_critics, :tomato_url
end
