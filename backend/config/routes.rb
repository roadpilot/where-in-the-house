Rails.application.routes.draw do
  resources :items
  resources :household_users
  resources :households
  resources :users
  get 'user/login' => 'users#login'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
