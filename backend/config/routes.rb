Rails.application.routes.draw do
  resources :items
  resources :household_users
  resources :households
  resources :users
  root 'sessions#new'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
