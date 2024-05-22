class CreateUserItems < ActiveRecord::Migration[7.1]
  def change
    create_table :user_items, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :item, null: false, foreign_key: true, type: :uuid
      t.references :user_category, null: false, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
