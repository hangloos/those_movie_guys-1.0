Rails.application.routes.draw do
  resources :genres
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  devise_for :users

  resources :users , only: [:show, :edit]

  root 'application#index'

end
