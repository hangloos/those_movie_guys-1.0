class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :genre_reviews
  has_many :reviews, :through => :genre_reviews
end
