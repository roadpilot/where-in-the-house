class HouseholdUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :household_id
    belongs_to :user
    belongs_to :household
end
