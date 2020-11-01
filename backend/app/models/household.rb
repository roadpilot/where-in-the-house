class Household < ApplicationRecord
    has_many :items 
    has_many :household_users
    has_many :users, through: :household_users
end
