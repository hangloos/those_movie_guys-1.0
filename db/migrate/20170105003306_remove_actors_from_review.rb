class RemoveActorsFromReview < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :actors
  end
end
