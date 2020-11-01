class CreateHouseholdUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :household_users do |t|
      t.integer :user_id
      t.integer :household_id

      t.timestamps
    end
  end
end
