class Removetomatofieldfromtable < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :tomato_user_reviews 
  end
end
