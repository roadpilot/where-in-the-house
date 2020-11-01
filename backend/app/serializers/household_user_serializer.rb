class HouseholdUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :household_id
end
