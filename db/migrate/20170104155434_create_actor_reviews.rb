class CreateActorReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :actor_reviews do |t|
      t.integer :actor_id
      t.integer :review_id

      t.timestamps
    end
  end
end
