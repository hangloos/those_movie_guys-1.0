class GenreReviewSerializer < ActiveModel::Serializer
  attributes :review_id, :genre_id

  has_one :review
  has_one :genre 
end
