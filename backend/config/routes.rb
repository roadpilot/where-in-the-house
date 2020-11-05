Rails.application.routes.draw do

namespace :api do
  namespace :v1 do
    resources :items, only: [:index, :create, :update]
    # resources :household_users
    # resources :households
    # resources :users
    root 'sessions#new'
    get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  end
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
