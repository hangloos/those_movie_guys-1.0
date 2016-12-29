Rails.application.routes.draw do
  resources :genres
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  devise_for :users

  root 'application#index'

end
