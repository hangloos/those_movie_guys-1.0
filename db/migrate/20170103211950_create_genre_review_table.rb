class CreateGenreReviewTable < ActiveRecord::Migration[5.0]
  def change
    create_table :genre_review do |t|
      t.integer :review_id
      t.integer :genre_id
    end
  end
end
