class ActorSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :actor_reviews
  has_many :reviews, :through => :actor_reviews
end
