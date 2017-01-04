class Actor < ApplicationRecord

  has_many :actor_review
  has_many :reviews, :through => :actor_review
end
