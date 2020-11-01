class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :current_location
      t.string :proper_location
      t.integer :household_id
      t.integer :last_update_user_id

      t.timestamps
    end
  end
end
