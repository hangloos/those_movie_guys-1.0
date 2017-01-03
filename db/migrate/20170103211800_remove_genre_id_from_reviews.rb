class RemoveGenreIdFromReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :genre_id
  end
end
