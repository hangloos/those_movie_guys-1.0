Rails.application.routes.draw do
  devise_for :admins
  resources :genres
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  devise_for :users

  resources :users , only: [:show, :edit]

  root 'application#index'

end
