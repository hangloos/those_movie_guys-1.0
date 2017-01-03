class RemoveReviewIdFromGenres < ActiveRecord::Migration[5.0]
  def change
      remove_column :genres, :review_id
  end
end
