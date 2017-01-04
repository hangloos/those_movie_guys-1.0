class Genre < ApplicationRecord
  has_many :genre_review
  has_many :reviews, :through => :genre_review

end
