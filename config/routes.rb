Rails.application.routes.draw do
  resources :genres
  resources :reviews
  devise_for :users

  root 'application#index'

end
