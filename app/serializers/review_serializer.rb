class ReviewSerializer < ActiveModel::Serializer
  attributes :id,  :awards, :actors, :genres, :box_office, :director, :language, :picture_url, :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating, :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus, :tomato_user,  :tomato_critics, :tomato_url

  has_many :genre_reviews
  has_many :genres, :through => :genre_reviews

  has_many :actor_reviews
  has_many :actors, :through => :actor_reviews

  has_many :comments

end
