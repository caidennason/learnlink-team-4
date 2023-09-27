class CreateSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :settings do |t|
      t.string :font_color
      t.integer :font_size
      t.string :font_family
      t.integer :font_spacing
      t.boolean :is_auto_play_tts

      t.timestamps
    end
  end
end
