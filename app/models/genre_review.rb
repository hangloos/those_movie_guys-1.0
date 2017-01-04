class GenreReview < ApplicationRecord
  belongs_to :review 
  belongs_to :genre 

end
