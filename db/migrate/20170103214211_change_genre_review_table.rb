class ChangeGenreReviewTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :genre_review, :genre_reviews
  end
end
