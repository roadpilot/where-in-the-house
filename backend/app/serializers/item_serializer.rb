class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :current_location, :proper_location, :household_id, :last_update_user_id
end
