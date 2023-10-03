class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :content
      t.string :answer
      t.float :score
      t.integer :difficult

      t.timestamps
    end
  end
end
