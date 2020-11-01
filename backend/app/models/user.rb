class User < ApplicationRecord
    has_secure_password
    has_many :household_users
    has_many :households, through: :household_users
end
