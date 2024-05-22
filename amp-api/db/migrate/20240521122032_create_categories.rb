class CreateCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :categoryName
      t.timestamps
    end
    add_index :categories, :categoryName, unique: true
  end
end
