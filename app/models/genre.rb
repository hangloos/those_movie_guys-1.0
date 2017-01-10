class Genre < ApplicationRecord
  has_many :genre_reviews
  has_many :reviews, :through => :genre_reviews

end
