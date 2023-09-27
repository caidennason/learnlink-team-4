class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.datetime :date_of_birth
      t.string :native_language
      t.string :learning_language

      t.timestamps
    end
  end
end
