class ActorReviewSerializer < ActiveModel::Serializer
  attributes :review_id, :actor_id

  has_one :review
  has_one :actor
end
