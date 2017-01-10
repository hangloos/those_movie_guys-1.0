class GenreSerializer < ActiveModel::Serializer
  attributes :id, :comment, :review_id, :user_id

  has_one :review
  has_one :user

  
end
