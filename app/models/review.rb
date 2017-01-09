class Review < ApplicationRecord
  has_many :genre_review
  has_many :genres, :through => :genre_review

  has_many :actor_review
  has_many :actors, :through => :actor_review

  belongs_to :admin

  accepts_nested_attributes_for :genres, :allow_destroy => true
  accepts_nested_attributes_for :actors, :allow_destroy => true
end
