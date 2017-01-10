class Review < ApplicationRecord
  has_many :genre_reviews
  has_many :genres, :through => :genre_reviews

  has_many :actor_reviews
  has_many :actors, :through => :actor_reviews

  has_many :comments

  #belongs_to :admin

  ## this causes error - admin must exist??

  accepts_nested_attributes_for :genres, :allow_destroy => true
  accepts_nested_attributes_for :actors, :allow_destroy => true
end
