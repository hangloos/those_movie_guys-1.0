class Genre < ApplicationRecord
  has_many :reviews, through: :genre_review

end
