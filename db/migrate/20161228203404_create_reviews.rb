class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :actors
      t.string :awards
      t.decimal :box_office
      t.string :director
      t.integer :genre_id
      t.string :language
      t.string :picture_url
      t.string :production
      t.string :rated
      t.string :year
      t.string :runtime
      t.string :title
      t.string :review_type
      t.string :imdb_id
      t.string :viewing_platform
      t.decimal :those_movie_guys_rating
      t.string :those_movie_guys_review
      t.string :writer
      t.decimal :imdb_rating
      t.integer :imdb_votes
      t.string :tomato_consensus
      t.integer :tomato_user
      t.integer :tomato_user_reviews
      t.integer :tomato_critics
      t.string :tomato_url

      t.timestamps
    end
  end
end
