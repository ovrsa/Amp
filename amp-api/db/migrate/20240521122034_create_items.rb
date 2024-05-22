class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items, id: :uuid do |t|
      t.string :itemName
      t.timestamps
    end
    add_index :items, :itemName, unique: true
  end
end
