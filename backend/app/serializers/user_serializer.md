class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  # has_many :household_users
  # has_many :households, through: :household_users

end
