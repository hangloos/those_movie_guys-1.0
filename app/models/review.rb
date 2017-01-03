class Review < ApplicationRecord
  has_many :genres, through: :genre_review

  accepts_nested_attributes_for :genres
end
