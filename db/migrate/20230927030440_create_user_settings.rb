class CreateUserSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :user_settings do |t|
      t.integer :user_id
      t.integer :setting_id

      t.timestamps
    end
  end
end
