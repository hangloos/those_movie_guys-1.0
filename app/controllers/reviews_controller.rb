class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    review = Review.find_by_id(params[:id])
    render json: review
  end

  def update
    review = Review.find_by_id(params[:id])
    if review.update(review_params)
      render json: review
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find_by_id(params[:id])
    review.genres.each{|x| x.destroy}
    review.actors.each{|x| x.destroy}
    review.destroy
  end


  private


  def review_params
    params.require(:review).permit(:awards, :box_office, :director,  :language, :picture_url, :production, 
      :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating,
      :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus, :tomato_user, :tomato_critics, :tomato_url, genres_attributes: [:name], actors_attributes: [:name])
  end

end
